import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import Heading from "@/components/shared/heading";
import Image from "next/image";

function OurGallery() {
  return (
    <section className="bg-[url('/images/gallery-bg.png')] bg-cover md:bg-contain bg-no-repeat px-4 sm:px-6 md:px-8 pt-8 md:pt-32 xl:pt-40">
      <Heading accent="Our Features" heading1="Photos From Gallery" dark />
      <div className="container mx-auto max-w-7xl">
        <Carousel className="mx-auto mt-8 md:mt-12">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem 
                key={index} 
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-2">
                  <Image
                    src="/images/gallery-img-1.webp"
                    alt="Genious Smart Solution"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="left-2 md:left-4 scale-75 md:scale-100" 
            size="sm"
          />
          <CarouselNext 
            className="right-2 md:right-4 scale-75 md:scale-100"
            size="sm"
          />
        </Carousel>
      </div>
    </section>
  );
}

export default OurGallery;
