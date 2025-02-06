import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { LightbulbIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function ServiceSection() {
  return (
    <section className="py-12">
      <Heading
        accent="More About Our Company"
        heading1="Service We Provide"
        center
      />
      <div className="container grid grid-cols-2 items-start space-x-12 my-10">
        {/*section1*/}
        <div className="col-span-1 bg-white px-11 py-16 rounded-xl shadow-xl space-y-3">
          <FadingSlide>
            <Image
              src="/images/service-img.webp"
              alt="benefits-1"
              width={700}
              height={700}
              className="object-cover rounded-xl"
            />
          </FadingSlide>
          <FadingSlide>
            <h3 className="font-heading font-medium text-primary text-2xl capitalize mt-3">
              Peace Shield Insurance
            </h3>
          </FadingSlide>
          <FadingSlide>
            <p className="font-body font-normal text-md text-hover/50">
              Abitant porta litora pretium auctasor imperdiet quisque lacinia
              facisis taciti quam done fusce dignissim dapibus pellentesque
              interdum at nullam erat laoreet dis primis hac consequat turpis.
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="max-w-52">
              <SharedButton renderText="learn more" noArrow />
            </div>
          </FadingSlide>
        </div>
        {/*section2*/}
        <div className="col-span-1 grid grid-cols-2 items-center gap-6">
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
