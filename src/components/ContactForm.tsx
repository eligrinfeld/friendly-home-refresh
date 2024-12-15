import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      message: "",
    });
  };

  return (
    <section className="py-24 bg-primary" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Selling your house can be a stressful and consuming process in today's market. 
              My objective is to help you, I can pay off loans, lien and taxes. I can also save 
              you thousands of dollars in home repairs, closing costs, realtor fees and commissions. 
              I've been buying houses for over twenty years, I know the deal. As a property buyer 
              I can facilitate the process and provide options that a conventional sale can not. 
              Contact me to discuss the different alternatives that are available to you before 
              selling your house.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="First Name"
                className="h-12 text-lg"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
              <Input
                placeholder="Last Name"
                className="h-12 text-lg"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              className="h-12 text-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="h-12 text-lg"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <div className="space-y-4">
              <Input
                placeholder="Address Line 1"
                className="h-12 text-lg"
                value={formData.addressLine1}
                onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                required
              />
              <Input
                placeholder="Address Line 2"
                className="h-12 text-lg"
                value={formData.addressLine2}
                onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
              />
              <div className="grid md:grid-cols-3 gap-4">
                <Input
                  placeholder="City"
                  className="h-12 text-lg"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
                <Input
                  placeholder="State"
                  className="h-12 text-lg"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  required
                />
                <Input
                  placeholder="ZIP Code"
                  className="h-12 text-lg"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  required
                />
              </div>
            </div>
            <Textarea
              placeholder="Tell us about your property"
              className="text-lg min-h-[120px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button 
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-dark text-white h-14 text-lg rounded-lg"
            >
              Get My Cash Offer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};