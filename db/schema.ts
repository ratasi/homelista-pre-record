import {
  pgTable,
  text,
  timestamp,
  boolean,
  pgEnum,
  integer,
  varchar,
  numeric,
  jsonb,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const operationEnum = pgEnum("operation", ["venta", "alquiler"]);

export const property = pgTable("property", {
  id: text("id").primaryKey(), // si quieres puedes usar serial, pero si usas `text` será más consistente con Better Auth
  tipology: varchar("tipology", { length: 100 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  streetName: varchar("street_name", { length: 255 }).notNull(),
  streetNumber: varchar("street_number", { length: 20 }),

  operation: operationEnum("operation").notNull(),

  stateHouse: varchar("state_house", { length: 100 }),
  buildMeters: integer("build_meters"),
  utilsMeters: integer("utils_meters"),

  rooms: integer("rooms"),
  bathrooms: integer("bathrooms"),
  energyCertificate: varchar("energy_certificate", { length: 50 }),

  price: numeric("price", { precision: 12, scale: 2 }).notNull(),
  images: jsonb("images").$type<{ url: string }[]>().default([]).notNull(),

  latitude: numeric("latitude", { precision: 10, scale: 7 }),
  longitude: numeric("longitude", { precision: 10, scale: 7 }),

  // Relación con usuario
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const schema = { user, session, account, verification, property };
