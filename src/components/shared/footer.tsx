"use client";

import { footerData } from "@/constants/data/index";

function Footer() {
  const { company } = footerData;
  const { workingTime } = footerData;
  const { contactUs } = footerData;
  return (
    <footer className="bg-[#1a3841] py-12">
      <div className="grid grid-cols-4 items-start gap-8 container">
        <div className="col-span-1 space-y-4">
          <h3 className="font-heading font-medium capitalize text-white/80 text-4xl">
            {company.title}
          </h3>
          {company.links.map((link) => (
            <p
              key={link.label}
              className="font-body font-normal text-white/80 text-md cursor-pointer hover:text-white/50 transition-colors duration-500"
            >
              {link.label}
            </p>
          ))}
        </div>
        <div className="col-span-1 space-y-4">
          <h3 className="font-heading font-medium capitalize text-white/80 text-4xl">
            {workingTime?.title}
          </h3>
          {workingTime?.schedule?.map((times) => (
            <p
              key={times.days}
              className="font-body font-normal text-white/80 text-md cursor-pointer hover:text-white/50 transition-colors duration-500"
            >
              {times.days} {times.hours}
            </p>
          ))}
        </div>
        <div className="col-span-1 space-y-4">
          <h3 className="font-heading font-medium capitalize text-white/80 text-4xl">
            {contactUs.title}
          </h3>
          <p className="font-body font-normal text-white/80 text-md cursor-pointer hover:text-white/50 transition-colors duration-500">
            {contactUs.info.phone}
          </p>
          <p className="font-body font-normal text-white/80 text-md cursor-pointer hover:text-white/50 transition-colors duration-500">
            {contactUs.info.email}
          </p>
          <p className="font-body font-normal text-white/80 text-md cursor-pointer hover:text-white/50 transition-colors duration-500">
            {contactUs.info.address}
          </p>
        </div>
        <div className="col-span-1 space-y-4">
          <h3 className="font-heading font-medium capitalize text-white/80 text-4xl">
            Subscribe newsletter
          </h3>
          <p className="font-body font-normal text-white/80 text-md cursor-pointer hover:text-white/50 transition-colors duration-500">
            I'm okay with getting emails and having that tracked to improve my
            experience
          </p>
        </div>
      </div>
      <div className="pt-8 text-center mt-12 border-t border-white/20">
        <div className="container flex justify-between items-center space-x-4">
          <p className="font-body text-white/80 text-sm">
            © 2024 Horizon Care. All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="/terms"
              className="font-body text-white/80 text-sm hover:text-white/50 transition-colors duration-500"
            >
              Terms and conditions
            </a>
            <a
              href="/privacy"
              className="font-body text-white/80 text-sm hover:text-white/50 transition-colors duration-500"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
