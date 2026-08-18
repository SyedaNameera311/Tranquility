import {
  ArrowRightIcon,
  PlayIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  HeartIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: GlobeAltIcon,
    title: "Modern Web Experiences",
    text: "Beautiful, responsive websites designed to help your brand stand out and connect with people.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Digital Trust",
    text: "We focus on creating secure, reliable experiences that make users feel confident.",
  },
  {
    icon: SparklesIcon,
    title: "Meaningful Design",
    text: "Every interface is crafted with clarity, simplicity, and purpose at its center.",
  },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Trust",
    text: "Technology should feel safe, reliable, and transparent.",
  },
  {
    icon: SparklesIcon,
    title: "Experience",
    text: "We create digital experiences people enjoy using.",
  },
  {
    icon: HeartIcon,
    title: "Human",
    text: "People remain at the heart of everything we create.",
  },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[#020617] text-white">

      <div className="absolute inset-0 -z-30 bg-[#020617]" />

      <div
        aria-hidden="true"
        className="absolute left-[-180px] top-[15%] -z-20 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute right-[-180px] top-[20%] -z-20 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[10%] left-1/2 -z-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-32 sm:pt-36 lg:px-8 lg:pb-36 lg:pt-44">

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          <div>

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md">

              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Digital Trust • New Experiences
              </span>

            </div>

            <h1 className="font-serif text-6xl font-bold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">

              Trust &

              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tranquility
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              We build digital trust and craft modern web experiences that
              help businesses grow, connect, and move forward with confidence.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
              Simple ideas. Thoughtful design. Meaningful technology.
              Everything we create is designed around people.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/service"
                className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
              >

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">

                  <PlayIcon className="h-4 w-4 fill-current" />

                </span>

                Explore Services

                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />

              </a>

              <a
                href="/about"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]"
              >

                Discover Our Story

                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />

              </a>

            </div>

            <div className="mt-10 flex items-center gap-4">

              <div className="flex -space-x-2">

                <span className="h-8 w-8 rounded-full border-2 border-[#020617] bg-gradient-to-br from-cyan-300 to-cyan-500" />

                <span className="h-8 w-8 rounded-full border-2 border-[#020617] bg-gradient-to-br from-blue-400 to-blue-600" />

                <span className="h-8 w-8 rounded-full border-2 border-[#020617] bg-gradient-to-br from-violet-400 to-indigo-500" />

              </div>

              <div>
                <p className="text-sm font-medium text-gray-300">
                  Building better digital experiences
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  With trust, creativity & purpose
                </p>
              </div>

            </div>

          </div>

          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              <div className="flex items-center justify-between">

                <div className="flex gap-2">

                  <span className="h-3 w-3 rounded-full bg-red-400/70" />

                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />

                  <span className="h-3 w-3 rounded-full bg-green-400/70" />

                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                  TRUST & TRANQUILITY
                </span>

              </div>

              <div className="relative flex h-[380px] items-center justify-center">

                <div className="absolute h-72 w-72 rounded-full border border-cyan-400/10" />

                <div className="absolute h-60 w-60 rounded-full border border-cyan-400/10" />

                <div className="absolute h-48 w-48 rounded-full border border-cyan-400/15" />

                <div className="absolute h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 shadow-[0_0_90px_rgba(34,211,238,0.35)]">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">

                    <span className="font-serif text-4xl font-black text-white">
                      T
                    </span>

                  </div>

                </div>

                <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
                      <ShieldCheckIcon className="h-5 w-5 text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gray-600">
                        Principle
                      </p>

                      <p className="mt-1 text-sm font-semibold text-cyan-300">
                        Trust
                      </p>
                    </div>

                  </div>

                </div>

                <div className="absolute right-0 top-8 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10">
                      <SparklesIcon className="h-5 w-5 text-blue-400" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gray-600">
                        Experience
                      </p>

                      <p className="mt-1 text-sm font-semibold text-blue-300">
                        Meaningful
                      </p>
                    </div>

                  </div>

                </div>

                <div className="absolute bottom-12 left-8 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-xl backdrop-blur-xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-400/10">
                      <HeartIcon className="h-5 w-5 text-indigo-400" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-gray-600">
                        At the center
                      </p>

                      <p className="mt-1 text-sm font-semibold text-indigo-300">
                        People
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              <div className="border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                  Our philosophy
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Explore. Connect. Experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <section className="px-6 py-24 sm:py-32 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Who we are
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              Technology should feel

              <span className="block text-gray-500">
                simple & human.
              </span>

            </h2>

          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-400">

            <p>
              Trust & Tranquility is a digital vision focused on creating
              experiences where technology feels simple, meaningful, and
              trustworthy.
            </p>

            <p>
              We believe great digital products are not only about technology.
              They are about people, emotions, clarity, and the confidence
              someone feels while using them.
            </p>

            <a
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Learn more about us

              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />

            </a>

          </div>

        </div>

      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 sm:py-32 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Digital experiences
              <span className="text-gray-500"> built with purpose.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              From thoughtful design to reliable digital solutions, we help
              turn ideas into experiences people can trust.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/10">

                    <Icon className="h-6 w-6 text-cyan-400" />

                  </div>

                  <h3 className="mt-8 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {service.text}
                  </p>

                  <div className="mt-7 h-px w-12 bg-cyan-400/30 transition-all duration-300 group-hover:w-24" />

                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                </div>
              );
            })}

          </div>

          <div className="mt-12 text-center">

            <a
              href="/service"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Explore all services

              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />

            </a>

          </div>

        </div>

      </section>

      <section className="px-6 py-24 sm:py-32 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                What guides us
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Built around
                <span className="block text-gray-500">
                  what matters.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
                Our approach is grounded in a few simple principles that
                influence everything we design and build.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">

                      <Icon className="h-5 w-5 text-cyan-400" />

                    </div>

                    <h3 className="mt-6 font-semibold text-white">
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

        </div>

      </section>

      <section className="px-6 pb-24 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 px-8 py-20 sm:px-16">

          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Why Trust & Tranquility
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Digital experiences
                <span className="block text-cyan-300">
                  people can believe in.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                We combine creativity, technology, and human-centered thinking
                to create digital experiences that feel natural, reliable,
                and genuinely useful.
              </p>

              <a
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                Start a Conversation

                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />

              </a>

            </div>

            <div className="space-y-4">

              {[
                "Human-centered design",
                "Modern responsive experiences",
                "Trust-focused digital solutions",
                "Clear and meaningful communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur-md"
                >

                  <CheckCircleIcon className="h-6 w-6 shrink-0 text-cyan-400" />

                  <span className="text-sm font-medium text-gray-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Your next experience starts here
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

            Have an idea?

            <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Let's create it.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Let's turn your ideas into a digital experience that feels
            beautiful, trustworthy, and meaningful.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Let's Talk

              <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />

            </a>

            <a
              href="/about"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/20 hover:bg-white/[0.06] hover:text-white"
            >
              About Us
            </a>

          </div>

        </div>

      </section>

      <div className="relative h-32 overflow-hidden">

        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full"
        >

          <path
            d="M0,100 C250,150 430,50 700,90 C950,125 1150,30 1440,70 L1440,150 L0,150 Z"
            fill="#0b5368"
            opacity="0.45"
          />

          <path
            d="M0,120 C280,160 500,80 760,105 C1020,135 1200,55 1440,80 L1440,150 L0,150 Z"
            fill="#020617"
          />

        </svg>

      </div>

    </main>
  );
}