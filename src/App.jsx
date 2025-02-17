import { 
  Building2, 
  Users, 
  Zap, 
  Shield, 
  BarChart, 
  Search, 
  Menu,
  Instagram,
  Linkedin,
  Facebook,  
  Github,
  Phone,
  Mail,
  MapPin } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from './images/LOGO.png'
import Bautista from './images/BAUTISTA.jpg'
import Buenafe from './images/BUENAFE.jpg'
import Gerente from './images/GERENTE.jpg'
import Lloyd from './images/LLOYD.jpg'
import Marcus from './images/MARCUS.jpg'
import Nico from './images/NICO.jpg'
import Raymart from './images/RAYMART.jpg'
import Tosoc from './images/TOSOC.jpg'
import Background from './images/bghero.png'
import Profile from "./components/Profile"

export default function App() {

  const Icons = [
    { icon: Building2, title: "Enterprise Ready" },
    { icon: Users, title: "Team Collaboration" },
    { icon: Zap, title: "High Performance" },
    { icon: Shield, title: "Secure" },
    { icon: BarChart, title: "Analytics" },
    { icon: Search, title: "Smart Search" },
  ]
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-20" />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                <a href="#" className="text-lg text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#" className="text-lg text-gray-600 hover:text-gray-900">
                  Features
                </a>
                <a href="#" className="text-lg text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="#" className="text-lg text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              AI-Powered Miniature
              <span className="block text-blue-700">Beta Prototype</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Bringing innovation to your fingertips with our cutting-edge AI technology.
            </p>
            <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Get Started</button>
          </div>
          <div>
            <img
              src={Background}
              alt="AI Prototype Illustration"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features & Technology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Icons.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">Advanced features for modern businesses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet our team</h2>
        <p className="text-center text-gray-600 mb-12">Bringing together the brightest minds in AI and technology</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Profile Name="Raymart Sarmiento" Title="Project Manager" Image={Raymart} />
            <Profile Name="Leansel Nico Ortega" Title="Software Engineer" Image={Nico} />
            <Profile Name="John Lloyd Itliong" Title="Frontend Developer" Image={Lloyd} />
            <Profile Name="Micholo Buenafe" Title="Backend Developer" Image={Buenafe} />
            <Profile Name="Marcus James Tapang" Title="Hardware Engineer" Image={Marcus} />
            <Profile Name="Marc Jayson Tosoc" Title="Quality Assurance Engineer" Image={Tosoc} />
            <Profile Name="Juliet Bautista" Title="UI/UX Developer/Content Marketing" Image={Bautista} />
            <Profile Name="Jayann Rose Gerente" Title="UI/UX Developer/Researcher" Image={Gerente} />
          </div>
          </section>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mt-2 mb-12">Any question or remarks? Just write us a message!</p>

          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-[#0066B2] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="mb-8 text-gray-100">Say something to start a live chat!</p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex items-center">
                      <Phone />
                    </div>
                    <span>+1012 3456 789</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex items-center">
                      <Mail />
                    </div>
                    <span>demo@gmail.com</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex items-center">
                      <MapPin />
                    </div>
                    <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-12">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Github />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="w-48 h-48 bg-orange-500 rounded-full opacity-50"></div>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3">
                <div className="w-32 h-32 bg-yellow-900 rounded-full opacity-30"></div>
              </div>
            </div>

            <div className="p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+63 962 3562 231"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-[#0066B2] text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0066B2] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="text-white">
             <img src={Logo} alt="logo" className="w-24" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Reach us */}
            <div>
              <h4 className="text-lg font-bold mb-4">Reach us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone />
                  <span>+63 962 3562 231</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail />
                  <span>demo@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin />
                  <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Pioneer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

