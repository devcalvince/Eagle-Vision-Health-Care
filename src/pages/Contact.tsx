import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+254 716499945"],
      description: "Call us for immediate assistance",
      action: "Call Now",
      actionType: "primary"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["eaglevisionhealthcare@gmail.com"],
      description: "Send us detailed questions",
      action: "Send Email",
      actionType: "secondary"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+254 716499945"],
      description: "Chat with us on WhatsApp",
      action: "Start Chat",
      actionType: "secondary"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM EST" },
    { day: "Saturday", time: "9:00 AM - 3:00 PM EST" },
    { day: "Sunday", time: "Closed" },
    { day: "Emergency Support", time: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our healthcare professionals for consultations, questions about treatments, 
            or assistance with orders. We're here to help you on your health journey.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call: +254 716499945
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your health concerns or questions in detail..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                {/* Contact Methods */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <Card key={index} className="shadow-card border-0">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                              {method.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-1">{method.title}</h4>
                              {method.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-primary font-medium mb-1">{detail}</p>
                              ))}
                              <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                              <Button 
                                size="sm" 
                                variant={method.actionType === "primary" ? "default" : "outline"}
                                className={method.actionType === "primary" ? "bg-gradient-primary hover:opacity-90" : ""}
                              >
                                {method.action}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <Card className="shadow-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Clock className="w-6 h-6 text-primary" />
                        <span className="font-semibold">Operating Hours</span>
                      </div>
                      <div className="space-y-3">
                        {businessHours.map((hours, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-muted-foreground">{hours.day}</span>
                            <span className="font-medium">{hours.time}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Our Location</h3>
                  <Card className="shadow-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <MapPin className="w-6 h-6 text-primary" />
                        <span className="font-semibold">Main Office</span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Kimathi Street, Medical Plaza<br />
                        Nairobi City, 00100<br />
                        Kenya
                      </p>
                      <div className="w-full h-48 bg-gradient-trust rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground">Interactive Map Coming Soon</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Reference */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Have Questions Before Contacting Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check our comprehensive FAQ section for quick answers to common questions 
            about our services, treatments, and policies.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="/faq">View FAQ Section</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;