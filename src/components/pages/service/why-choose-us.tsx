import Heading from "@/components/shared/heading";
import { UserCircle } from "lucide-react";
import React from "react";

interface WhyChooseProps {
  title: string;
  description: string;
}

const whyChooseCardsData: WhyChooseProps[] = [
  {
    title: "Best Business Consulting",
    description:
      "Fusce condimentum mattis placerat odio donec lacus porta torq uent, mauris gravida rutrum.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Placerat condimentum mattis odio donec lacus porta torq uent, mauris gravida rutrum Fusce.",
  },
  {
    title: "Professional Team Members",
    description:
      "Mattis Placerat condimentum odio donec lacus porta torq uent, mauris gravida rutrum Fusce.",
  },
];

function WhyChooseUs() {
  return (
    <section className="grid grid-cols-2 items-center gap-0 py-16">
      <div className="col-span-1 bg-[url('/images/choosusbg.jpeg')] bg-cover bg-center h-[120vh]"></div>
      <div className="col-span-1 grid grid-cols-1 items-center space-y-8 px-9">
        <Heading
          accent="Why People Choose Us"
          heading1="Take control &"
          heading2="learn about your money."
        />
        {whyChooseCardsData.map((data) => (
          <WhyChooseCard key={data.title} {...data} />
        ))}
      </div>
    </section>
  );
}

const WhyChooseCard = React.memo(({ title, description }: WhyChooseProps) => {
  return (
    <div className="bg-gray-100 drop-shadow-lg p-8 w-full rounded-2xl">
      <div className="flex items-start gap-6">
        {/* Circle with Icon */}
        <div className="bg-[#E5EEEE] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
          <UserCircle size={48} />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h2 className="text-[#1B4B43] text-3xl font-heading font-medium mb-2">
            {title}
          </h2>
          <p className="text-gray-500 text-lg font-body leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});
WhyChooseCard.displayName = "WhyChooseCard";

export default WhyChooseUs;
