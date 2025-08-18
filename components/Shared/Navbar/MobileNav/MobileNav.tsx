import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navbarData } from "../Navbar.data";
import Link from "next/link";

export function MobileNav() {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 text-gray-700" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menú mobile</SheetTitle>
            <SheetDescription>
              {navbarData.map((item) => (
                <Link key={item.name} href={item.href} className="block py-2">
                  {item.name}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
