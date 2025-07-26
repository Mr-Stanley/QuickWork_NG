import { Search, Star, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"

const featuredProviders = [
  {
    id: 1,
    name: "Adebayo Interiors",
    category: "Interior & Event Decoration",
    rating: 4.8,
    reviews: 124,
    location: "Lagos, Nigeria",
    phone: "+234 801 234 5678",
    email: "info@adebayointeriors.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjCzY-hFw0KxhNZYiCm-dq-u2XkSw23cDqw&s",
    description: "Professional interior design and event decoration services",
  },
  {
    id: 2,
    name: "Perfect Paint Pro",
    category: "Painting Services",
    rating: 4.9,
    reviews: 89,
    location: "Abuja, Nigeria",
    phone: "+234 802 345 6789",
    email: "contact@perfectpaintpro.com",
    image: "https://petespropainters.com/nitropack_static/TavOmvIiKbpHoskJoKiWyDbytvukcFwW/assets/images/optimized/rev-8137d5a/petespropainters.com/wp-content/uploads/2025/03/Paint.co_-1.png",
    description: "Expert painting services for residential and commercial properties",
  },
  {
    id: 3,
    name: "Kemi's Beauty Studio",
    category: "Beauty & Makeup Services",
    rating: 4.7,
    reviews: 156,
    location: "Port Harcourt, Nigeria",
    phone: "+234 803 456 7890",
    email: "hello@kemisbeauty.com",
    image: "https://www.shutterstock.com/image-photo/african-american-woman-applying-makeup-600nw-1756304540.jpg",
    description: "Professional makeup and beauty services for all occasions",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">QW</span>
              </div>
              <span className="text-xl font-bold text-blue-600">QuickWorkNG</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/providers" className="text-muted-foreground hover:text-foreground">
                Find Providers
              </Link>
              <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                Categories
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/provider/login">
                <Button variant="outline">Provider Login</Button>
              </Link>
              <Link href="/provider/register">
                <Button>Join as Provider</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Trusted Service Providers in Nigeria</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with skilled professionals for all your home and personal service needs. From interior decoration to
            beauty services, find the right expert for you.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search for services (e.g., interior design, plumbing...)" className="pl-10 h-12" />
              </div>
              <Link href="/providers">
                <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            <Link href="/providers?category=interior" className="hover:text-blue-600">
              Interior Design
            </Link>
            <span>•</span>
            <Link href="/providers?category=painting" className="hover:text-blue-600">
              Painting
            </Link>
            <span>•</span>
            <Link href="/providers?category=beauty" className="hover:text-blue-600">
              Beauty Services
            </Link>
            <span>•</span>
            <Link href="/providers?category=cleaning" className="hover:text-blue-600">
              Home Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Service Providers</h2>
            <p className="text-muted-foreground">Discover top-rated professionals in your area</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider) => (
              <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={provider.image || "/placeholder.svg"}
                    alt={provider.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{provider.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                      <span className="text-sm text-muted-foreground">({provider.reviews})</span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="mb-3">
                    {provider.category}
                  </Badge>

                  <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{provider.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <WhatsAppButton
                        phoneNumber={provider.phone}
                        message={`Hi! I'm interested in your ${provider.category} services. Can you provide more information?`}
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto font-normal text-sm hover:text-blue-600"
                        showIcon={false}
                      >
                        {provider.phone}
                      </WhatsAppButton>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{provider.email}</span>
                    </div>
                  </div>

                  <Link href={`/provider/${provider.id}`} className="block mt-4">
                    <Button className="w-full">View Profile</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/providers">
              <Button variant="outline" size="lg">
                View All Providers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Categories</h2>
            <p className="text-muted-foreground">Browse services by category</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Interior & Event Decoration",
              "Painting Services",
              "Carpentry & Furniture Works",
              "Electrical Services",
              "Plumbing Services",
              "Hair Styling & Barbing",
              "Beauty & Makeup Services",
              "Spa & Massage Services",
              "Nail Care (Manicure/Pedicure)",
              "Home Essentials",
              "Laundry & Dry Cleaning Services",
              "Home Cleaning Services",
            ].map((category) => (
              <Link key={category} href={`/providers?category=${encodeURIComponent(category)}`}>
                <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <h3 className="font-medium text-sm">{category}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
                  <Link href="/providers" className="hover:text-foreground">
                    Find Providers
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-foreground">
                    Browse Categories
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-foreground">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Providers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/provider/register" className="hover:text-foreground">
                    Join QuickWorkNG
                  </Link>
                </li>
                <li>
                  <Link href="/provider/login" className="hover:text-foreground">
                    Provider Login
                  </Link>
                </li>
                <li>
                  <Link href="/provider-benefits" className="hover:text-foreground">
                    Benefits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
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
    </div>
  )
}
