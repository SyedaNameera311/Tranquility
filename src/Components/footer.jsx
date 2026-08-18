import React from "react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">

      {/* ================= WAVE ================= */}
      <div className="absolute left-0 top-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[150px] w-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
      
          <path
            d="M0,95 C250,145 430,30 700,70 C950,110 1120,10 1440,55 L1440,0 L0,0 Z"
            fill="#9ed9e3"
            opacity="0.35"
          />

        
          <path
            d="M0,110 C250,160 470,45 720,85 C970,125 1180,25 1440,65 L1440,0 L0,0 Z"
            fill="#3c91a5"
            opacity="0.75"
          />

          {/* Dark Blue */}
          <path
            d="M0,125 C230,170 460,65 700,95 C950,130 1160,40 1440,75 L1440,0 L0,0 Z"
            fill="#0b5368"
          />

          {/* Red Accent */}
          <path
            d="M0,138 C300,170 500,85 760,105 C1020,130 1210,55 1440,82 L1440,0 L0,0 Z"
            fill="#7f1725"
          />

       
          <path
            d="M0,145 C280,175 510,105 750,120 C1010,140 1220,70 1440,90 L1440,0 L0,0 Z"
            fill="#020617"
          />
        </svg>
      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-40 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-4">

        
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-700 shadow-lg shadow-cyan-500/20">
                <span className="text-xl font-black">T</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Trust <span className="text-cyan-400">&</span> Tranquility
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Digital Trust
                </p>
              </div>
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-400">
              A digital space where trust meets technology. Explore a web
              built to create meaningful connections, discover new
              experiences, and move confidently into the digital future.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-sm text-gray-300">
                Building trusted digital experiences
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Explore
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="/"
                  className="transition-all duration-300 hover:ml-2 hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition-all duration-300 hover:ml-2 hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="transition-all duration-300 hover:ml-2 hover:text-white"
                >
                  Digital Services
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-all duration-300 hover:ml-2 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Connect
            </h3>

            <p className="mb-5 leading-7 text-gray-400">
              Ready to explore something different?
              <br />
              Let's create your next digital experience.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Let's Connect

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-300">
              Trust & Tranquility
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

 
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
    </footer>
  );
}