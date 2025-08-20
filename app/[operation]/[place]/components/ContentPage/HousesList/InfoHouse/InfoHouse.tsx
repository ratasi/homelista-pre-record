export type InfoHouseProps = {
  title: string;
  price: number;
  rooms: number;
  meters: number;
  floor: number;
  elevator: boolean;
  description: string;
};

export function InfoHouse(props: InfoHouseProps) {
  const { title, price, rooms, meters, floor, elevator, description } = props;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <h3 className="text-lg text-[#145bc7] font-semibold mb-2">{title}</h3>
      <div className="mb-2">
        <span className="text-2xl font-extrabold">{formatPrice(price)}</span>
        <span className="ml-1.5">€</span>
      </div>
      <div className="flex gap-2">
        <span className="">{rooms} hab.</span>
        <span className="">{meters} m²</span>
        <span>
          Planta {floor}ª exterior {elevator ? "con ascensor" : "sin ascensor"}
        </span>
      </div>
      <p className="line-clamp-2 text-[#4d4d4c] mt-2">{description}</p>
    </div>
  );
}
