import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#020617] font-['Poppins']">Get In Touch</h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-semibold text-[#020617] mb-2 font-['Poppins']">Send a Message</h3>
              <p className="text-[#64748B] mb-6">Fill out the form below and I'll respond as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-[#020617] font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 rounded-[10px] border-[#E2E8F0] focus:border-[#2563EB]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-[#020617] font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="h-12 rounded-[10px] border-[#E2E8F0] focus:border-[#2563EB]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-[#020617] font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="rounded-[10px] border-[#E2E8F0] focus:border-[#2563EB]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 rounded-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#020617] mb-2 font-['Poppins']">Email</h3>
              <a href="mailto:sadushanilupul13@gmail.com" className="text-[#2563EB] hover:underline">
                sadushanilupul13@gmail.com
              </a>
            </div>
            
            <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#020617] mb-2 font-['Poppins']">Phone</h3>
              <a href="tel:+783839119" className="text-[#2563EB] hover:underline">
                +783839119
              </a>
            </div>
            
            <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold text-[#020617] mb-2 font-['Poppins']">Location</h3>
              <a href="https://www.google.com/maps/place/Colombo,+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">
                Colombo, Sri Lanka (Live map)
              </a>
              <div className="mt-4 rounded-xl overflow-hidden border border-[#E2E8F0]">
                <iframe
                  title="Colombo live location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507743.06394757996!2d79.68292433566516!3d6.934996911925561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596a427f0c9b%3A0x40bb6a576af39f4b!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  className="w-full h-48"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}