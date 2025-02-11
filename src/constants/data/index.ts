import {
  BlogCardProps,
  IFooterData,
  FAQItem,
  PricingTab,
  ServiceProps,
  BlogPostCardProps,
  WhyChooseProps,
  ContactInfoProps,
  ProgressBarProps,
  galleryProps,
  FeaturedBlogCardProps,
} from "@/types/index";

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

// faq data start
export const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "What services do you offer?",
    answer:
      "We provide comprehensive smart home solutions including automation system installation, security integrations, and energy management optimization.",
  },
  {
    id: "item-2",
    question: "How long does installation take?",
    answer:
      "Most projects are completed within 2-5 days depending on system complexity. We provide a detailed timeline during our initial consultation.",
  },
  {
    id: "item-3",
    question: "Do you offer maintenance support?",
    answer:
      "Yes, we provide various maintenance packages with 24/7 technical support and regular system health checks to ensure optimal performance.",
  },
  {
    id: "item-4",
    question: "What is your service warranty?",
    answer:
      "All our installations come with a 2-year comprehensive warranty and optional extended coverage plans for continued peace of mind.",
  },
  {
    id: "item-5",
    question: "Can I integrate with existing systems?",
    answer:
      "Our solutions are designed to be compatible with most major home automation platforms. We'll conduct a full compatibility assessment before installation.",
  },
];
// faq data end

// pricing data start
export const pricingTabs: PricingTab[] = [
  {
    title: "Monthly",
    packages: [
      {
        title: "Basic Plan",
        price: 29,
        frequency: "/month",
        description: "Perfect for individual needs",
        img: "/images/serivice-img-1.webp",
        features: [
          "Basic feature set",
          "24/7 email support",
          "5GB storage",
          "Standard security",
        ],
      },
      {
        title: "Premium Plan",
        price: 59,
        frequency: "/month",
        description: "Ideal for growing businesses",
        img: "/images/serivice-img-2.webp",
        features: [
          "Advanced features",
          "Priority email/chat support",
          "25GB storage",
          "Enhanced security",
          "Team collaboration",
        ],
      },
      {
        title: "Enterprise Plan",
        price: 99,
        frequency: "/month",
        description: "For large organizations",
        img: "/images/serivice-img-3.webp",
        features: [
          "Full feature access",
          "24/7 phone support",
          "Unlimited storage",
          "Enterprise-grade security",
          "Dedicated account manager",
        ],
      },
    ],
  },
  {
    title: "Annual",
    packages: [
      {
        title: "Basic Plan",
        price: 260,
        frequency: "/year",
        description: "Perfect for individual needs",
        img: "/images/serivice-img-2.webp",
        features: [
          "Basic feature set",
          "24/7 email support",
          "5GB storage",
          "Standard security",
        ],
        isRecommended: false,
      },
      {
        title: "Premium Plan",
        price: 520,
        frequency: "/year",
        description: "Ideal for growing businesses",
        img: "/images/serivice-img-1.webp",
        features: [
          "Advanced features",
          "Priority email/chat support",
          "25GB storage",
          "Enhanced security",
          "Team collaboration",
        ],
        isRecommended: true,
      },
      {
        title: "Enterprise Plan",
        price: 890,
        frequency: "/year",
        description: "For large organizations",
        img: "/images/serivice-img-3.webp",
        features: [
          "Full feature access",
          "24/7 phone support",
          "Unlimited storage",
          "Enterprise-grade security",
          "Dedicated account manager",
        ],
        isRecommended: false,
      },
    ],
  },
];
// pricing data end

// pricing data start
export const services: ServiceProps[] = [
  {
    id: 1,
    title: "Consulting Services",
    description:
      "This strategy encompasses a wide range of from online marketing and social media to website.",
    link: "/consulting-services",
  },
  {
    id: 2,
    title: "Digital Solution",
    description:
      "This approach allows businesses and individuals to have a website that aligns with their brand.",
    link: "/digital-solution",
  },
  {
    id: 3,
    title: "Financial Consultancy",
    description:
      "Wireframes are basic, low-fidelity visual of website or app's layout and structure Strategy.",
    link: "/financial-consultancy",
  },
  {
    id: 4,
    title: "Business Strategy",
    description:
      "Content creation and integration is a pivotal aspect of web design and Solutions Agency.",
    link: "/business-strategy",
  },
  {
    id: 5,
    title: "Investment Advisory",
    description:
      "Content creation and integration is a pivotal aspect of web design Solutions Agency.",
    link: "/investment-advisory",
  },
  {
    id: 6,
    title: "Digital Planning",
    description:
      "Integration content creation and is a pivotal aspect of web development sector and part.",
    link: "/digital-planning",
  },
];
// pricing data end

// blog data start
export const blogPosts: BlogPostCardProps[] = [
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
// blog data end

// why choose us data start

export const whyChooseCardsData: WhyChooseProps[] = [
  {
    title: "Best Business Consulting",
    description:
      "Fusce condimentum mattis placerat odio donec lacus porta torq uent, mauris gravida rutrum.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Placerat condimentum mattis odio donec lacus porta torq uent, mauris gravida rutrum Fusce.",
  },
  {
    title: "Professional Team Members",
    description:
      "Mattis Placerat condimentum odio donec lacus porta torq uent, mauris gravida rutrum Fusce.",
  },
];
// why choose us data end

// contact us data start
export const contactDetails: ContactInfoProps[] = [
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
// contact us data start

// progress data start
export const progressData: ProgressBarProps[] = [
  {
    label: "RELIABLECOVER INSURANCE",
    percentage: 80,
  },
  {
    label: "HUMAN RESOURCES",
    percentage: 65,
  },
  {
    label: "LIFESECURE INSURANCE",
    percentage: 75,
  },
];

// progress data start

// gallery img data start
export const galleryData: galleryProps[] = [
  {
    img: "/images/gallery-img-1.webp",
  },
  {
    img: "/images/gallery-img-2.webp",
  },
  {
    img: "/images/gallery-img-3.webp",
  },
  {
    img: "/images/gallery-img-4.webp",
  },
  {
    img: "/images/gallery-img-5.webp",
  },
  {
    img: "/images/gallery-img-6.webp",
  },
];
// gallery img data start

// featured blogs data start
export const featuredBlogCards: FeaturedBlogCardProps[] = [
  {
    title: "Exploring the Full Spectrum of Digital Marketing’s Influence",
    author: "GROWHUB",
    date: "November 28, 2023",
    imageUrl: "/images/gallery-img-1.webp",
  },
  {
    title: "Delivering Memorable and Building Brand the Company",
    author: "GROWHUB",
    date: "November 28, 2023",
    imageUrl: "/images/gallery-img-2.webp",
  },
  {
    title: "Mastery of Creative Problem Solving in Your Startup",
    author: "GROWHUB",
    date: "November 28, 2023",
    imageUrl: "/images/gallery-img-3.webp",
  },
];

// featured blogs data end
