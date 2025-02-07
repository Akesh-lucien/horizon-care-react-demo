import { ComputerIcon } from "lucide-react";
import React from "react";

type ServiceProps = {
  id: number;
  title: string;
  description: string;
  link: string;
};

const services: ServiceProps[] = [
  {
    id: 1,
    title: "Consulting Services",
    description:
      "This strategy encompasses a wide range of from online marketing and social media to website.",
    link: "/consulting-services",
  },
  {
    id: 2,
    title: "Digital Solution",
    description:
      "This approach allows businesses and individuals to have a website that aligns with their brand.",
    link: "/digital-solution",
  },
  {
    id: 3,
    title: "Financial Consultancy",
    description:
      "Wireframes are basic, low-fidelity visual of website or app's layout and structure Strategy.",
    link: "/financial-consultancy",
  },
  {
    id: 4,
    title: "Business Strategy",
    description:
      "Content creation and integration is a pivotal aspect of web design and Solutions Agency.",
    link: "/business-strategy",
  },
  {
    id: 5,
    title: "Investment Advisory",
    description:
      "Content creation and integration is a pivotal aspect of web design Solutions Agency.",
    link: "/investment-advisory",
  },
  {
    id: 6,
    title: "Digital Planning",
    description:
      "Integration content creation and is a pivotal aspect of web development sector and part.",
    link: "/digital-planning",
  },
];

function ServicePageHeroSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-0 bg-cover bg-no-repeat h-[20vh] md:h-[50vh] bg-[url('/images/services-hero.jpeg')]">
        <h1 className="font-heading font-bold capitalize text-4xl sm:text-7xl text-white">
          Services
        </h1>
        <p className="font-body font-medium capitalize text-white/80">
          Horizon care &gt; services
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 container py-16">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}

const ServiceCard = React.memo(({ title, description, link }: ServiceProps) => {
  return (
    <div className="p-6 sm:p-8 rounded-[32px] cursor-pointer border-black/10 border hover:border-black transition-all duration-700 bg-white">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="bg-[#F5F9F9] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0">
          <ComputerIcon />
        </div>

        <div className="flex flex-col gap-1 sm:gap-2">
          <h2 className="text-[#1B4B43] text-2xl sm:text-3xl font-heading font-medium">
            {title}
          </h2>

          <p className="text-[#6F777F] text-base sm:text-lg font-body font-normal">
            {description}
          </p>

          <a
            href={link}
            className="inline-flex items-center text-[#1B4B43] font-heading font-semibold mt-2 sm:mt-3"
          >
            Read More
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M4 10h12M12 6l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServicePageHeroSection;
