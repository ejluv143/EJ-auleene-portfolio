"use client";

const experiences = [
  {
    year: "2022 - 2023",
    title: "Merchandiser",
    company: "Roy Plaza",
    icon: "🛒",
    description:
      "Arranged and maintained product displays, monitored stock levels, and assisted customers on the sales floor to support daily store operations.",
    tags: ["Merchandising", "Customer Service", "Stock Monitoring"],
  },
  {
    year: "2018 - 2022",
    title: "Warehouse Clerk",
    company: "M. Montesclaros Enterprise, Inc.",
    icon: "📦",
    description:
      "Handled inventory records, coordinated the receiving and dispatching of goods, and kept warehouse stock organized in support of the operations team.",
    tags: ["Inventory Handling", "Warehouse Operations", "Organization"],
  },
  {
    year: "2017 - 2019",
    title: "Ward Man",
    company: "LaViña General Hospital",
    icon: "🏥",
    description:
      "Assisted patients and nursing staff with daily ward needs, supported hospital operations, and helped maintain a clean and orderly care environment.",
    tags: ["Patient Support", "Hospital Operations", "Teamwork"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        w-full
        flex items-center justify-center
        px-6 sm:px-10 lg:px-20
        py-[clamp(80px,10vh,140px)]
        text-theme
      "
    >
      <div className="w-full max-w-[1800px]">
        <h2 className="text-[clamp(32px,4vw,70px)] font-bold text-center mb-[clamp(40px,6vw,100px)]">
          My <span className="text-blue-400">Experience</span>
        </h2>

        <div className="relative">
          {/* GLOWING CENTER LINE */}
          <div
            className="
              absolute left-1/2 top-0 h-full w-[3px]
              -translate-x-1/2
              bg-gradient-to-b from-transparent via-blue-400/60 to-transparent
              shadow-[0_0_25px_rgba(59,130,246,0.9)]
              hidden md:block
            "
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative
                grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]
                items-center
                gap-6 md:gap-10
                mb-[clamp(40px,6vw,120px)]
              "
            >
              {/* LEFT DATE */}
              <div className="text-center md:text-right">
                <span
                  className="
                    inline-block
                    rounded-full
                    border border-blue-400/30
                    bg-blue-500/10
                    px-5 py-2
                    text-[clamp(15px,1.1vw,20px)]
                    font-bold
                    text-blue-300
                    shadow-[0_0_25px_rgba(59,130,246,0.3)]
                  "
                >
                  {exp.year}
                </span>
              </div>

              {/* ICON DOT */}
              <div
                className="
                  relative z-10
                  mx-auto
                  flex items-center justify-center
                  w-[clamp(48px,4vw,70px)]
                  h-[clamp(48px,4vw,70px)]
                  rounded-full
                  border border-blue-400/40
                  bg-black/80
                  text-[clamp(22px,2vw,32px)]
                  shadow-[0_0_35px_rgba(59,130,246,0.9)]
                "
              >
                {exp.icon}
              </div>

              {/* RIGHT CARD */}
              <div
                className="
                  bg-white/5
                  border border-white/10
                  rounded-3xl
                  p-[clamp(22px,2.5vw,44px)]
                  backdrop-blur-md
                  shadow-[0_0_35px_rgba(59,130,246,0.25)]
                  hover:shadow-[0_0_90px_rgba(59,130,246,0.65)]
                  transition-all duration-500
                  hover:-translate-y-3
                "
              >
                <p className="text-blue-400 font-semibold text-[clamp(14px,1vw,18px)] mb-2">
                  {exp.company}
                </p>

                <h3 className="text-[clamp(24px,2vw,38px)] font-bold text-theme mb-4">
                  {exp.title}
                </h3>

                <p className="text-gray-300 text-[clamp(14px,1vw,18px)] leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border border-blue-400/30
                        bg-blue-500/10
                        px-3 py-1
                        text-xs
                        text-blue-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}