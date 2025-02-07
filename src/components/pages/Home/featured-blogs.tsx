import FadingSlide from "@/components/shared/fadingSlide";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

function FeaturedBlogs() {
  return (
    <section className="px-4 sm:px-6 md:px-8">
      <div className="container grid grid-cols-1 md:grid-cols-12 items-start gap-y-8 md:gap-x-12 py-8 md:py-16">
        <div className="md:col-span-4 space-y-6 lg:space-y-8">
          <Heading
            accent="Featured This Week"
            heading1="Most Reliable Insures"
            heading2="Efficient Consulting Agency"
            subhead="Neque partrient sed nascetur facilisis suscipit ridiculus magna lobortis
imperdiet vivamus est aliquam euismod nector quam convallis ornare
justo service visionary sources unleash online"
          />
          <FadingSlide>
            <div className="w-full md:w-1/2 lg:w-[50%]">
              <SharedButton renderText="read more" />
            </div>
          </FadingSlide>
        </div>
        <div className="md:col-span-8 space-y-6 md:space-y-8 lg:space-y-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <BlogCard
              key={i}
              author="By Growhub"
              date="November 28, 2023"
              imageUrl="/images/benefits-1.webp"
              title="Exploring the Full Spectrum of Digital Marketing’s…"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const BlogCard = React.memo(
  ({ title, author, date, imageUrl }: BlogCardProps) => {
    return (
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full md:w-48 h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>

        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center text-sm font-body text-gray-600 mb-2">
            <span>BY {author.toUpperCase()}</span>
            <span className="mx-2">•</span>
            <span className="font-body">{date}</span>
          </div>

          <h2 className="text-xl font-heading font-bold text-gray-900 mb-4 line-clamp-2">
            {title}
          </h2>

          <div className="mt-auto w-[50%] md:w-[40%]">
            <SharedButton renderText="read more" />
          </div>
        </div>
      </div>
    );
  }
);
BlogCard.displayName = "BlogCard";

export default FeaturedBlogs;
