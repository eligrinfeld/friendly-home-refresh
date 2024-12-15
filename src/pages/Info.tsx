import { Navigation } from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Info = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Information</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the process work?</AccordionTrigger>
              <AccordionContent>
                We make selling your house simple. Contact us, get a fair cash offer within 24 hours, 
                and close on your timeline. No repairs, no real estate agents, no hassle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to make repairs?</AccordionTrigger>
              <AccordionContent>
                No! We buy houses in any condition. You don't need to make any repairs 
                or improvements before selling to us.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How quickly can I sell?</AccordionTrigger>
              <AccordionContent>
                We can close in as little as 7 days, or on your timeline. You choose 
                the closing date that works best for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Info;