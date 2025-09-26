import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "bone-joint", name: "Bone & Joint Health" },
    { id: "immune", name: "Immune Support & General Wellness" },
    { id: "anti-aging", name: "Anti-Aging & Cellular Health" },
    { id: "digestive", name: "Digestive & Stomach Health" },
    { id: "womens", name: "Women's Health" },
    { id: "mens", name: "Men's Health" },
    { id: "skin-beauty", name: "Skin & Beauty" },
    { id: "specialty", name: "Specialty & Other Products" }
  ];

  const products = [
    // Bone & Joint Health
    { id: 1, name: "Bone Strength Tablets", category: "bone-joint", price: "$29.99", description: "Supports bone density and strength with calcium and vitamin D3" },
    { id: 2, name: "Joint Support Capsules", category: "bone-joint", price: "$34.99", description: "Promotes joint flexibility and reduces inflammation" },
    { id: 3, name: "Calcium + Mineral Complex", category: "bone-joint", price: "$24.99", description: "Essential minerals for bone health and muscle function" },
    
    // Immune Support
    { id: 4, name: "Immunity Boost Chewables", category: "immune", price: "$19.99", description: "Vitamin C tablets for immune system support" },
    { id: 5, name: "Eye Health Chewables", category: "immune", price: "$22.99", description: "Blueberry-flavored tablets for sharp vision support" },
    { id: 6, name: "Probiotic Digestive Support", category: "immune", price: "$39.99", description: "Advanced probiotic formula for digestive health" },
    { id: 7, name: "Immune Defense Capsules", category: "immune", price: "$44.99", description: "Reishi and Ganoderma for immune system boost" },
    { id: 8, name: "Liver Detox Support", category: "immune", price: "$32.99", description: "Natural liver cleansing and detoxification" },
    { id: 9, name: "Digestive Balance Capsules", category: "immune", price: "$27.99", description: "Supports healthy digestion and bowel regularity" },
    { id: 10, name: "Relaxation & Heart Health Tea", category: "immune", price: "$18.99", description: "Herbal tea blend for relaxation and cardiovascular support" },
    { id: 11, name: "Herbal Pain Relief Oil", category: "immune", price: "$16.99", description: "Topical oil for natural pain relief" },
    
    // Anti-Aging
    { id: 12, name: "Longevity Support Capsules", category: "anti-aging", price: "$89.99", description: "NMN capsules for cellular health and longevity" },
    { id: 13, name: "Brain & Memory Support Capsules", category: "anti-aging", price: "$94.99", description: "NMN with resveratrol and ginkgo for cognitive health" },
    { id: 14, name: "Energy & Longevity Coffee", category: "anti-aging", price: "$49.99", description: "NMN-infused coffee for daily energy and wellness" },
    
    // Digestive Health
    { id: 15, name: "Anti-Diarrhea Tablets", category: "digestive", price: "$14.99", description: "Fast-acting relief for digestive upset" },
    { id: 16, name: "Stomach Relief Pills", category: "digestive", price: "$21.99", description: "Herbal formula for stomach discomfort" },
    { id: 17, name: "Nerve & Brain Health Capsules", category: "digestive", price: "$36.99", description: "Supports nervous system and brain function" },
    
    // Women's Health
    { id: 18, name: "Women's Vitality Capsules", category: "womens", price: "$42.99", description: "Comprehensive female health and energy support" },
    { id: 19, name: "Female Reproductive Health Support", category: "womens", price: "$38.99", description: "Targeted support for reproductive wellness" },
    { id: 20, name: "Uterine Health Kit", category: "womens", price: "$64.99", description: "Complete kit for fibroid and uterine health" },
    { id: 21, name: "Hormonal Balance Support", category: "womens", price: "$35.99", description: "Natural hormonal balance for women" },
    
    // Men's Health
    { id: 22, name: "Prostate Care Capsules", category: "mens", price: "$41.99", description: "Comprehensive prostate health support" },
    { id: 23, name: "Male Vitality Capsules", category: "mens", price: "$45.99", description: "Energy and vitality enhancement for men" },
    { id: 24, name: "Energy & Vitality Coffee", category: "mens", price: "$39.99", description: "Male-focused energy coffee blend" },
    
    // Skin & Beauty
    { id: 25, name: "Herbal Skin Care Soap", category: "skin-beauty", price: "$12.99", description: "Natural herbal soap for healthy skin" },
    { id: 26, name: "Gentle Skin Cleanser", category: "skin-beauty", price: "$24.99", description: "Youth refreshing facial cleanser" },
    { id: 27, name: "Skin Balancing Toner", category: "skin-beauty", price: "$22.99", description: "Essence toner for balanced skin" },
    { id: 28, name: "Rejuvenating Lotion", category: "skin-beauty", price: "$28.99", description: "Youth essence lotion for hydration" },
    { id: 29, name: "Anti-Wrinkle Cream", category: "skin-beauty", price: "$32.99", description: "Advanced anti-aging facial cream" },
    { id: 30, name: "Revitalizing Facial Mask", category: "skin-beauty", price: "$26.99", description: "Youth essence facial mask treatment" },
    
    // Specialty Products
    { id: 31, name: "Circulation Support Capsules", category: "specialty", price: "$33.99", description: "Supports healthy blood circulation" },
    { id: 32, name: "Vascular Health Capsules", category: "specialty", price: "$37.99", description: "Comprehensive vascular system support" },
    { id: 33, name: "Herbal Digestive Cleanser", category: "specialty", price: "$29.99", description: "Natural digestive system cleansing" },
    { id: 34, name: "Immune & Energy Coffee", category: "specialty", price: "$44.99", description: "Cordyceps-infused coffee for immunity and energy" },
    { id: 35, name: "Wellness Herbal Coffee", category: "specialty", price: "$42.99", description: "Reishi-infused coffee for overall wellness" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality medicines and health products carefully selected for safety and effectiveness 
            across multiple health categories.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-xs"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="shadow-card border-0 hover:shadow-medical transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-trust rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Product Image</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Information */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shopping Information</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure ordering, fast delivery, and professional support for all your health needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Checkout</h3>
              <p className="text-muted-foreground">Safe and secure payment processing with multiple payment options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Filter className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-muted-foreground">All products are tested for safety, purity, and effectiveness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-muted-foreground">Professional guidance on product selection and usage</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;