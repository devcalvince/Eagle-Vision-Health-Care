import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar, MessageCircle, ShoppingCart, Heart, Shield, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import consultationImage from "@/assets/consultation.jpg";

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Direct Medicine Provision",
      description: "We provide medicines directly to patients without requiring referrals to other healthcare providers.",
      features: ["No referral needed", "Direct access to treatments", "Quality medicines", "Professional guidance on usage"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Consultations",
      description: "Comprehensive health assessments and personalized treatment planning tailored to your specific needs.",
      features: ["One-on-one consultations", "Customized treatment plans", "Health condition assessment", "Ongoing monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Treatment Guidance",
      description: "Expert guidance on medicine usage, dosage, and treatment protocols for optimal health outcomes.",
      features: ["Dosage instructions", "Treatment protocols", "Safety guidelines", "Follow-up support"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Medicine Delivery",
      description: "Convenient delivery of prescribed medicines directly to your location with secure packaging.",
      features: ["Home delivery", "Secure packaging", "Fast shipping", "Order tracking"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Comprehensive health assessment and discussion of your symptoms and health goals."
    },
    {
      step: "2", 
      title: "Treatment Planning",
      description: "Development of a personalized treatment plan based on your specific health needs."
    },
    {
      step: "3",
      title: "Medicine Provision",
      description: "Direct provision of quality medicines with detailed usage instructions and guidance."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Continuous monitoring, follow-up consultations, and treatment adjustments as needed."
    }
  ];

  const treatmentAreas = [
    "Arthritis & Joint Health",
    "Digestive Health (Hypalori)",
    "Women's Health (Infertility, Fibroids)",
    "Dental Health Solutions",
    "Diabetes Management",
    "Blood Pressure Control",
    "Eye Health & Vision",
    "Skin Conditions",
    "Prostate Health",
    "General Wellness & Immunity"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Healthcare Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive healthcare solutions with direct medicine provision, 
            personalized consultations, and professional treatment guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete healthcare services designed to provide direct access to quality treatments and medicines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Treatment Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to healthcare that ensures personalized, effective treatment outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Treatment Areas</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We provide comprehensive treatment solutions across a wide range of health conditions, 
                ensuring that each patient receives the most appropriate care for their specific needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatmentAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/conditions">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    View All Conditions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Professional healthcare consultation"
                className="rounded-lg shadow-trust w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How to Get Started</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple convenient ways to access our healthcare services and begin your treatment journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our healthcare professionals</p>
                <Button className="bg-gradient-primary hover:opacity-90">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Online Consultation</h3>
                <p className="text-muted-foreground mb-4">Schedule a consultation through our website</p>
                <Link to="/contact">
                  <Button variant="outline">Book Online</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Order Medicines</h3>
                <p className="text-muted-foreground mb-4">Browse and order quality medicines directly</p>
                <Link to="/products">
                  <Button className="bg-gradient-secondary hover:opacity-90">
                    Shop Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Improve Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards better health with our professional healthcare services 
            and quality treatment solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (555) 123-4567
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;