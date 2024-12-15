import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
        <div className="prose lg:prose-xl max-w-none space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Want to sell your House or Income Property? I want to Buy It.
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Have you been thinking about selling your home? Is the idea of getting it ready to show to potential buyers and realtors make the hair on the back of your neck stand up?
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Getting a house ready for sale is slow and exhausting, and you end up spending lots of time and money in the process. But you don't have to worry anymore. I can help!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My name is Barry and I have been buying and selling homes for more than 20 years where I live in the greater Denver / Boulder area. I am not a realtor, though. I am an honest, normal person who is willing to sit down with you and talk about what YOU need and what you've been thinking.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My goal is to find the best solution for YOU, Whatever your situation - a vacant house, major or minor repairs needed, divorce, foreclosure, judgments, liens, bad tenants, inheritance. You name it and together we will find a solution for you. If selling the house to me is not the right fit, I can offer other choices to help you!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It doesn't matter if your house is messy, dirty, old, out of date, or needs any kind of repairs. You don't have to clean the house before showing it to me, or even when you move out. I will take care of all of it!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I can make you an offer immediately after our first visit. I can pay all cash with no appraisal to worry about, and without charging you a commission (you can save up to 6% of the price of the house). We can close in whatever time frame works for you (as soon as 3 days or several months), and you can move out when is convenient for YOU. It's easy!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you want to make selling your home an easy and pleasant transaction that gives you the most privacy, while saving you lots of money in commission fees, call me now at <a href="tel:3032296322" className="text-primary font-semibold hover:underline">(303) 229-6322</a>. You won't be disappointed!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              I pay referral fees! If you know someone who wants to sell their property, give us their name and, if we buy the house, we pay you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;