import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Info = () => {
  return (
    <>
      <Helmet>
        <title>Home Selling Resources & Information | Good Guy House Buyer</title>
        <meta name="description" content="Helpful resources and information about selling your house fast in Denver & Boulder. Learn about the home selling process, market updates, and more." />
      </Helmet>
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Information</h1>
            <p className="text-xl text-gray-600">Helpful. Informative. Trustworthy.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/58e26a74d1758e214431901b/1491958100866-NFO5REPYQPQWQWCXJS3R/image-asset.jpeg"
              alt="Good Guy House Buyer Banner"
              className="w-full rounded-lg mb-12 shadow-lg"
            />

            <h2 className="text-3xl font-bold text-primary mb-8">Useful Links and Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">News Articles</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="http://www.denverpost.com/2017/05/19/denver-decline-in-derelict-buildings/" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      The Denver Post "Barry, Good Guy House Buyer"
                    </a>
                  </li>
                  <li>
                    <a href="http://www.denverpost.com/2017/09/07/metro-denver-housing-market-slides-august-2017/" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      The Denver Post "Housing Market Slow Down"
                    </a>
                  </li>
                  <li>
                    <a href="http://www.5280.com/#" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      5280 Denver's Mile High Magazine
                    </a>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Helpful Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="http://www.needhelppayingbills.com/html/colorado_mortgage_help_and_for.html" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Colorado Foreclosure Hotline
                    </a>
                  </li>
                  <li>
                    <a href="https://www.legalconsumer.com/bankruptcy/filing-bankruptcy.php?ST=CO" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      How to File Bankruptcy in Denver, Colorado
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apartments.com/denver-co/" 
                       className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      Apartment Rentals Denver, Colorado
                    </a>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Community Links</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="https://denverchamber.org" 
                   className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Denver Metro Chamber of Commerce
                </a>
                <a href="https://www.habitatmetrodenver.org" 
                   className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Habitat for Humanity
                </a>
                <a href="https://www.forbes.com/sites/zillow/2013/10/29/pros-and-cons-of-selling-your-home-to-a-real-estate-investor/#119b0ad77afe" 
                   className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Forbes Article on Selling to Real Estate Investors
                </a>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 leading-relaxed">
                Selling your home—especially if you've never done it before—can be surprisingly time-consuming and emotionally challenging...
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Info;
