import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
            <div className="space-y-2 text-gray-600">
              <p>Barry Lewis</p>
              <p>1630 30th St. #A495</p>
              <p>Boulder, CO 80301</p>
              <p>
                <a href="mailto:barry@goodguyhousebuyer.com" className="text-primary hover:underline">
                  barry@goodguyhousebuyer.com
                </a>
              </p>
              <p>
                <a href="tel:3032296322" className="text-primary hover:underline">
                  (303) 229-6322
                </a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;