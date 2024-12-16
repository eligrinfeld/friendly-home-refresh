import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Good Guy House Buyer - Fast Cash Home Buyers in Denver & Boulder</title>
        <meta name="description" content="Get a fair cash offer for your house within 24 hours. No repairs needed, no realtor fees. Trusted home buyer in Denver & Boulder area." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Good Guy House Buyer",
              "image": "/og-image.png",
              "description": "We buy houses for cash in Denver and Boulder area. Get a fair offer within 24 hours.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1630 30th St. #A495",
                "addressLocality": "Boulder",
                "addressRegion": "CO",
                "postalCode": "80301",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.0150,
                "longitude": -105.2497
              },
              "url": "https://goodguyhousebuyer.com",
              "telephone": "+13032296322",
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
};

export default Index;