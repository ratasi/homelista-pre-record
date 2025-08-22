import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen justify-center items-center bg-[#F4F5F2]">
      <div className="bg-white p-5 w-[450px] mx-auto shadow-md">
        <Link href="/" className="text-center">
          <h1 className="px-4 md:px-0">
            <p className="text-2xl font-[Pixelify_Sans]">Homelista</p>
          </h1>
        </Link>
        {children}
      </div>
    </div>
  );
}
