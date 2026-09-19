"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <>
      <div className="bg-rain" />

      <main className="relative z-10 min-h-screen w-full overflow-x-hidden px-6 sm:px-10 lg:px-20 py-6 text-black dark:text-white">
        {/* HEADER */}
        <header
          className="
            sticky top-4 z-50
            w-full max-w-[1400px] mx-auto
            flex items-center justify-between
            backdrop-blur-xl
            bg-white/70 dark:bg-white/5
            border border-black/10 dark:border-white/10
            rounded-2xl
            px-[clamp(16px,2vw,32px)]
            py-[clamp(12px,1.5vw,20px)]
            shadow-[0_0_30px_rgba(59,130,246,0.2)]
          "
        >
          <Link
  href="/?showLoader=true"
  className="text-sm sm:text-lg xl:text-xl font-bold tracking-wide hover:text-blue-500 transition-colors"
>
  ← Back to Portfolio
</Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                relative w-14 h-7
                bg-gray-300 dark:bg-gray-700
                border border-black/10 dark:border-white/20
                rounded-full
                transition-all duration-300
              "
            >
              <span
                className={`
                  absolute top-1 left-1
                  w-5 h-5
                  bg-white
                  rounded-full
                  shadow-md
                  flex items-center justify-center
                  text-[10px]
                  transition-all duration-300
                  ${darkMode ? "translate-x-7" : "translate-x-0"}
                `}
              >
                {darkMode ? "🌙" : "☀️"}
              </span>
            </button>

            <div className="hidden sm:block text-lg xl:text-xl font-bold tracking-wide">
              Resume
            </div>
          </div>
        </header>

        {/* RESUME */}
        <section
          id="resume"
          className="w-full flex items-center justify-center py-[clamp(40px,5vh,80px)]"
        >
          <div
            className="
              w-full max-w-[1200px]
              bg-white/90 dark:bg-white/5
              border border-black/10 dark:border-white/10
              rounded-3xl
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(59,130,246,0.25)]
              overflow-hidden
            "
          >
            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
              {/* LEFT */}
              <aside className="bg-blue-500/10 dark:bg-black/40 p-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_35px_rgba(59,130,246,0.7)] mb-6">
                  <img
                    src="/bopep.png"
                    alt="E.J. Auleeane Magtrayo Cañete"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1 className="text-4xl font-extrabold leading-tight">
                  E.J. Auleeane Magtrayo <span className="text-blue-500">Cañete</span>
                </h1>

                <p className="mt-2 text-lg font-semibold text-blue-500 dark:text-blue-400">
                  Cashier/Receptionist
                </p>

                <div className="mt-8 space-y-3 text-sm text-gray-700 dark:text-gray-300 break-words">
                  <p>🎂 August 15, 1995</p>
                  <p>📍 Birthplace: Tagum City</p>
                  <p>📍 Valencia City, Bukidnon 8709</p>
                  <p>📞 09524514840</p>
                  <p>📧 bopep1995@gmail.com</p>
                  <p>🌐 https://ej-auleene-portfolio.vercel.app/</p>
                </div>

                <div className="mt-10 w-full">
                  <h2 className="text-xl font-bold text-blue-500 mb-4">
                    Skills
                  </h2>

                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Microsoft Excel</li>
                    <li>• Microsoft Word</li>
                    <li>• Microsoft PowerPoint</li>
                    <li>• Cashiering & Billing</li>
                    <li>• Customer Service</li>
                    <li>• Organization & Time Management</li>
                    <li>• Teamwork & Workplace Coordination</li>
                    <li>• Inventory Handling</li>
                  </ul>
                </div>
              </aside>

              {/* RIGHT */}
              <div className="p-8 lg:p-12">
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Career Objective
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To secure a position where I can apply my work experience in
                    hospital front-desk support, warehouse operations, and
                    merchandising, while continuing to grow my skills and
                    contribute effectively to the organization.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-3">
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hardworking and adaptable professional currently working as
                    a Cashier/Receptionist, with prior experience in warehouse
                    operations, hospital ward support, and merchandising.
                    Skilled in cashiering, customer service, organization,
                    teamwork, inventory handling, and workplace coordination,
                    with basic computer literacy in Microsoft Excel, Word, and
                    PowerPoint. Willing to learn new skills and take on new
                    responsibilities.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-5">
                    Work History
                  </h2>

                  <div className="mb-8">
                    <p className="text-sm text-blue-500 font-bold">
                      2023 - Present
                    </p>
                    <h3 className="text-xl font-bold">Cashier/Receptionist</h3>
                    <p className="text-gray-500 mb-3">Alorf Hospital</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Handles cashiering and billing transactions.</li>
                      <li>• Greets and assists patients and visitors at the front desk.</li>
                      <li>• Manages appointment scheduling and phone inquiries.</li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-blue-500 font-bold">
                      2022 - 2023
                    </p>
                    <h3 className="text-xl font-bold">Merchandiser</h3>
                    <p className="text-gray-500 mb-3">Roy Plaza</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Arranged and maintained product displays on the sales floor.</li>
                      <li>• Monitored stock levels and replenished merchandise.</li>
                      <li>• Assisted customers and supported daily store operations.</li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-blue-500 font-bold">
                      2018 - 2022
                    </p>
                    <h3 className="text-xl font-bold">Warehouse Clerk</h3>
                    <p className="text-gray-500 mb-3">
                      M. Montesclaros Enterprise, Inc.
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Maintained accurate inventory records.</li>
                      <li>• Coordinated the receiving and dispatching of goods.</li>
                      <li>• Kept warehouse stock organized and supported the operations team.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-blue-500 font-bold">
                      2017 - 2019
                    </p>
                    <h3 className="text-xl font-bold">Ward Man</h3>
                    <p className="text-gray-500 mb-3">
                      LaViña General Hospital
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                      <li>• Assisted patients and nursing staff with daily ward needs.</li>
                      <li>• Supported hospital ward operations.</li>
                      <li>• Helped maintain a clean and orderly care environment.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-blue-500 mb-5">
                    Education
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold">College</h3>
                    <p className="text-gray-500">
                      ACLC College of Valencia — Undergraduate
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                      2015
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold">High School</h3>
                    <p className="text-gray-500">
                      Central Bukidnon Institute
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                      2008 - 2013
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Elementary</h3>
                    <p className="text-gray-500">
                      Magugpo Pilot Central Elementary School
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                      2002 - 2008
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-blue-500 mb-5">
                    References
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold">Iris Abapo</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        HR Assistant — Alorf Hospital
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">Ramlyze Soreño</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Warehouse Operator
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">Eldon Vincent Chang-li</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Chief Nursing Officer — LaViña General Hospital
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}