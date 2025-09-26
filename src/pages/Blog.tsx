import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Arthritis: Types, Symptoms, and Treatment Options",
      excerpt: "Learn about different types of arthritis, recognize early symptoms, and discover effective treatment approaches that can help manage pain and improve joint health.",
      category: "Arthritis",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "H. Pylori Infection: The Hidden Cause of Stomach Problems",
      excerpt: "Discover how H. pylori bacteria can cause stomach ulcers and gastritis, and learn about comprehensive treatment approaches that eliminate the infection and restore digestive health.",
      category: "Digestive Health",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 3,
      title: "Secondary Infertility: When Conceiving Again Becomes Difficult",
      excerpt: "Understand the causes of secondary infertility and explore treatment options that can help couples overcome challenges in conceiving their second or subsequent children.",
      category: "Women's Health",
      author: "Dr. Lisa Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      featured: true
    },
    {
      id: 4,
      title: "Uterine Fibroids: Symptoms, Causes, and Natural Treatment Approaches",
      excerpt: "Learn about uterine fibroids, their impact on women's health, and discover natural treatment options that can help manage symptoms and improve quality of life.",
      category: "Women's Health",
      author: "Dr. Jennifer Williams",
      date: "March 8, 2024",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 5,
      title: "Dental Health and Overall Wellness: The Connection You Need to Know",
      excerpt: "Explore the important connection between oral health and overall wellness, and discover how proper dental care can impact your entire body's health.",
      category: "Dental Health",
      author: "Dr. David Thompson",
      date: "March 5, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 6,
      title: "Managing Diabetes Naturally: Lifestyle and Supplement Strategies",
      excerpt: "Discover natural approaches to diabetes management, including dietary changes, exercise routines, and supplements that can help maintain healthy blood sugar levels.",
      category: "Diabetes",
      author: "Dr. Maria Garcia",
      date: "March 3, 2024",
      readTime: "12 min read",
      featured: false
    },
    {
      id: 7,
      title: "High Blood Pressure: Silent Killer Prevention and Management",
      excerpt: "Learn about the risks of high blood pressure, recognize warning signs, and discover effective strategies for prevention and management through lifestyle and natural supplements.",
      category: "Heart Health",
      author: "Dr. Robert Davis",
      date: "March 1, 2024",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 8,
      title: "Eye Health After 40: Preventing Age-Related Vision Problems",
      excerpt: "Understand common age-related eye conditions and learn about preventive measures and treatments that can help maintain healthy vision as you age.",
      category: "Eye Health",
      author: "Dr. Emily Brown",
      date: "February 28, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 9,
      title: "Skin Health From Within: How Nutrition Affects Your Complexion",
      excerpt: "Discover how your diet and internal health affect your skin's appearance, and learn about nutrients and supplements that promote healthy, glowing skin.",
      category: "Skin Health",
      author: "Dr. Amanda Wilson",
      date: "February 25, 2024",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Arthritis",
    "Digestive Health", 
    "Women's Health",
    "Dental Health",
    "Diabetes",
    "Heart Health",
    "Eye Health",
    "Skin Health"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Health Resources & Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educational articles and expert insights on health conditions, treatments, 
            and wellness strategies to help you make informed decisions about your health.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest insights and expert advice on important health topics
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="shadow-card border-0 hover:shadow-medical transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-trust rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Article Image</span>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive library of health and wellness resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="shadow-card border-0 hover:shadow-medical transition-shadow">
                <CardHeader>
                  <div className="w-full h-40 bg-background rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Article Image</span>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated on Health & Wellness</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for the latest health tips, treatment insights, 
              and wellness strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-white text-foreground flex-1"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Personalized Health Advice?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            While our articles provide valuable information, nothing replaces personalized medical advice. 
            Schedule a consultation with our healthcare professionals for tailored treatment recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4">
              Book Consultation
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;