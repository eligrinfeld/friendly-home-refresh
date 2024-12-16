import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Good Guy House Buyer | Get Your Cash Offer Today</title>
        <meta name="description" content="Contact Barry Lewis at Good Guy House Buyer for a fast, fair cash offer on your house. No obligations, no pressure. Call (303) 229-6322 or fill out our form." />
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <section className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-primary mb-4">Contact Information</h1>
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
            </section>
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;