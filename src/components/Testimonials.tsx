import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    location: "Houston, TX",
    text: "The process was quick and painless. I got a fair offer and closed within 2 weeks!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    location: "Dallas, TX",
    text: "I needed to sell my house quickly and they made it happen. Very professional team.",
    rating: 5,
  },
  {
    name: "Mike Williams",
    location: "Austin, TX",
    text: "Excellent service from start to finish. Would highly recommend to anyone looking to sell.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="animate-fade-up hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-6">
                  <div className="font-semibold text-primary text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};