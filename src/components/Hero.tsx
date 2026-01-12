import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center bg-[#F8FAFC] px-20 pt-20"
    >
      <div className="max-w-[1280px] w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-[#020617] font-['Poppins']">
            Hi, I'm{" "}
            <span className="text-[#2563EB]">
              Sadusha Nilupul
            </span>
          </h1>
          <p className="text-2xl text-[#64748B] font-['Inter']">
            UI/UX Designer & Full-Stack Developer
          </p>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Creating beautiful, functional digital experiences
            with modern technologies and design principles.
          </p>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white h-12 px-6 rounded-[10px]"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 rounded-[10px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/Sadusha13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="sadushanilupul13.com"
              className="text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc5NjA1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}