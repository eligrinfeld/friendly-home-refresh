import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Contact Us",
    description: "Fill out our simple form or give us a call to get started.",
  },
  {
    title: "Get Your Offer",
    description: "We'll present you with a fair, no-obligation cash offer within 24 hours.",
  },
  {
    title: "Close On Your Timeline",
    description: "Choose your closing date and get paid in cash.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-surface" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-text-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};