import { Logo } from "@/components/Shared";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { navbarData } from "./Navbar.data";
import { cn } from "@/lib/utils";

export type NavbarProps = {
  theme: "light" | "yellow";
};

export function Navbar(props: NavbarProps) {
  const { theme } = props;

  const navbarClass = theme === "light" ? "bg-white" : "bg-[#E1F56E]";

  return (
    <div className={cn(`pt-3 md:pt-6 pb-4 ${navbarClass}`)}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-between md:justify-start items-end gap-6 w-full px-6 md:px-0">
          <Logo />
          <MobileNav />

          <div className="hidden md:flex gap-5 font-semibold pb-2">
            {navbarData.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            className="border-2 border-[#6f6f6d] font-extrabold"
          >
            Pon tu anuncio gratis
          </Button>

          <Button variant="ghost" className="ml-2 text-lg" asChild>
            <Link href="/login">
              <User className="" />
              Acceder
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
