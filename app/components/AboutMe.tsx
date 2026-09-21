"use client";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        flex items-center justify-center
        px-6 sm:px-10 lg:px-20
        py-[clamp(80px,10vh,140px)]
        text-theme
        overflow-hidden
      "
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[140px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[700px] h-[700px] bg-white/10 blur-[160px] bottom-[-200px] right-[-200px]" />
      </div>

      <div
        className="
          w-full
          max-w-[2000px]
          flex flex-col xl:flex-row
          items-center
          justify-between
          gap-[clamp(50px,6vw,140px)]
        "
      >

        {/* LEFT - IMAGE */}
        <div className="relative group flex-shrink-0">

          {/* GLOW */}
          <div className="
            absolute inset-0
            rounded-2xl
            blur-[40px]
            bg-blue-500/40
            opacity-70
            group-hover:opacity-100
            transition
          " />

          <div
            className="
              relative
              w-[clamp(260px,30vw,560px)]
              h-[clamp(260px,30vw,560px)]

              rounded-2xl
              overflow-hidden
              border border-white/10

              shadow-[0_0_60px_rgba(59,130,246,0.8),0_0_120px_rgba(255,255,255,0.2)]
            "
          >
            <img
              src="/bopep.png"
              alt="About Me"
              className="
                w-full h-full object-cover
                scale-105
                group-hover:scale-115
                transition-transform duration-700
              "
            />

            {/* LIGHT REFLECTION */}
            <div className="
              absolute inset-0
              bg-gradient-to-tr from-white/10 to-transparent
              opacity-0 group-hover:opacity-100
              transition
            " />
          </div>
        </div>

        {/* RIGHT - CARD */}
        <div
          className="
            w-full
            max-w-[clamp(400px,50vw,1100px)]

            bg-white/5
            border border-white/10
            rounded-[clamp(20px,2vw,40px)]
            backdrop-blur-xl

            p-[clamp(30px,4vw,80px)]

            shadow-[0_0_60px_rgba(0,0,0,0.7)]
            hover:shadow-[0_0_140px_rgba(59,130,246,0.5)]

            transition-all duration-500

            flex flex-col justify-center
          "
        >

          {/* TITLE */}
          <h2 className="text-[clamp(36px,3.5vw,72px)] font-extrabold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>

          {/* CONTENT */}
          <div className="space-y-6 text-gray-300 text-[clamp(16px,1.2vw,22px)] leading-relaxed">

            <p>
              I'm{" "}
              <span className="text-theme font-semibold">
                E.J. Auleeane Magtrayo Cañete
              </span>, born on August 15, 1995, in Tagum City. I have gained
              valuable work experience in{" "}
              <span className="text-blue-400 font-semibold">
                warehouse operations, hospital support services, and merchandising
              </span>.
            </p>

            <p>
              Currently, I work as a{" "}
              <span className="text-theme font-semibold">
                Cashier/Receptionist
              </span> at Alorf Hospital (2023–Present).
            </p>

            <p>
              My previous positions include{" "}
              <span className="text-theme font-semibold">
                Warehouse Clerk
              </span> at M. Montesclaros Enterprise, Inc. (2019–2022),{" "}
              <span className="text-theme font-semibold">Ward Man</span> at
              LaViña General Hospital (2017–2019), and{" "}
              <span className="text-theme font-semibold">Merchandiser</span> at
              Roy Plaza (2022–2023).
            </p>

            <p>
              I have basic computer skills, particularly in{" "}
              <span className="text-blue-400 font-semibold">
                Microsoft Excel, Microsoft Word, and Microsoft PowerPoint
              </span>. My work experiences have helped me develop skills in
              organization, teamwork, inventory handling, workplace
              coordination, and supporting daily operations.
            </p>

            <p>
              I am{" "}
              <span className="text-blue-400 font-semibold">
                hardworking, adaptable, and willing to learn
              </span>{" "}
              new skills and take on new responsibilities.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-[clamp(30px,3vw,60px)] grid grid-cols-3 gap-[clamp(12px,2vw,40px)] text-center">

            {[
              { value: "9+", label: "Years Experience" },
              { value: "4", label: "Companies" },
              { value: "∞", label: "Learning" },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group
                  p-[clamp(12px,1.5vw,24px)]
                  rounded-xl
                  bg-white/5
                  border border-white/10

                  shadow-[0_0_20px_rgba(59,130,246,0.3)]
                  hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]

                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                <h3 className="text-[clamp(20px,2vw,36px)] font-bold text-blue-400 group-hover:scale-110 transition">
                  {item.value}
                </h3>

                <p className="text-gray-400 text-[clamp(12px,1vw,16px)]">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}