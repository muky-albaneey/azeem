"use client";import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// import Navigation from "@/components/navigation";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
  "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
  "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

const newsletters = [
  "IFDC Monthly Newsletter",
  "AfricaFertilizer Newsletter", 
  "FERARI Quarterly Newsletter",
  "EnGRAIS Quarterly Newsletter",
  "Other Publications"
];

export default function SubscribePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newsletters: [] as string[],
    organization: "",
    country: "",
    language: "English",
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNewsletterChange = (newsletter: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      newsletters: checked 
        ? [...prev.newsletters, newsletter]
        : prev.newsletters.filter(n => n !== newsletter)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription form submitted:", formData);
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
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Subscribe</h1>
        </div>
      </section>

      {/* Subscription Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg">
              Subscribe below to receive regular updates from IFDC.
            </p>
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

                {/* Newsletter Subscriptions */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Select newsletter subscription(s) <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-3">
                    {newsletters.map((newsletter) => (
                      <div key={newsletter} className="flex items-center space-x-2">
                        <Checkbox
                          id={newsletter}
                          checked={formData.newsletters.includes(newsletter)}
                          onCheckedChange={(checked) => handleNewsletterChange(newsletter, checked as boolean)}
                        />
                        <Label htmlFor={newsletter} className="text-gray-700 cursor-pointer">
                          {newsletter}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Organization <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
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
                    <SelectContent className="max-h-48">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Language */}
                <div>
                  <Label className="text-gray-700 font-medium mb-2 block">
                    Language <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.language} 
                    onValueChange={(value) => handleInputChange('language', value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="English" id="english" />
                      <Label htmlFor="english" className="text-gray-700 cursor-pointer">
                        English
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="French" id="french" />
                      <Label htmlFor="french" className="text-gray-700 cursor-pointer">
                        French
                      </Label>
                    </div>
                  </RadioGroup>
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

                {/* CAPTCHA */}
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
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium w-full md:w-auto"
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