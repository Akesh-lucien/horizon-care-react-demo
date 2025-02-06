import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { Contact2Icon, Headphones } from "lucide-react";
import React from "react";

type ContactInfoProps = {
  method: string;
  message: string;
};

const contactDetails: ContactInfoProps[] = [
  {
    method: "+1 (555) 123-4567",
    message: "Call us directly",
  },
  {
    method: "support@horizoncare.com",
    message: "Send us an email",
  },
  {
    method: "Mon - Fri, 9am - 6pm EST",
    message: "Working hours",
  },
];

function ContactPageHeroSection() {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center justify-center gap-0 bg-cover bg-no-repeat h-[60vh] bg-[url('/images/services-hero.jpeg')]">
        <h1 className="font-heading font-bold capitalize text-7xl text-white">
          Contact Us
        </h1>
        <p className="font-body font-medium capitalize text-white/80">
          Horizon care &gt; Contact Us
        </p>
      </div>
      <div className="container grid grid-cols-12 items-center gap-8">
        <div className="col-span-5 grid-cols-1 items-center space-y-8 py-12">
          <Heading
            accent="Contact Us"
            heading1="Let’s working together"
            subhead="Thank you for your interest in Attach Web Agency. We're excited to hear from you."
          />
          {contactDetails.map((contact) => (
            <ContactInfoCard key={contact.method} {...contact} />
          ))}
        </div>
        <div className="col-span-7">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 pl-10 py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 pl-10 py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="relative">
              <select className="w-full px-4 py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary appearance-none font-body">
                <option value="">Select Service</option>
                <option value="service1">IT management</option>
                <option value="service2">Project management</option>
                <option value="service3">Startup solutions</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body"
                />
              </div>

              <div className="relative">
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter message"
                  className="w-full px-4 pl-10 py-3 bg-white/90 rounded-full border border-gray-200 focus:outline-none focus:border-primary font-body"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
              </div>
              <FadingSlide>
                <div className="w-[40%]">
                  <SharedButton renderText="make an appointment" />
                </div>
              </FadingSlide>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.532833261432!2d73.11336030000001!3d18.996228400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9a1a5a0c18b%3A0x713d135606b6fedf!2sLucien%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1738760307779!5m2!1sen!2sin"
          width="100%"
          height="100vh"
          style={{ border: 0, height: "100vh", borderRadius: "32px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

const ContactInfoCard = React.memo(({ message, method }: ContactInfoProps) => {
  return (
    <div className="flex items-center gap-4">
      <Contact2Icon size={24} className="text-teal-700" />
      <div className="flex flex-col">
        <span className="text-gray-500 font-body text-sm">{message}</span>
        <p className="text-gray-900 font-semibold font-body text-lg hover:text-teal-700 transition-colors">
          {method}
        </p>
      </div>
    </div>
  );
});

ContactInfoCard.displayName = "ContactInfoCard";

export default ContactPageHeroSection;
