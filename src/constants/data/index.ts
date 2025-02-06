import { BlogCardProps, IFooterData } from "@/types/index";

// footer data start
export const footerData: IFooterData = {
  company: {
    title: "Company",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  workingTime: {
    title: "Working Time",
    schedule: [
      { days: "Mon - Fri", hours: "9:00 AM - 5:00 PM" },
      { days: "Saturday", hours: "10:00 AM - 6:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  contactUs: {
    title: "Contact Us",
    info: {
      email: "support@example.com",
      phone: "+258 (549) 2158 3215",
      address: "2589 Dorland Street Luke INUA Berlin, Germany",
    },
  },
};
// footer data end

// blogs data start
export const blogData: BlogCardProps[] = [
  {
    title: "The Future of Web Development",
    description:
      "Encourage a growth mindset within your organization. View change not as a threat but as an opportunity for learning, innovation, and improvement. Promote a culture of continuous learning and skill development. Employees who are equipped to acquire new skills quickly",
    author: "Jane Doe",
    date: "2025-02-01",
    category: "Technology",
    imageUrl: "/images/benefits-1.webp",
  },
  {
    title: "Mastering JavaScript in 2025",
    description:
      "A comprehensive guide to becoming a JavaScript expert this year.",
    author: "John Smith",
    date: "2025-01-25",
    category: "Programming",
    imageUrl: "/images/javascript.jpg",
  },
  {
    title: "UI/UX Design Principles for Modern Apps",
    description: "Learn the key principles to create stunning user interfaces.",
    author: "Emily Johnson",
    date: "2025-01-15",
    category: "Design",
    imageUrl: "/images/ui-ux.jpg",
  },
  {
    title: "Getting Started with Next.js",
    description:
      "A beginner's guide to building fast and scalable web apps with Next.js.",
    author: "Michael Brown",
    date: "2025-01-10",
    category: "Web Development",
    imageUrl: "/images/nextjs.jpg",
  },
  {
    title: "Boost Your Productivity with These Tools",
    description: "Discover top tools that can help enhance your productivity.",
    author: "Sarah Lee",
    date: "2025-01-05",
    category: "Productivity",
    imageUrl: "/images/productivity.jpg",
  },
  {
    title: "The Importance of Cybersecurity in 2025",
    description: "Understand why cybersecurity is critical in the digital era.",
    author: "Chris Martin",
    date: "2025-02-03",
    category: "Security",
    imageUrl: "/images/cybersecurity.jpg",
  },
  {
    title: "10 Best Coding Practices for Developers",
    description: "Improve your coding skills with these best practices.",
    author: "Olivia White",
    date: "2025-01-20",
    category: "Development",
    imageUrl: "/images/coding-practices.jpg",
  },
  {
    title: "Why React is Still Dominating Frontend Development",
    description: "An in-depth look at React's continued popularity.",
    author: "Daniel Green",
    date: "2025-01-30",
    category: "Frontend",
    imageUrl: "/images/react.jpg",
  },
  {
    title: "A Guide to Effective Remote Work",
    description:
      "Tips and strategies for staying productive while working remotely.",
    author: "Sophia Brown",
    date: "2025-02-02",
    category: "Work",
    imageUrl: "/images/remote-work.jpg",
  },
  {
    title: "Exploring AI and Machine Learning in 2025",
    description:
      "How AI and machine learning are transforming industries worldwide.",
    author: "William Davis",
    date: "2025-01-28",
    category: "AI",
    imageUrl: "/images/ai-ml.jpg",
  },
];

// blogs data end
