import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-primary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sell Your House Fast & For Cash
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We buy houses in any condition. Get a fair cash offer within 24 hours.
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Get Your Cash Offer
          </Button>
        </div>
      </div>
    </div>
  );
};