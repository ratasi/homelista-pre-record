import Image from "next/image";

export function HomeApp() {
  return (
    <section className="grid grid-cols-[70%_1fr] my-10 md:my-30 relative">
      <div className="md:w-[900px] h-auto pt-10">
        <Image src="/home-app.jpg" alt="Home App" width={900} height={500} />
      </div>
      <div className="absolute top-0 right-0 w-[500px] p-6 border bg-white">
        <p className="font-extrabold text-xl md:max-w-60 mb-4">
          Lleva idealista siempre contigo
        </p>
        <div className="flex gap-5">
          <p>
            Con nuestra app serás el primero en enterarte de nuevos inmuebles,
            cambios en tus favoritos y mensajes del chat.
          </p>
          <Image src="/qr_app_es.png" alt="QR Code" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}
