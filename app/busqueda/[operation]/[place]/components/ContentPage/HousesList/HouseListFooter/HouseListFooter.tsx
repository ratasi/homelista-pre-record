import { Heart, MessageSquareMore, Phone, Trash } from "lucide-react";
import Link from "next/link";

export type HouseListFooterProps = {
  houseId: number;
  phone: string;
};

export function HouseListFooter(props: HouseListFooterProps) {
  const { houseId, phone } = props;
  console.log(houseId);

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 text-[#145bc7] font-bold hover:underline">
          <MessageSquareMore />
          Contactar
        </div>
        <Link
          href={`telto:${phone}`}
          target="_blank"
          className="flex items-center gap-2 text-[#145bc7] font-bold hover:underline"
        >
          <Phone />
          Ver teléfono
        </Link>
      </div>
      <div className="flex gap-5">
        <Trash />
        <Heart />
      </div>
    </div>
  );
}
