import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, House, LogOut, User } from "lucide-react";
import Link from "next/link";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <User /> Mi cuenta <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/usuario/tus-anuncios"
            className="flex items-center gap-2"
          >
            <House />
            Tus anuncios
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/usuario/favoritos" className="flex items-center gap-2">
            <Heart />
            Favoritos
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center cursor-pointer">
            <LogOut />
            Cerrar sesión
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
