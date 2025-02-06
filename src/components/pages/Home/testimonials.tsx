import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import Image from "next/image";

function TestimonialsSection() {
  return (
    <section>
      <div className="bg-[url('/images/testimonial-bg.png')] bg-cover bg-no-repeat py-12 bg-primary">
        <div className="container space-y-8">
          <Heading accent="Testimonials" heading1="What Our Clients Say" dark />
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-12 items-center gap-10 p-4">
                    <div className="col-span-4">
                      <Image
                        src="/images/testimonials-user-img.webp"
                        alt="Testimonial"
                        width={400}
                        height={600}
                        className="rounded-lg object-fill"
                      />
                    </div>
                    <div className="col-span-8">
                      <div className="space-y-4">
                        <p className="text-lg font-body italic text-white">
                          "We are helping companies untangle very large complex
                          issues that always emerge during their digital
                          evolution journey."
                        </p>
                        <div>
                          <h4 className="text-xl font-heading font-semibold text-white">
                            Diamond Miller
                          </h4>
                          <p className="text-white">CEO Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
