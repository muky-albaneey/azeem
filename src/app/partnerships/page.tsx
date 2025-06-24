"use client";import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Lightbulb, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
// import Navigation from "@/components/navigation";

const partnerLogos = [
  { name: "Feed the Future", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=FEED+THE+FUTURE" },
  { name: "Kingdom of the Netherlands", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=KINGDOM+OF+NL" },
  { name: "OCP", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=OCP" },
  { name: "Swiss Agency", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=SWISS+AGENCY" },
  { name: "USAID", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=USAID" },
  { name: "ACDI/VOCA", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=ACDI%2FVOCA" },
  { name: "AFAP", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=AFAP" },
  { name: "African Development Bank", logo: "https://via.placeholder.com/200x100/ffffff/006837?text=AFRICAN+DEV+BANK" }
];

const countries = [
  "Bangladesh", "Benin", "Burkina Faso", "Burundi", "Cameroon", "Cote D'Ivoire", 
  "Ethiopia", "Ghana", "Guinea", "India", "Kenya", "Malawi", "Mali", "Morocco", 
  "Mozambique", "Niger", "Nigeria", "Senegal", "South Sudan", "Tanzania", "Togo", 
  "Uganda", "USA", "Zambia"
];

const topics = [
  "Improved Technology",
  "Better Farming Practices", 
  "Strong Markets",
  "Enabling Impact",
  "Fertilizer Industry"
];

const partnerTypes = [
  "Development Organization",
  "Educational Institution", 
  "Non-Profit",
  "Private Sector – Global",
  "Private Sector – Local",
  "Public Sector – Donor, Government, Foundation, etc.",
  "Research Institution",
  "Small Business",
  "Other (please specify in message)"
];

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    company: "",
    website: "",
    phone: "",
    topics: [] as string[],
    countryOfInterest: "",
    partnerType: "",
    message: "",
    consent: false
  });

  const [showDonors, setShowDonors] = useState(false);
  const [showPartners, setShowPartners] = useState(false);

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTopicChange = (topic: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      topics: checked 
        ? [...prev.topics, topic]
        : prev.topics.filter(t => t !== topic)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Partnerships</h1>
        </div>
      </section>

      {/* Partnership Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Working together is the only way we can achieve a world without hunger.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Strategic partnerships underpin our work to bridge the gaps between research, 
            farmers, markets, and a supportive, enabling environment. The sustainability of 
            our impact depends on effective partnerships.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            We work closely with partners large and small to design and implement a wide 
            variety of innovative products, development projects, and initiatives. We also 
            work to increase our partners' capacities through training and mentoring to 
            support sustainable food systems — from the lab to the consumer.
          </p>
          
          <p className="text-gray-600">
            <span className="text-green-600 font-medium cursor-pointer hover:underline">
              Contact us today
            </span> to learn more about partnering with us.
          </p>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Partnering for Better Technology */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Partnering for Better Technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We employ an inclusive approach to research and development. We support and work with agricultural clusters, and build capacities of farmers and business owners.
                </p>
              </div>
            </div>

            {/* Partnering for Productive Farmers */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Partnering for Productive Farmers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Farmers remain our most important partners. We work with local agriculturists, clusters, and build capacities of farmers and business owners.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work closely with partners large and small to design and implement a wide variety of innovative products, development projects, and initiatives. We also work to increase our partners' capacities through training and mentoring to support sustainable food systems — from the lab to the consumer.
            </p>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-100 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Partners</h2>
          
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {partnerLogos.map((partner, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Partner Categories */}
          <div className="space-y-4">
            <div className="border-b border-gray-200">
              <Button
                variant="ghost"
                className="w-full justify-between py-4 text-left font-semibold text-gray-800"
                onClick={() => setShowDonors(!showDonors)}
              >
                IFDC Donors
                {showDonors ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </Button>
              {showDonors && (
                <div className="pb-4 text-gray-600">
                  <p>Our donor partners provide critical funding for our programs and initiatives worldwide.</p>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200">
              <Button
                variant="ghost"
                className="w-full justify-between py-4 text-left font-semibold text-gray-800"
                onClick={() => setShowPartners(!showPartners)}
              >
                IFDC Partners
                {showPartners ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </Button>
              {showPartners && (
                <div className="pb-4 text-gray-600">
                  <p>Our implementation partners help us deliver programs and services to farmers and communities.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Request Partnership Information
            </h2>
          </div>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full"
                        required
                      />
                      <Label className="text-sm text-gray-500 mt-1">First</Label>
                    </div>
                    <div>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full"
                        required
                      />
                      <Label className="text-sm text-gray-500 mt-1">Last</Label>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Country */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Company/Organization and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Company/Organization <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium mb-2 block">
                      Company/Organization Website <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>

                {/* Topics */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Topic (select all that apply) <span className="text-red-500">*</span>
                  </Label>
                  <div className="border border-gray-300 rounded-md p-3 space-y-2 max-h-32 overflow-y-auto">
                    {topics.map((topic) => (
                      <div key={topic} className="flex items-center space-x-2">
                        <Checkbox
                          id={topic}
                          checked={formData.topics.includes(topic)}
                          onCheckedChange={(checked) => handleTopicChange(topic, checked as boolean)}
                        />
                        <Label htmlFor={topic} className="text-sm text-gray-700 cursor-pointer">
                          {topic}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Country of Interest */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Country of Interest (select one) <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.countryOfInterest} 
                    onValueChange={(value) => handleInputChange('countryOfInterest', value)}
                    className="max-h-48 overflow-y-auto border border-gray-300 rounded-md p-3"
                  >
                    {countries.map((country) => (
                      <div key={country} className="flex items-center space-x-2">
                        <RadioGroupItem value={country} id={`country-${country}`} />
                        <Label htmlFor={`country-${country}`} className="text-sm text-gray-700 cursor-pointer">
                          {country}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Type of Partner */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Type of Partner (select one) <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.partnerType} 
                    onValueChange={(value) => handleInputChange('partnerType', value)}
                    className="space-y-2"
                  >
                    {partnerTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="text-sm text-gray-700 cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Message */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full h-32"
                    placeholder="Your message..."
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">0 of 500 max characters</p>
                </div>

                {/* Consent */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Consent <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
                      I consent to receive emails from IFDC and its employees.
                    </Label>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                      You agree that IFDC may collect, use and disclose your personal data which 
                      you have provided in this form, for providing marketing material that you 
                      have agreed to receive, in accordance with our{" "}
                      <span className="text-green-600 underline cursor-pointer">data protection policy</span>. 
                      Please tick the relevant boxes above if you agree.
                    </p>
                  </div>
                </div>

                {/* CAPTCHA Placeholder */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">CAPTCHA</Label>
                  <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="captcha" />
                      <Label htmlFor="captcha" className="text-sm text-gray-700">
                        I'm not a robot
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg">&copy; 2024 IFDC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}