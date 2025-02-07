import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";
import Heading from "@/components/shared/heading";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
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

function FAQSection() {
  return (
    <section className="py-8 md:py-16 space-y-6 md:space-y-9 px-4 sm:px-6 md:px-8">
      <Heading
        accent="Learn About Us"
        heading1="We’ve created the res"
        heading2="help you thrive."
        center
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-x-7">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <div className="rounded-full bg-white px-4 md:px-8 border mb-2">
                <AccordionTrigger className="text-left font-body text-sm md:text-lg hover:no-underline">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-primary font-bold text-sm md:text-base">0{index + 1}</span>
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <div className="rounded-full bg-white px-4 md:px-8 border mb-2">
                <AccordionTrigger className="text-left font-body text-sm md:text-lg hover:no-underline">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-primary font-bold text-sm md:text-base">0{index + 1}</span>
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
