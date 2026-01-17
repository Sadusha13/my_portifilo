import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Briefcase, Code2, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#020617] font-['Poppins']">About Me</h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          Passionate about creating impactful digital solutions
        </p>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2Nzk2MDU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-[#64748B] leading-relaxed">
              I'm a passionate Web developer and UI/UX designer with expertise in creating modern, user-friendly applications. With a strong foundation in both design and development, I bridge the gap between beautiful interfaces and robust functionality.
            </p>
            <p className="text-lg text-[#64748B] leading-relaxed">
              My approach combines technical excellence with creative problem-solving, ensuring every project not only works flawlessly but also delivers an exceptional user experience.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#020617] mb-1">2+</h3>
                <p className="text-sm text-[#64748B]">Years Experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Code2 className="w-8 h-8 text-[#22C55E]" />
                </div>
                <h3 className="text-2xl font-bold text-[#020617] mb-1">3+</h3>
                <p className="text-sm text-[#64748B]">Projects</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#020617] mb-1">15+</h3>
                <p className="text-sm text-[#64748B]">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}