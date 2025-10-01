import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ShoppingCart, Calendar, Heart, Shield, Users, Star, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-healthcare.jpg";
import consultationImage from "@/assets/consultation.jpg";
import medicinesImage from "@/assets/medicines.jpg";

const Index = () => {
  const conditions = [
    "Arthritis & Joint Pain",
    "Hypalori & Stomach Issues",
    "Secondary Infertility",
    "Fibroids & Women's Health",
    "Dental Health",
    "Diabetes Support",
    "Blood Pressure",
    "Eye Health",
    "Skin Conditions",
    "Prostate Health",
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trusted Healthcare",
      description: "Over 10 years of experience providing quality medicines and treatments",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Effective",
      description: "All products are carefully tested and approved for safety and efficacy",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient-Focused",
      description: "Personalized treatment plans tailored to your specific health needs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Trusted Medicines & Treatments for
            <span className="block text-secondary-light">Better Health</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional healthcare solutions for Arthritis, Infertility, Fibroids, Dental Health, Hypalori and More.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Order Medicines
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book Treatment
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Conditions We Treat</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive treatment solutions for a wide range of health conditions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium">{condition}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/conditions">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View All Conditions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Eagle Vision Healthcare?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience, we provide direct access to quality medicines and treatments. Our
                patient-focused approach ensures you receive personalized care for your specific health needs.
              </p>
              <ul className="space-y-3 mb-8">
                {/* Original 3 points */}
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>Direct medicine provision - no referrals needed</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>Professional consultation and guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>Proven track record of patient success</span>
                </li>
                {/* New 4 points */}
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>Free appointment booking in our facilities countrywide</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>We use both pharmaceuticals and nutraceuticals with natural ingredients</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>We provide ongoing follow-up for all patients to ensure continuous improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>Free consultation for both men and women with 24-hour standby consultants</span>
                </li>
              </ul>
              <Link to="/about">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Learn More About Us
                </Button>
              </Link>
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

      {/* Products Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <img
                src={medicinesImage}
                alt="Quality medicines and healthcare products"
                className="rounded-lg shadow-trust w-full"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality Products for Better Health</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Browse our comprehensive range of medicines and health products, carefully selected for safety and
                effectiveness across multiple health categories.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Products Available</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <div className="text-sm text-muted-foreground">Health Categories</div>
                </div>
              </div>
              <Link to="/products">
                <Button size="lg" className="bg-gradient-secondary hover:opacity-90">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get personalized treatment recommendations and quality medicines delivered to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call: +254 716499945
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              eaglevisionhealthcare@gmail.com
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
