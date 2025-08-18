import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <h1 className="px-4 md:px-0">
        <p className="text-2xl md:text-6xl font-[Pixelify_Sans]">Homelista</p>
      </h1>
    </Link>
  );
}
