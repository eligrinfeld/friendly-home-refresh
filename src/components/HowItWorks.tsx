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
    <section className="py-24 bg-accent" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've made selling your house as simple as possible
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};