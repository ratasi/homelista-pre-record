import { Navbar } from "@/components/Shared";
import { ChooseGrid, HeroBlock, HomeApp, LastProperties } from "./components";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar theme="light" />

      <HeroBlock />

      <ChooseGrid />

      <HomeApp />

      <LastProperties />
    </div>
  );
}
