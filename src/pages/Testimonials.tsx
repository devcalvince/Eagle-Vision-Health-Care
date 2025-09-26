import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      condition: "Arthritis",
      rating: 5,
      text: "After struggling with arthritis pain for years, Eagle Vision Healthcare provided me with treatments that actually worked. The Joint Support Capsules have significantly reduced my pain and improved my mobility. The staff was professional and caring throughout my treatment.",
      location: "California",
      timeframe: "6 months ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      condition: "Hypalori",
      rating: 5,
      text: "I had been dealing with stomach issues for months before finding Eagle Vision Healthcare. Their comprehensive approach to treating H. pylori infection not only eliminated the bacteria but also helped restore my digestive health. I'm finally able to enjoy meals without pain.",
      location: "Texas",
      timeframe: "4 months ago"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      condition: "Secondary Infertility",
      rating: 5,
      text: "After trying to conceive our second child for over two years, we were losing hope. The fertility support program at Eagle Vision Healthcare gave us the comprehensive care we needed. We're now proud parents of a healthy baby boy!",
      location: "Florida",
      timeframe: "1 year ago"
    },
    {
      id: 4,
      name: "Jennifer Williams",
      condition: "Fibroids",
      rating: 5,
      text: "The Uterine Health Kit completely changed my life. I was suffering from heavy bleeding and pain due to fibroids. Within 3 months of treatment, my symptoms dramatically improved. I can't thank Eagle Vision Healthcare enough for giving me my life back.",
      location: "New York",
      timeframe: "8 months ago"
    },
    {
      id: 5,
      name: "David Thompson",
      condition: "Prostate Health",
      rating: 5,
      text: "As a 55-year-old man dealing with prostate issues, I was worried about my future. The Prostate Care Capsules and professional guidance from Eagle Vision Healthcare have improved my symptoms significantly. I feel like myself again.",
      location: "Arizona",
      timeframe: "5 months ago"
    },
    {
      id: 6,
      name: "Maria Garcia",
      condition: "Diabetes Support",
      rating: 5,
      text: "Managing diabetes was overwhelming until I found Eagle Vision Healthcare. Their comprehensive approach and quality supplements have helped me maintain better blood sugar levels. The personalized care made all the difference.",
      location: "Colorado",
      timeframe: "7 months ago"
    },
    {
      id: 7,
      name: "Robert Davis",
      condition: "High Blood Pressure",
      rating: 5,
      text: "The Circulation Support Capsules and Heart Health Tea have been game-changers for my blood pressure management. Combined with their professional guidance, I've been able to maintain healthier levels and feel more energetic.",
      location: "Oregon",
      timeframe: "6 months ago"
    },
    {
      id: 8,
      name: "Emily Brown",
      condition: "Skin Conditions",
      rating: 5,
      text: "I had been struggling with eczema for years, trying countless treatments. The comprehensive skin care approach from Eagle Vision Healthcare, including their herbal products, finally gave me the clear skin I had been hoping for.",
      location: "Washington",
      timeframe: "9 months ago"
    }
  ];

  const stats = [
    { number: "98%", label: "Patient Satisfaction" },
    { number: "10,000+", label: "Patients Treated" },
    { number: "15+", label: "Conditions Treated" },
    { number: "10+", label: "Years Experience" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Patient Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from real patients who have experienced improved health 
            and quality of life through our comprehensive treatment programs.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These testimonials represent the experiences of real patients who have benefited 
              from our healthcare services and treatment programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-card border-0 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        {testimonial.condition}
                      </span>
                      <span className="text-muted-foreground">{testimonial.timeframe}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our patients share their success stories in their own words
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-card">
                <div className="w-full h-48 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center text-white">
                  <div className="text-center">
                    <Heart className="w-12 h-12 mb-2 mx-auto" />
                    <span className="text-sm">Video Testimonial {index}</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Patient Success Story</h3>
                <p className="text-muted-foreground text-sm">
                  Coming soon - Real patients sharing their health transformation stories
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Share Your Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have you experienced positive results with our treatments? 
              We'd love to hear about your health journey and how we've helped you.
            </p>
          </div>
          
          <div className="bg-gradient-trust rounded-lg p-8 max-w-2xl mx-auto text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Your Story Matters</h3>
            <p className="text-muted-foreground mb-6">
              Help others find hope and healing by sharing your experience with Eagle Vision Healthcare. 
              Your story could inspire someone else to take the first step toward better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Share Your Story
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied patients who have improved their health with our 
            comprehensive treatment solutions and quality medicines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (555) 123-4567
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;