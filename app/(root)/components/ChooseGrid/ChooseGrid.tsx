import Link from "next/link";

export function ChooseGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 my-10 md:my-20 p-2">
      <Link href="/" className="flex items-center border border-[#e5e6e1]">
        <div className="bg-[url('/choose-1.jpg')] bg-center bg-cover w-[170px] h-[170px]"></div>
        <div className="px-5">
          <h4 className="text-xl font-semibold mb-2">
            Dibuja tu zona de búsqueda
          </h4>
          <p className="mb-3">
            Elegir exactamente la zona que estás buscando sobre un mapa.
          </p>

          <p className="text-[#145bc7] font-semibold">
            Empezar a dibujar tu búsqueda
          </p>
        </div>
      </Link>
      <Link href="/" className="flex items-center border border-[#e5e6e1]">
        <div className="bg-[url('/choose-2.jpg')] bg-center bg-cover w-[170px] h-[170px]"></div>
        <div className="px-5">
          <h4 className="text-xl font-semibold mb-2">
            Publicar tu inmueble gratis
          </h4>
          <p className="mb-2">
            Tus 2 primeros anuncios son gratis. Casas, habitaciones, oficina...
            ¡Todo cabe!
          </p>

          <p className="text-[#145bc7] font-semibold">
            Poner tu anuncio gratis
          </p>
        </div>
      </Link>
    </section>
  );
}
