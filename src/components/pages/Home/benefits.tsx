import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import Image from "next/image";

function BenefitsSection() {
  return (
    <section className="py-12 space-y-32">
      <div className=" container grid grid-cols-2 items-start space-x-12 my-10">
        <div className="col-span-1 space-y-3">
          <Heading
            accent="People Benefits"
            heading1="Get 50% Off On"
            heading2="YourFirst Insurance Plan"
            subhead="In addition to competition, factory companies also fe challenges related
to labor and the environment. Many factory companies hae been
criticized for exploiting workers and polluting the environment address
these concerns"
          />
          <FadingSlide>
            <p className="font-heading font-medium text-xl  mt-8">
              Mechanic's Special Services:
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
            </div>
          </FadingSlide>
          <FadingSlide>
            <div className="max-w-52 mt-4">
              <SharedButton renderText="view services" />
            </div>
          </FadingSlide>
        </div>
        <div className="col-span-1">
          <Image
            src="/images/benefits-1.webp"
            alt="benefits-1"
            width={700}
            height={700}
            className="object-cover"
          />
        </div>
      </div>
      <div className=" container grid grid-cols-2 items-start space-x-12 my-10">
        <div className="col-span-1">
          <Image
            src="/images/benefits-2.webp"
            alt="benefits-1"
            width={700}
            height={700}
            className="object-cover"
          />
        </div>
        <div className="col-span-1 space-y-3">
          <Heading
            accent="People Benefits"
            heading1="Get 50% Off On"
            heading2="YourFirst Insurance Plan"
            subhead="In addition to competition, factory companies also fe challenges related
to labor and the environment. Many factory companies hae been
criticized for exploiting workers and polluting the environment address
these concerns"
          />
          <FadingSlide>
            <p className="font-heading font-medium text-xl  mt-8">
              Mechanic's Special Services:
            </p>
          </FadingSlide>
          <FadingSlide>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
              <div className="col-span-1 flex items-center gap-3">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
                <p className="font-body text-hover/70">Fast Growing Sells</p>
              </div>
            </div>
          </FadingSlide>
          <FadingSlide>
            <div className="max-w-52 mt-4">
              <SharedButton renderText="view services" />
            </div>
          </FadingSlide>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
