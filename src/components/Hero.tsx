import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-primary bg-gradient-hero">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/house-pattern.png")',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-up space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sell Your House
            <span className="block text-secondary-light">Fast & For Cash</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            We buy houses in any condition. Get a fair cash offer within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-6 text-lg rounded-lg transform transition-transform hover:scale-105"
              onClick={() => window.location.href = '#contact'}
            >
              Get Your Cash Offer
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
              onClick={() => window.location.href = '#how-it-works'}
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};