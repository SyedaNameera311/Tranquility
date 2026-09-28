import {
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import Navbar from "./navbar";

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Trust",
    text: "We build relationships through transparency, reliability, and integrity.",
  },
  {
    icon: SparklesIcon,
    title: "Creativity",
    text: "We turn ideas into thoughtful and engaging digital experiences.",
  },
  {
    icon: HeartIcon,
    title: "Purpose",
    text: "We create solutions that have meaning and solve real problems.",
  },
  {
    icon: UserGroupIcon,
    title: "People",
    text: "We keep people at the center of every experience we create.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-[-150px] top-[25%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute bottom-[-200px] left-[25%] h-[500px] w-[700px] rounded-full bg-violet-600/10 blur-[160px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pt-48">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]" />
              About Us
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1] tracking-tight sm:text-6xl lg:text-7xl">
              Building digital
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                trust & tranquility.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              We are Trust & Tranquility — a digital company focused on
              creating secure, meaningful, and beautiful experiences for
              modern businesses.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-gray-500">
              We combine thoughtful design, reliable technology, and a
              people-first approach to help businesses turn their ideas into
              digital experiences that customers can trust.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/service"
                className="group flex items-center gap-3 rounded-2xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-3.5 font-semibold text-cyan-300 transition hover:bg-cyan-400/15 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
              >
                Explore Our Services

                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.07]"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07101f]/75 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
              {/* Top glow */}
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,.1)]">
                <SparklesIcon className="h-8 w-8 text-cyan-400" />
              </div>

              <h2 className="mt-7 font-serif text-3xl font-bold">
                Trust & Tranquility
              </h2>

              <p className="mt-2 text-cyan-400">
                Digital Trust & Experiences
              </p>

              <p className="mt-6 text-sm leading-7 text-gray-400">
                We believe technology should feel trustworthy, simple, and
                human. That is why we combine thoughtful design, reliable
                technology, and meaningful experiences to build digital
                products people can trust.
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="grid grid-cols-2 gap-4">
                <MiniValue
                  icon={<ShieldCheckIcon />}
                  title="Trust"
                />

                <MiniValue
                  icon={<HeartIcon />}
                  title="Meaning"
                />

                <MiniValue
                  icon={<LightBulbIcon />}
                  title="Innovation"
                />

                <MiniValue
                  icon={<UserGroupIcon />}
                  title="People First"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Who We Are
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              More than just
              <span className="text-cyan-400"> digital solutions.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">
            <p>
              Trust & Tranquility is a digital experiences company built
              around a simple idea: technology should create confidence, not
              confusion.
            </p>

            <p>
              We work with businesses to transform ideas into modern
              websites, applications, and digital experiences that are
              visually engaging, reliable, and designed with purpose.
            </p>

            <p>
              Every project gives us an opportunity to create something
              useful, beautiful, and meaningful for the people who experience
              it.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/25">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <ShieldCheckIcon className="h-7 w-7" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Our Mission
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Creating digital confidence.
            </h3>

            <p className="mt-5 leading-7 text-gray-400">
              Our mission is to create innovative, reliable, and meaningful
              digital experiences that help businesses grow with confidence.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-[28px] border border-violet-400/10 bg-gradient-to-br from-violet-400/[0.08] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-violet-400/25">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-400">
              <SparklesIcon className="h-7 w-7" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Our Vision
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              A better digital future.
            </h3>

            <p className="mt-5 leading-7 text-gray-400">
              We envision a digital world where technology feels effortless,
              trusted, accessible, and genuinely valuable to the people who
              use it.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="relative z-10 border-y border-white/5 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What We Believe
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Our Core Values
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              The principles that guide the way we design, build,
              collaborate, and grow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-[#07101f]/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#07101f]/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400/15">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Let's Build Together
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold sm:text-5xl">
              Ready to create something meaningful?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Let's turn your ideas into a digital experience that your
              customers can trust and remember.
            </p>

            <a
              href="/contact"
              className="group mx-auto mt-8 inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]"
            >
              Start a Conversation

              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   MINI VALUE
===================================================== */

function MiniValue({ icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-3">
      <div className="h-5 w-5 text-cyan-400">
        {icon}
      </div>

      <span className="text-sm font-medium text-gray-300">
        {title}
      </span>
    </div>
  );
}
