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
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-text-light mb-4">{testimonial.text}</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-text-light">{testimonial.location}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};