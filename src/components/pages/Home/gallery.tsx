import Heading from "@/components/shared/heading";
import Image from "next/image";

function OurGallery() {
  return (
    <section className="bg-[url('/images/gallery-bg.png')] bg-contain px-8 bg-no-repeat pt-40">
      <Heading accent="Our Features" heading1="Photos From Gallery" dark />
      <div className="flex justify-start items-start space-x-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Image
            key={index}
            src="/images/gallery-img-1.webp"
            alt="Genious Smart Solution"
            width={400}
            height={600}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}

export default OurGallery;
