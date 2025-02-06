import { useState } from "react";
import MainBlogCard from "./main-blog-card";
import { blogData } from "@/constants/data/index";
import { Input } from "@/components/shadcn/input";
import SharedButton from "@/components/shared/sharedButton";
import RecentBlogCard from "./recent-blog-card";

function BlogPageHeroSection() {
  const singleBlog = blogData[0];
  const [] = useState("");
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center gap-0 space-y-6 bg-cover bg-no-repeat h-[60vh] bg-[url('/images/services-hero.jpeg')]">
        <h1 className="font-heading font-bold capitalize text-7xl text-white">
          Blog
        </h1>
        <p className="font-body font-medium capitalize text-white/80">
          Horizon care &gt; Blog
        </p>
      </div>
      <div className="container grid grid-cols-12 items-start gap-8 py-12">
        <div className="col-span-8 space-y-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <MainBlogCard key={i} {...singleBlog} />
          ))}
        </div>
        <div className="col-span-4">
          <form className="inline-flex items-center justify-center border border-black rounded-full">
            <Input
              className="border-none rounded-full"
              type="text"
              placeholder="search.."
            />
            <SharedButton renderText="search" />
          </form>
          <div className="grid grid-cols-1 items-start my-9 space-y-12 ">
            <div className="col-span-1 p-8 bg-gray-300/30 rounded-2xl space-y-7">
              <h3 className="capitalize font-heading font-medium text-2xl text-hover">
                recent blogs
              </h3>
              {Array.from({ length: 4 }).map((_, i) => (
                <RecentBlogCard
                  key={i}
                  author="oreo"
                  category="respiratory care"
                  date="jan 1"
                  description="lorem"
                  imageUrl="/images/benefits-1.webp"
                  title="Exploring the Full Spectrum of…"
                />
              ))}
            </div>
            <div className="col-span-1 p-8 bg-gray-300/30 rounded-2xl space-y-7">
              <h3 className="capitalize font-heading font-medium text-2xl text-hover">
                tags
              </h3>
              <div className="grid grid-cols-4 items-start gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="py-1 px-0 border border-gray-300 rounded-full bg-white hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer flex items-center justify-center "
                  >
                    <span className="font-body capitalize">tag</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPageHeroSection;
