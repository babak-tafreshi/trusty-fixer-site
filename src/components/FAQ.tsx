import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
}

const FAQ = ({ items }: Props) => {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
          <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
