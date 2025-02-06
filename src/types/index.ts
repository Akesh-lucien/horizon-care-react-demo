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
