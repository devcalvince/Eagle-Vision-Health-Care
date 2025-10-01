import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "Are your medicines safe?",
          answer: "Yes, all our medicines undergo rigorous testing for safety, purity, and effectiveness. We only provide products that meet strict quality standards and have been proven safe for human consumption. Our healthcare professionals provide guidance on proper usage to ensure optimal safety and results."
        },
        {
          question: "Do you treat patients directly?",
          answer: "Yes, we provide direct medical care and treatment. Unlike many healthcare providers who only offer referrals, Eagle Vision Healthcare provides medicines and treatments directly to patients. Our licensed healthcare professionals assess your condition and provide appropriate treatment solutions without requiring referrals to other providers."
        },
        {
          question: "How long have you been in business?",
          answer: "Eagle Vision Healthcare has been providing quality healthcare services for over 10 years. During this time, we have successfully treated more than 10,000 patients across various health conditions, building a reputation for excellence and patient satisfaction."
        },
        {
          question: "What conditions do you treat?",
          answer: "We treat a wide range of health conditions including arthritis, H. pylori infections, secondary infertility, fibroids, dental issues, diabetes, high blood pressure, eye problems, skin conditions, prostate health, and many others. Our comprehensive approach addresses both common and complex health concerns."
        }
      ]
    },
    {
      title: "Orders & Delivery",
      questions: [
        {
          question: "How long is delivery?",
          answer: "Standard delivery typically takes 3-7 business days within the continental United States. Express shipping options are available for 1-2 day delivery. We provide tracking information for all orders so you can monitor your package's progress. International shipping is available with delivery times varying by destination."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes, we offer free standard shipping on orders over $75. For orders under $75, a standard shipping fee of $9.99 applies. Express shipping options are available at additional cost. We believe in making healthcare accessible and affordable for all our patients."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. We also send updates on your order status throughout the fulfillment process."
        },
        {
          question: "What if my order is damaged or incorrect?",
          answer: "If you receive a damaged or incorrect order, please contact us within 48 hours of delivery. We'll arrange for a replacement at no additional cost and may provide a prepaid return label for the incorrect items. Your satisfaction is our priority, and we'll make it right."
        }
      ]
    },
    {
      title: "Payment & Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers. All payments are processed through secure, encrypted systems to protect your financial information. We also offer payment plans for larger treatment packages."
        },
        {
          question: "Do you accept insurance?",
          answer: "Currently, we operate as a direct-pay healthcare provider, which means we don't directly bill insurance companies. However, many of our patients are able to get reimbursement from their insurance providers. We can provide detailed receipts and documentation to help you submit claims to your insurance company."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. The price you see is the price you pay, with no hidden fees. Shipping costs (if applicable) and taxes are clearly displayed at checkout before you complete your purchase. We never add surprise charges to your order."
        },
        {
          question: "Do you offer discounts or promotions?",
          answer: "Yes, we regularly offer promotions for new patients, bulk orders, and returning customers. Sign up for our newsletter to receive exclusive discount codes and be notified of special offers. We also provide discounts for veterans, seniors, and patients with financial hardship."
        }
      ]
    },
    {
      title: "Treatment & Safety",
      questions: [
        {
          question: "Can your medicines cause side effects?",
          answer: "Like all healthcare products, our medicines may cause side effects in some individuals. However, we carefully select products with minimal side effects and provide detailed information about potential reactions. Our healthcare professionals review your medical history to minimize risks and provide guidance on what to expect."
        },
        {
          question: "How do I know what treatment is right for me?",
          answer: "We offer personalized consultations to assess your specific health needs and recommend appropriate treatments. Our healthcare professionals review your symptoms, medical history, and health goals to create a customized treatment plan. You can schedule a consultation by phone or through our online booking system."
        },
        {
          question: "Can I take your medicines with other medications?",
          answer: "It's important to disclose all medications and supplements you're currently taking during your consultation. Our healthcare professionals will review potential interactions and provide guidance on safe combinations. Some products may need to be taken at different times or doses adjusted to avoid interactions."
        },
        {
          question: "How long before I see results?",
          answer: "Results vary depending on the condition being treated and individual factors. Some patients notice improvements within days, while others may take several weeks or months to see significant changes. We provide realistic timelines during your consultation and offer follow-up support to monitor your progress."
        }
      ]
    },
    {
      title: "Consultations & Support",
      questions: [
        {
          question: "How much does a consultation cost?",
          answer: "Initial consultations are $75 for a comprehensive health assessment. Follow-up consultations are $50. Many patients find that the personalized treatment plan saves money in the long run by providing targeted, effective treatments. We also offer package deals that include consultations with treatment plans."
        },
        {
          question: "Can I get a consultation online?",
          answer: "Yes, we offer both in-person and online consultations via secure video calls. Online consultations are convenient for follow-ups, prescription reviews, and initial assessments for many conditions. Some conditions may require in-person evaluation, which our team will discuss with you."
        },
        {
          question: "What if I need help after starting treatment?",
          answer: "We provide ongoing support throughout your treatment journey. You can contact us by phone, email, or through our patient portal for questions or concerns. Our healthcare team is available during business hours, and we offer emergency contact information for urgent medical situations."
        },
        {
          question: "Do you provide treatment instructions?",
          answer: "Yes, every treatment comes with detailed instructions including dosage, timing, duration, and what to expect. We also provide lifestyle recommendations and dietary guidelines that can enhance treatment effectiveness. Our team is always available to clarify instructions or answer questions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our healthcare services, medicines, 
            treatment processes, and patient care policies.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-muted-foreground">Don't see your question answered below?</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call: +254 716499945
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Send Message
              </Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              eaglevisionhealthcare@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                  {category.title}
                </h2>
                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${categoryIndex}-${index}`}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="font-semibold text-foreground">
                              {item.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our healthcare professionals are here to assist you with any questions 
              or concerns about your health and treatment options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our healthcare team
                </p>
                <p className="font-semibold text-primary">+254 716499945</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM EST</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Chat with us online for quick answers
                </p>
                <Button className="bg-gradient-secondary hover:opacity-90">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                <p className="text-muted-foreground mb-4">
                  Send us detailed questions
                </p>
                <p className="font-semibold text-primary">eaglevisionhealthcare@gmail.com</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Treatment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Have your questions been answered? Take the next step toward better health 
            with a personalized consultation from our healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
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

export default FAQ;