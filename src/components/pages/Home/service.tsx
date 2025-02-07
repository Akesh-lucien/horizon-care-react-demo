import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { LightbulbIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function ServiceSection() {
  return (
    <section className="py-6 md:py-12 lg:py-16">
      <Heading
        accent="More About Our Company"
        heading1="Service We Provide"
        center
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-8 lg:gap-12 my-6 md:my-8 lg:my-10">
        {/*section1*/}
        <div className="col-span-1 bg-white px-4 xs:px-6 sm:px-8 md:px-11 py-8 md:py-12 lg:py-16 rounded-xl shadow-xl space-y-3">
          <FadingSlide>
            <Image
              src="/images/service-img.webp"
              alt="benefits-1"
              width={700}
              height={700}
              className="w-full h-auto max-w-[700px] mx-auto object-cover rounded-xl"
            />
          </FadingSlide>
          <FadingSlide>
            <h3 className="font-heading font-medium text-primary text-xl sm:text-2xl capitalize mt-3">
              Peace Shield Insurance
            </h3>
          </FadingSlide>
          <FadingSlide>
            <p className="font-body font-normal text-sm sm:text-base md:text-md text-hover/50">
              Abitant porta litora pretium auctasor imperdiet quisque lacinia
              facisis taciti quam done fusce dignissim dapibus pellentesque
              interdum at nullam erat laoreet dis primis hac consequat turpis.
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="max-w-40 sm:max-w-52">
              <SharedButton renderText="learn more" noArrow />
            </div>
          </FadingSlide>
        </div>
        {/*section2*/}
        <div className="col-span-1 grid grid-cols-2 xs:grid-cols-2 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <HoverCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const HoverCard = React.memo(() => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center rounded-xl drop-shadow-xl bg-white/90 px-5 py-12">
      <div>
        <LightbulbIcon size={64} />
      </div>
      <h3 className="font-heading font-medium text-primary text-2xl capitalize mt-3">
        SafeGuard Assurance
      </h3>
      <p className="font-body font-normal text-md text-center text-hover/50">
        Abitant porta litora pretium auctasor imperdiet
      </p>
    </div>
  );
});
HoverCard.displayName = "HoverCard";

export default ServiceSection;
