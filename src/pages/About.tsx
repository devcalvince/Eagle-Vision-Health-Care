import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to the individual needs and health goals of our patients."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality & Safety",
      description: "We maintain the highest standards of quality control and safety in all our medicines and treatments."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Excellence",
      description: "Our team of healthcare professionals brings years of experience and dedication to patient care."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Thousands of satisfied patients have achieved better health through our comprehensive treatment programs."
    }
  ];

  const achievements = [
    "Over 10 years of healthcare experience",
    "10,000+ patients successfully treated",
    "50+ quality medicines and treatments",
    "98% patient satisfaction rate",
    "Licensed and certified healthcare providers",
    "Comprehensive health condition coverage"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Eagle Vision Healthcare</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing trusted medicines and treatments with a focus on patient care, 
            professional excellence, and proven results for better health outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide direct access to quality medicines and comprehensive treatment solutions 
                that empower patients to achieve optimal health. We believe healthcare should be 
                accessible, personalized, and focused on long-term wellness.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-8">
                To be the leading provider of trusted healthcare solutions, recognized for our 
                commitment to patient care, innovation in treatment approaches, and excellence 
                in medical outcomes.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Consultation
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Healthcare professional consultation"
                className="rounded-lg shadow-trust w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A track record of excellence in healthcare delivery and patient satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Professional Approach</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine traditional healthcare wisdom with modern medical practices to deliver 
              comprehensive treatment solutions that address the root causes of health conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="opacity-90">Comprehensive health assessment and personalized treatment planning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <h3 className="text-xl font-semibold mb-3">Treatment Delivery</h3>
              <p className="opacity-90">Direct provision of quality medicines with professional guidance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="opacity-90">Continuous monitoring and adjustment of treatment plans for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have improved their health with our 
            comprehensive treatment solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (555) 123-4567
            </Button>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;