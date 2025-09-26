import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Conditions = () => {
  const conditions = [
    {
      id: "arthritis",
      title: "Arthritis",
      subtitle: "Joint Pain, Swelling, Stiffness",
      description: "Arthritis is a condition that causes inflammation and pain in the joints. It can affect people of all ages and significantly impact daily activities. Our comprehensive treatment approach focuses on reducing inflammation, managing pain, and improving joint mobility.",
      symptoms: ["Joint pain and stiffness", "Swelling around joints", "Reduced range of motion", "Morning stiffness", "Fatigue"],
      products: ["Joint Support Capsules", "Bone Strength Tablets", "Calcium + Mineral Complex", "Circulation Support Capsules"]
    },
    {
      id: "hypalori",
      title: "Hypalori",
      subtitle: "Stomach Ulcer / Helicobacter pylori infection",
      description: "H. pylori infection is a common bacterial infection that can cause stomach ulcers and gastritis. Left untreated, it can lead to serious complications. Our treatment targets the bacteria while supporting digestive health and healing.",
      symptoms: ["Stomach pain and burning", "Nausea and vomiting", "Loss of appetite", "Bloating", "Dark or bloody stools"],
      products: ["Stomach Relief Pills", "Digestive Balance Capsules", "Liver Detox Support", "Probiotic Digestive Support"]
    },
    {
      id: "infertility",
      title: "Secondary Infertility",
      subtitle: "Difficulty Conceiving Again",
      description: "Secondary infertility refers to the inability to conceive or carry a pregnancy to term after previously having a biological child. Our approach focuses on hormonal balance, reproductive health optimization, and overall wellness support.",
      symptoms: ["Irregular menstrual cycles", "Hormonal imbalances", "Difficulty getting pregnant", "Recurrent pregnancy loss", "Age-related fertility decline"],
      products: ["Women's Vitality Capsules", "Female Reproductive Health Support", "Uterine Health Kit", "Hormonal Balance Support"]
    },
    {
      id: "fibroids",
      title: "Fibroids",
      subtitle: "Uterine Growths, Heavy Bleeding",
      description: "Uterine fibroids are non-cancerous growths in the uterus that can cause heavy bleeding, pain, and other symptoms. Our treatment approach focuses on hormonal balance, reducing inflammation, and supporting uterine health.",
      symptoms: ["Heavy menstrual bleeding", "Pelvic pain and pressure", "Frequent urination", "Enlarged abdomen", "Pain during intercourse"],
      products: ["Uterine Health Kit", "Calcium + Mineral Complex", "Women's Vitality Capsules", "Female Reproductive Health Support"]
    },
    {
      id: "dental",
      title: "Dental Issues",
      subtitle: "Toothache, Gum Problems, Bad Breath",
      description: "Dental health problems can significantly impact quality of life and overall health. Our comprehensive approach addresses oral health issues while supporting the body's natural healing processes and immune system.",
      symptoms: ["Tooth pain and sensitivity", "Bleeding gums", "Bad breath", "Loose teeth", "Mouth sores"],
      products: ["Herbal Skin Care Soap", "Wellness Herbal Coffee", "Herbal Pain Relief Oil", "Probiotic Digestive Support"]
    },
    {
      id: "diabetes",
      title: "Diabetes Support",
      subtitle: "High/Low Blood Sugar, Fatigue, Eye Problems",
      description: "Diabetes management requires a comprehensive approach to blood sugar control, preventing complications, and supporting overall health. Our products help optimize metabolic function and provide nutritional support.",
      symptoms: ["High or low blood sugar", "Increased thirst and urination", "Fatigue and weakness", "Blurred vision", "Slow-healing wounds"],
      products: ["Immune Defense Capsules", "Longevity Support Capsules", "Energy & Longevity Coffee", "Brain & Memory Support Capsules"]
    },
    {
      id: "blood-pressure",
      title: "High Blood Pressure",
      subtitle: "Fatigue, Headache, Blurred Vision",
      description: "High blood pressure is a serious condition that can lead to heart disease, stroke, and other complications. Our approach focuses on cardiovascular support, circulation improvement, and stress management.",
      symptoms: ["Headaches", "Fatigue", "Blurred vision", "Chest pain", "Difficulty breathing"],
      products: ["Circulation Support Capsules", "Relaxation & Heart Health Tea", "Digestive Balance Capsules", "Liver Detox Support"]
    },
    {
      id: "eye-health",
      title: "Eye Problems",
      subtitle: "Cataracts, Weak Vision, Dry Eyes",
      description: "Eye health is crucial for quality of life. Our products support vision health, provide antioxidant protection, and help maintain healthy eye function as you age.",
      symptoms: ["Blurred or cloudy vision", "Dry eyes", "Night vision problems", "Eye strain", "Sensitivity to light"],
      products: ["Eye Health Chewables", "Brain & Memory Support Capsules", "Longevity Support Capsules"]
    },
    {
      id: "skin-issues",
      title: "Skin Issues",
      subtitle: "Acne, Eczema, Dermatitis",
      description: "Skin conditions can affect self-confidence and comfort. Our comprehensive skincare approach addresses both internal and external factors that contribute to healthy, radiant skin.",
      symptoms: ["Acne and breakouts", "Dry or oily skin", "Rashes and irritation", "Premature aging", "Uneven skin tone"],
      products: ["Herbal Skin Care Soap", "Gentle Skin Cleanser", "Skin Balancing Toner", "Anti-Wrinkle Cream", "Revitalizing Facial Mask", "Herbal Digestive Cleanser"]
    },
    {
      id: "prostate",
      title: "Prostate Problems",
      subtitle: "Prostate Enlargement, Prostate Cancer",
      description: "Prostate health is essential for men's wellness. Our products support prostate function, reduce inflammation, and promote overall urinary and reproductive health.",
      symptoms: ["Frequent urination", "Difficulty starting urination", "Weak urine stream", "Pelvic discomfort", "Blood in urine"],
      products: ["Prostate Care Capsules", "Male Vitality Capsules", "Circulation Support Capsules", "Liver Detox Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Conditions We Treat</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive treatment solutions for a wide range of health conditions. 
            Each condition receives personalized care with proven, effective medicines.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {conditions.map((condition) => (
              <Card key={condition.id} className="shadow-card border-0">
                <CardHeader className="pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl text-primary mb-2">
                        {condition.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">{condition.subtitle}</p>
                    </div>
                    <Button className="bg-gradient-primary hover:opacity-90 self-start">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Treatment
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Description */}
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold mb-3">About This Condition</h3>
                      <p className="text-muted-foreground mb-6">{condition.description}</p>
                      
                      <h4 className="text-lg font-semibold mb-3">Common Symptoms</h4>
                      <ul className="space-y-2">
                        {condition.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-muted-foreground">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Recommended Products */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Recommended Products</h4>
                      <div className="space-y-3">
                        {condition.products.map((product, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="w-full justify-start p-3 text-sm font-normal hover:bg-primary/10 cursor-pointer"
                          >
                            {product}
                          </Badge>
                        ))}
                      </div>
                      <Link to="/products">
                        <Button variant="outline" className="w-full mt-4">
                          View All Products
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Don't See Your Condition Listed?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We treat many additional health conditions. Contact us for a personalized consultation 
            to discuss your specific health needs and treatment options.
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

export default Conditions;