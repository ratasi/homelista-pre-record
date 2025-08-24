export function normalizeString(str: string) {
  return str
    .normalize("NFD") // separa caracteres y acentos
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // espacios por guiones
}
