"use client";

const certificates = [
  {
    title: "Diploma",
    image: "/diploma.png",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        w-full
        flex items-center justify-center
        px-6 sm:px-10 lg:px-20
        py-[clamp(80px,10vh,140px)]
        text-theme
      "
    >
      <div className="w-full max-w-[900px]">
        {/* TITLE */}
        <h2 className="text-[clamp(32px,4vw,60px)] font-bold text-center mb-16">
          My <span className="text-blue-400">Certificate</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-2xl
                overflow-hidden
                backdrop-blur-md
                shadow-[0_0_30px_rgba(59,130,246,0.2)]
                hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]
                transition-all duration-500
              "
            >
              {/* PREVIEW */}
              <div className="w-full bg-black/40 p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-auto max-h-[80vh] rounded-lg border border-white/10 object-contain select-none"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
