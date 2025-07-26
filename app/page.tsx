"use client";

import { Search, Star, MapPin, Phone, Mail, Clock, CheckCircle, Shield, Bot, Sparkles, MessageSquare, Zap, Send, Calendar, CheckCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

function WhatsAppBotButton({ variant = "default" }: { variant?: "default" | "outline" }) {
  const handleClick = () => {
    const phoneNumber = "2349017335663"; 
    const message = "Hello QuickWork Bot, I need help finding a service professional";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant === "outline" ? "outline" : "default"}
      className={`gap-2 ${variant === "outline" ? "border-green-600 text-green-700 hover:bg-green-50" : "bg-green-600 hover:bg-green-700"}`}
    >
      <Bot className="w-4 h-4" />
      QuickWork Bot
    </Button>
  );
}

const featuredProviders = [
  
    {
    id: 1,
    name: "Squegy Cleaning Services",
    category: "Home Cleaning Services",
    rating: 4.8,
    reviews: 124,
    location: "Rivers State",
    Address: "123 Clean St, Port Harcourt",
    phone: "+234 801 234 5678",
    email: "info@squegycleaners.com",
    image: "https://cleanfanatics.com/wp-content/uploads/2024/11/81-1.webp",
    description: "Professional Home and office space cleaning services with 10+ years experience",
  },
  {
    id: 2,
    name: "Perfect Paint Pro",
    category: "Painting Services",
    rating: 4.9,
    reviews: 89,
    location: "Rivers State",
    Address: "456 Paint Ave, Port Harcourt",
    phone: "+234 802 345 6789",
    email: "contact@perfectpaintpro.com",
    image: "https://petespropainters.com/nitropack_static/TavOmvIiKbpHoskJoKiWyDbytvukcFwW/assets/images/optimized/rev-8137d5a/petespropainters.com/wp-content/uploads/2025/03/Paint.co_-1.png",
    description: "Expert painting services for residential and commercial properties",
  },
  {
    id: 3,
    name: "Mr Clean's Laundry",
    category: "Laundry & Dry Cleaning Services",
    rating: 4.7,
    reviews: 156,
    location: "Rivers State",
    Address: "789 Laundry St, Port Harcourt",
    phone: "+234 803 456 7890",
    email: "hello@mrcleanlaundry.com",
    image: "https://counseal.com/app/uploads/2023/11/website-featured-An-Image-depicting-a-laundry-business.jpg",
    description: "Professional laundry and dry cleaning services for all occasions",
  },
  {
    id: 4,
    name: "Oyibo laundry Services",
    category:   "Laundry & Dry Cleaning Services",
    rating: 4.6,
    reviews: 78,
    location: "Rivers State",
    Address: "101 Laundry Ave, Port Harcourt",
    phone: "+234 804 567 8901",
    email: "info@oyibolaundry.com",
    image: "https://rjkool.com/wp-content/uploads/2021/09/laundry-services.jpg",
    description: "Reliable laundry services with quick turnaround and quality care",
  },
  {
    id: 5,
    name: "Olabode painting Services",
    category: "Painting Services",
    rating: 4.5,
    reviews: 92,
    location: "Rivers State",
    Address: "202 Paint St, Port Harcourt",
    phone: "+234 805 678 9012",
    email: "contact@olabode_paints.ng",
    image: "https://media.istockphoto.com/id/1372512911/photo/african-american-professional-painter-paints-the-wall-indoors.jpg?s=612x612&w=0&k=20&c=Ca6-TR4UkE7peNh_ARMSr6YIRYpCbWKAO4h4tT5w3z4=",
    description: "Professional painting services available 24/7 for emergencies",
  },
  {
    id: 6,
    name: "Jazmyne cleaning Services",
    category: "Cleaning Services",
    rating: 4.8,
    reviews: 67,
    location: "Rivers State",
    Address: "101 Cleaning Ave, Port Harcourt",
    phone: "+234 806 789 0123",
    email: "Jazmyne@cleaners.ng",
    image: "https://safitimecleaning.com/wp-content/uploads/2023/11/322242097_730151968260790_2753172577036417277_n.jpg",
    description: "Customized cleaning solutions for homes and offices",
  },
];


export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className={`border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 py-2 shadow-sm' : 'bg-white/90 py-3'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-sm">QW</span>
              </div>
              <span className="text-xl font-bold text-blue-600">QuickWorkNG</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/providers" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Providers
              </Link>
              <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <WhatsAppBotButton variant="outline" />
            </nav>
            
            <div className="flex items-center space-x-2">
              <Link href="/provider/login">
                <Button variant="outline" className="hidden sm:inline-flex">Provider Login</Button>
              </Link>
              <Link href="/provider/register">
                <Button className="bg-blue-600 hover:bg-blue-700">Join as Provider</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-blue-200">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-600">Try QuickWork Bot</span>
                  <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Find <span className="text-blue-600">Trusted</span> Pros <br />
                <span className="inline-flex items-center">
                  In Minutes
                  <Zap className="ml-2 w-8 h-8 text-yellow-500 fill-yellow-400" />
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Our AI assistant matches you with verified professionals or answers your service questions instantly. Available 24/7!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <WhatsAppBotButton />
                <Link href="/providers">
                  <Button size="lg" variant="outline" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                    Browse All Services
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <CheckCircle className="w-5 h-5 text-blue-600" />, text: "Verified Pros" },
                  { icon: <Clock className="w-5 h-5 text-blue-600" />, text: "24/7 Support" },
                  { icon: <Shield className="w-5 h-5 text-blue-600" />, text: "Secure Payments" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {feature.icon}
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-blue-100">
                <img
                  src="https://www.shutterstock.com/image-photo/male-construction-worker-hammer-site-600nw-2198636397.jpg"
                  alt="Happy customer using QuickWork Bot"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Providers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-bounce">
              Top Rated
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Premium QuickPros</h2>
            <p className="text-muted-foreground">
              Professionals trusted by thousands of customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider, index) => (
              <div 
                key={provider.id} 
                className="opacity-0 animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{provider.rating}</span>
                        <span className="text-sm text-white/80">({provider.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{provider.name}</h3>
                      <Badge variant="secondary">{provider.category}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>
                    
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{provider.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Available today</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex gap-2 w-full">
                      <Button
                        onClick={() => {
                          const message = `Hi! I'm interested in your ${provider.category} services. Can you provide more information?`;
                          window.open(`https://wa.me/${provider.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, "_blank");
                        }}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        size="sm"
                      >
                        Chat Now
                      </Button>
                      <Link href={`/provider/${provider.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/providers">
              <Button variant="outline" size="lg">
                Browse All Providers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-bounce">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold mb-4">How QuickWorkNG Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your tasks done in just a few easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="opacity-0 animate-fade-in">
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <CardTitle>Find Your Expert</CardTitle>
                  <CardDescription>
                    Browse verified professionals in your area
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <Search className="w-16 h-16 text-blue-500 mb-2" />
                      <p className="text-sm text-blue-600 font-medium">Find local experts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <CardTitle>Book & Confirm</CardTitle>
                  <CardDescription>
                    Schedule an appointment that works for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <Calendar className="w-16 h-16 text-blue-500 mb-2" />
                      <p className="text-sm text-blue-600 font-medium">Schedule your service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <CardTitle>Get It Done</CardTitle>
                  <CardDescription>
                    Relax while your professional handles the job
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-40 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <CheckCheck className="w-16 h-16 text-blue-500 mb-2" />
                      <p className="text-sm text-blue-600 font-medium">Enjoy quality service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-bounce">
              Peace of Mind
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Why Choose QuickWorkNG</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go the extra mile to ensure you get the best service experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="opacity-0 animate-fade-in">
              <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <CardTitle>Verified Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every provider on our platform undergoes strict verification and background checks.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <CardTitle>Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We ensure high-quality work with our satisfaction guarantee policy.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Card className="border-0 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <CardTitle>On-Time Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professionals arrive on time or your service is free.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of satisfied customers who found the perfect professional for their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/providers">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform">
                  Find a Professional
                </Button>
              </Link>
              <Link href="/provider/register">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:scale-105 transition-transform">
                  Become a Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">QW</span>
                </div>
                <span className="text-xl font-bold text-blue-600">QuickWorkNG</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting Nigerians with trusted service providers across the country.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Users</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/providers" className="hover:text-foreground transition-colors">
                    Find Providers
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-foreground transition-colors">
                    Browse Categories
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Providers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/provider/register" className="hover:text-foreground transition-colors">
                    Join QuickWorkNG
                  </Link>
                </li>
                <li>
                  <Link href="/provider/login" className="hover:text-foreground transition-colors">
                    Provider Login
                  </Link>
                </li>
                <li>
                  <Link href="/provider-benefits" className="hover:text-foreground transition-colors">
                    Benefits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 QuickWorkNG. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppBotButton />
      </div>
    </div>
  );
}