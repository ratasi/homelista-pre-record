import { Navbar } from "@/components/Shared";
import {
  SliderCarousel,
  AskSeller,
  InfoHouse,
  Actions,
  CommentSeller,
  SubSlider,
  ContactChat,
  MainFeatures,
  AdsUpdatedAt,
} from "./components";

export default function PropertyPageId() {
  return (
    <div className="w-full bg-[#F4F5F2] h-full">
      <Navbar theme="yellow" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[65%_1fr] gap-6 h-full mb-4">
          <div className="bg-white relative">
            <div className="p-6">
              <SliderCarousel />

              <SubSlider />

              <InfoHouse />

              <Actions />

              <CommentSeller />
            </div>

            <ContactChat />

            <MainFeatures />

            <AdsUpdatedAt />
          </div>

          <AskSeller />
        </div>
      </div>
    </div>
  );
}
