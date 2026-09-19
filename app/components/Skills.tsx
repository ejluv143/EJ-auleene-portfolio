"use client";

import { useEffect, useState } from "react";

const skillGroups = [
  {
    category: "Computer Literacy",
    skills: [
      { name: "Microsoft Excel", level: 70 },
      { name: "Microsoft Word", level: 75 },
      { name: "Microsoft PowerPoint", level: 70 },
    ],
  },
  {
    category: "Workplace Skills",
    skills: [
      { name: "Organization", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Inventory Handling", level: 85 },
      { name: "Workplace Coordination", level: 80 },
    ],
  },
  {
    category: "Personal Qualities",
    skills: [
      { name: "Hardworking", level: 95 },
      { name: "Adaptable", level: 90 },
      { name: "Willingness to Learn", level: 95 },
    ],
  },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="
        w-full
        flex items-center justify-center
        px-6 sm:px-10 lg:px-20
        py-[clamp(80px,10vh,140px)]
        text-theme
      "
    >
      <div className="w-full max-w-[1800px]">
        <h2 className="text-[clamp(32px,4vw,70px)] font-bold text-center mb-4">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mb-[clamp(40px,6vw,90px)] text-[clamp(14px,1.2vw,20px)]">
          Skills I've developed through hands-on experience in warehouse, hospital, and retail environments.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(24px,3vw,50px)]">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-[clamp(20px,2.5vw,40px)]
                backdrop-blur-md
                shadow-[0_0_35px_rgba(59,130,246,0.25)]
                hover:shadow-[0_0_80px_rgba(59,130,246,0.55)]
                transition-all duration-500
                hover:-translate-y-3
              "
            >
              <h3 className="text-[clamp(22px,2vw,34px)] font-bold text-blue-400 mb-8">
                {group.category}
              </h3>

              <div className="space-y-7">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-200 font-semibold text-[clamp(14px,1.1vw,20px)]">
                        {skill.name}
                      </span>

                      <span className="text-blue-300 font-bold text-sm px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative w-full h-[clamp(10px,1vw,16px)] bg-black/50 rounded-full overflow-hidden border border-white/10">
                      <div
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r from-blue-600 via-cyan-400 to-white
                          shadow-[0_0_25px_rgba(59,130,246,0.9)]
                          transition-all duration-[1400ms] ease-out
                        "
                        style={{
                          width: animate ? `${skill.level}%` : "0%",
                        }}
                      />

                      <div className="absolute inset-0 bg-white/10 opacity-30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}