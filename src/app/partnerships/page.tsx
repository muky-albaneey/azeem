"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Lightbulb, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const partnerLogos = [
  { name: "Ministry of Housing", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=MINISTRY+OF+HOUSING" },
  { name: "Nigerian Infrastructure Fund", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=NIF" },
  { name: "EcoBuild Africa", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=ECOBUILD" },
  { name: "West Africa Transport Network", logo: "https://via.placeholder.com/200x100/ffffff/333333?text=WATN" }
];

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Partnerships</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Together, we’re shaping Africa’s infrastructure future.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Azim Development Company Limited, our work thrives on strategic alliances. We team up with government bodies, development institutions, and the private sector to design and execute impactful infrastructure and investment projects.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From housing and transport to energy and agriculture, our partnerships drive change across sectors — building resilient communities, creating jobs, and connecting Africa to global opportunities.
          </p>
          <p className="text-gray-600">
            <span className="text-green-600 font-medium cursor-pointer hover:underline">
              Contact us today
            </span> to learn more about collaborating with Azim.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Infrastructure Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We collaborate on cutting-edge projects that integrate sustainability, design excellence, and local impact.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Shared Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through partnerships, we expand economic opportunities, unlock infrastructure funding, and deliver community value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-100 to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Key Partners</h2>
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
        </div>
      </section>
    </div>
  );
}
