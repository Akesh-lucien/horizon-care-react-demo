import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs";
import Heading from "@/components/shared/heading";
import SharedButton from "@/components/shared/sharedButton";
import { Check } from "lucide-react";
import Image from "next/image";

type Package = {
  title: string;
  price: number;
  frequency: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
};

type PricingTab = {
  title: string;
  packages: Package[];
};

export const pricingTabs: PricingTab[] = [
  {
    title: "Monthly",
    packages: [
      {
        title: "Basic Plan",
        price: 29,
        frequency: "/month",
        description: "Perfect for individual needs",
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

function MainServices() {
  return (
    <section className="bg-primary/10 py-12">
      <Heading
        accent="Save Over 25% When You Select Annual Billing"
        heading1="Our Main Services"
        center
      />

      <Tabs defaultValue="Monthly" className="container mt-12">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          {pricingTabs.map((tab) => (
            <TabsTrigger
              key={tab.title}
              value={tab.title}
              className="rounded-full font-body px-6 py-3 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {tab.title} Plan
            </TabsTrigger>
          ))}
        </TabsList>
        {pricingTabs.map((tab) => (
          <TabsContent key={tab.title} value={tab.title}>
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
              {tab.packages.map((pkg) => (
                <Card key={pkg.title} className="rounded-3xl p-3 bg-white">
                  <CardHeader>
                    <div className="mb-4">
                      <Image
                        src="/images/benefits-1.webp"
                        alt="benefits-1"
                        width={600}
                        height={400}
                        className="mx-auto rounded-2xl"
                      />
                    </div>
                    <CardDescription className="font-body text-hover/50">
                      {pkg.description}
                    </CardDescription>
                    <CardTitle className="font-heading font-semibold text-hover/80 text-4xl">
                      {pkg.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-heading font-extrabold">
                      ${pkg.price}
                      <span className="text-base font-medium text-muted-foreground ml-1">
                        {pkg.frequency}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="text-green-500 mr-2 h-5 w-5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="w-[80%]">
                    <SharedButton renderText="start with this" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

export default MainServices;
