import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        <div className="prose lg:prose-xl max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Good Guy House Buyer is your trusted partner in selling your house quickly and hassle-free. 
            We understand that selling a house can be stressful, which is why we've made our process 
            as simple and transparent as possible.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            With years of experience in the real estate market, we've helped countless homeowners 
            sell their properties quickly for cash, regardless of the condition or situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;