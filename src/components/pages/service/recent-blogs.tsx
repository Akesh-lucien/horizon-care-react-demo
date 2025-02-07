import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import React from "react";

interface BlogPostCardProps {
  category: string;
  author: string;
  date: string;
  title: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPostCardProps[] = [
  {
    category: "Business",
    author: "GrowHub",
    date: "November 28, 2023",
    title:
      "Exploring the Full Spectrum of Digital Marketing’s Influence and Impact in the...",
    imageUrl: "/images/digital-marketing.jpg",
    slug: "exploring-digital-marketing-influence",
  },
  {
    category: "Meeting",
    author: "GrowHub",
    date: "November 28, 2023",
    title: "Delivering Memorable and Building Brand the Company Loyalty Zone",
    imageUrl: "/images/brand-loyalty.jpg",
    slug: "building-brand-loyalty-zone",
  },
  {
    category: "Projects",
    author: "GrowHub",
    date: "November 28, 2023",
    title:
      "Mastery of Creative Problem Solving in Your Startup Office Business Plan",
    imageUrl: "/images/startup-office.jpg",
    slug: "creative-problem-solving-startup",
  },
];

function RecentBlogs() {
  return (
    <section className="py-8 md:py-12 space-y-6 md:space-y-8 container md:px-0 px-8">
      <Heading
        accent="Latest News Update"
        heading1="Everything about the business"
        heading2="world in one place."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((blogData) => (
          <BlogCard key={blogData.title} {...blogData} />
        ))}
      </div>
    </section>
  );
}

const BlogCard = React.memo(
  ({ category, author, date, title, imageUrl, slug }: BlogPostCardProps) => {
    return (
      <div className="max-w-xl bg-white rounded-3xl overflow-hidden shadow-sm">
        <div className="relative">
          <img
            src="/images/blogs-img.webp"
            alt={title}
            className="w-full h-64 object-cover"
          />

          <div className="absolute top-4 left-4">
            <span className="bg-white px-4 py-1 uppercase rounded-full text-sm font-body font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          {/* Author and Date */}
          <div className="flex items-center gap-2 font-body uppercase text-gray-600 text-sm mb-3">
            <span>BY {author}</span>
            <span>•</span>
            <span className="font-body uppercase">{date}</span>
          </div>

          <h2 className="text-[#1B4B43] font-heading text-2xl font-bold leading-tight mb-6">
            {title}
          </h2>
          <div className="w-[50%]">
            <SharedButton renderText="read more" />
          </div>
        </div>
      </div>
    );
  }
);

export default RecentBlogs;
