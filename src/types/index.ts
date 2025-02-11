// footer types start
type FooterLink = {
  label: string;
  href: string;
};

type WorkingHours = {
  days: string;
  hours: string;
};

type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

export interface IFooterData {
  company: {
    title: string;
    links: FooterLink[];
  };
  workingTime: {
    title: string;
    schedule: WorkingHours[];
  };
  contactUs: {
    title: string;
    info: ContactInfo;
  };
}

// footer types end

// blogs types start
export interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

// blogs types end

// faq types start
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};
// faq types end

// pricing types start
type Package = {
  title: string;
  price: number;
  frequency: string;
  description: string;
  img: string;
  features: string[];
  isRecommended?: boolean;
};

export type PricingTab = {
  title: string;
  packages: Package[];
};
// pricing types end

// pricing types start
export type ServiceProps = {
  id: number;
  title: string;
  description: string;
  link: string;
};
// pricing types end

// blog types start
export interface BlogPostCardProps {
  category: string;
  author: string;
  date: string;
  title: string;
  imageUrl: string;
  slug: string;
}
// blog types end

// why choose us types end
export interface WhyChooseProps {
  title: string;
  description: string;
}
// why choose us types end

// contact us types start
export type ContactInfoProps = {
  method: string;
  message: string;
};
// contact us types start
// progress types start
export interface ProgressBarProps {
  label: string;
  percentage: number;
}
// progress types end

// gallery types start
export type galleryProps = {
  img: string;
};
// gallery types start
// featured blogs types start
export interface FeaturedBlogCardProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}
// featured blogs types end
