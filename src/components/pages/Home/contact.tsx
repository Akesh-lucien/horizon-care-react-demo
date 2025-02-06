import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import Image from "next/image";

function ContactSection() {
  return (
    <section className="bg-[url('/images/contact-bg-lg.png')] bg-cover bg-no-repeat">
      <div className="container grid grid-cols-2 items-start space-x-12 py-16">
        <div className="col-span-1 space-y-8">
          <Heading
            accent="Let'S Discuss About Projects"
            heading1="Make an Appointment"
          />
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
                <div className="w-[50%]">
                  <SharedButton renderText="make an appointment" />
                </div>
              </FadingSlide>
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <Image
            src="/images/contact-right.webp"
            alt="benefits-1"
            width={700}
            height={700}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
