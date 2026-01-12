import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    company: "Tech Solutions Inc.",
    role: "Senior Full-Stack Developer",
    duration: "2022 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and establishing best practices."
  },
  {
    type: "work",
    company: "Digital Innovations",
    role: "UI/UX Designer & Developer",
    duration: "2020 - 2022",
    description: "Designed and developed user-centric web and mobile applications. Collaborated with cross-functional teams to deliver high-quality products."
  },
  {
    type: "education",
    company: "University of Technology",
    role: "B.Sc. Computer Science",
    duration: "2016 - 2020",
    description: "Graduated with honors. Specialized in software engineering, web development, and human-computer interaction."
  },
  {
    type: "work",
    company: "StartUp Labs",
    role: "Junior Developer",
    duration: "2019 - 2020",
    description: "Contributed to multiple startup projects, gaining experience in rapid prototyping and agile development methodologies."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#020617] font-['Poppins']">Experience</h2>
        <p className="text-center text-[#64748B] mb-16 max-w-2xl mx-auto">
          My professional journey and educational background
        </p>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Icon */}
                <div className="absolute left-0 w-16 h-16 bg-[#2563EB] rounded-2xl flex items-center justify-center shadow-lg">
                  {exp.type === "work" ? (
                    <Briefcase className="w-8 h-8 text-white" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-white" />
                  )}
                </div>
                
                {/* Content Card */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#020617] font-['Poppins']">
                        {exp.role}
                      </h3>
                      <p className="text-[#2563EB] font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-[#64748B] bg-white px-4 py-2 rounded-lg">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-[#64748B] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
