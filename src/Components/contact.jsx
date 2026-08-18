import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  PaperAirplaneIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
} from "@heroicons/react/24/outline"; 
 
const contactInfo = [ 
  { 
    icon: EnvelopeIcon, 
    title: "Email Us", 
    text: "hello@trustandtranquility.com", 
    href: "mailto:hello@trustandtranquility.com", 
  }, 
  { 
    icon: PhoneIcon, 
    title: "Call Us", 
    text: "+92 300 0000000", 
    href: "tel:+923000000000", 
  }, 
  { 
    icon: MapPinIcon, 
    title: "Our Location", 
    text: "Karachi, Pakistan", 
    href: "#", 
  }, 
]; 
 
const reasons = [ 
  { 
    icon: ShieldCheckIcon, 
    title: "Trusted Communication", 
    text: "Your message matters to us. We approach every conversation with privacy, respect, and transparency.", 
  }, 
  { 
    icon: ClockIcon, 
    title: "Quick Response", 
    text: "We aim to respond to every genuine inquiry as quickly as possible.", 
  }, 
  { 
    icon: PaperAirplaneIcon, 
    title: "Let's Create Together", 
    text: "Have an idea, project, or question? Tell us about it and let's explore the possibilities.", 
  }, 
]; 
 
export default function Contact() { 
  return ( 
    <main className="relative isolate min-h-screen overflow-hidden bg-[#030712] text-white"> 
 
      <div className="absolute inset-0 -z-30 bg-[#030712]" /> 
 
      <div 
        aria-hidden="true" 
        className="absolute -left-48 top-20 -z-20 h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" 
      /> 
 
      <div 
        aria-hidden="true" 
        className="absolute -right-48 top-[30%] -z-20 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" 
      /> 
 
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -z-20 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[160px]" 
      /> 
 
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 opacity-[0.035]" 
        style={{ 
          backgroundImage: 
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", 
          backgroundSize: "70px 70px", 
        }} 
      /> 
 
      <section className="px-6 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:px-8"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]"> 
 
            <div> 
 
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md"> 
 
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" /> 
 
                <span className="text-sm font-medium text-cyan-300"> 
                  Contact Trust & Tranquility 
                </span> 
 
              </div> 
 
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"> 
 
                Let's build 
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent"> 
                  something meaningful. 
                </span> 
 
              </h1> 
 
              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl"> 
                Whether you have an idea, a project, or simply want to start 
                a conversation, we'd love to hear from you. 
              </p> 
 
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-500"> 
                Tell us what you're working on, what you need help with, or 
                where you'd like to go next. Together, we can turn ideas into 
                meaningful digital experiences. 
              </p> 
 
              <div className="mt-10 space-y-4"> 
 
                {contactInfo.map((item) => { 
                  const Icon = item.icon; 
 
                  return ( 
                    <a 
                      key={item.title} 
                      href={item.href} 
                      className="group flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]" 
                    > 
 
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/10"> 
                        <Icon className="h-6 w-6 text-cyan-400" /> 
                      </div> 
 
                      <div> 
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-600"> 
                          {item.title} 
                        </p> 
 
                        <p className="mt-1 text-sm font-medium text-gray-300 transition group-hover:text-cyan-300"> 
                          {item.text} 
                        </p> 
                      </div> 
 
                    </a> 
                  ); 
                })} 
 
              </div> 
 
            </div> 
 
            <div className="relative"> 
 
              <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-[100px]" /> 
 
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8"> 
 
                <div className="flex items-center justify-between"> 
 
                  <div className="flex gap-2"> 
                    <span className="h-3 w-3 rounded-full bg-red-400/70" /> 
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" /> 
                    <span className="h-3 w-3 rounded-full bg-green-400/70" /> 
                  </div> 
 
                  <span className="text-xs tracking-[0.25em] text-gray-600"> 
                    SEND MESSAGE 
                  </span> 
 
                </div> 
 
                <div className="mt-8"> 
 
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400"> 
                    Start a conversation 
                  </p> 
 
                  <h2 className="mt-3 text-3xl font-bold"> 
                    How can we help? 
                  </h2> 
 
                  <p className="mt-3 text-sm leading-6 text-gray-500"> 
                    Fill out the form and we'll get back to you. 
                  </p> 
 
                </div> 
 
                <form 
                  className="mt-8 space-y-5" 
                  onSubmit={(e) => e.preventDefault()} 
                > 
 
                  <div> 
                    <label 
                      htmlFor="name" 
                      className="mb-2 block text-sm font-medium text-gray-300" 
                    > 
                      Your Name 
                    </label> 
 
                    <input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20" 
                    /> 
                  </div> 
 
                  <div> 
                    <label 
                      htmlFor="email" 
                      className="mb-2 block text-sm font-medium text-gray-300" 
                    > 
                      Email Address 
                    </label> 
 
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20" 
                    /> 
                  </div> 
 
                  <div> 
                    <label 
                      htmlFor="subject" 
                      className="mb-2 block text-sm font-medium text-gray-300" 
                    > 
                      Subject 
                    </label> 
 
                    <input 
                      id="subject" 
                      type="text" 
                      placeholder="What would you like to discuss?" 
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20" 
                    /> 
                  </div> 
 
                  <div> 
                    <label 
                      htmlFor="message" 
                      className="mb-2 block text-sm font-medium text-gray-300" 
                    > 
                      Your Message 
                    </label> 
 
                    <textarea 
                      id="message" 
                      rows="5" 
                      placeholder="Tell us a little about your idea..." 
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/40 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20" 
                    /> 
                  </div> 
 
                  <button 
                    type="submit" 
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20" 
                  > 
                    Send Message 
 
                    <PaperAirplaneIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> 
                  </button> 
 
                </form> 
 
              </div> 
            </div> 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 sm:py-32 lg:px-8"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="mx-auto max-w-2xl text-center"> 
 
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"> 
              Why reach out? 
            </p> 
 
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"> 
              More than just a message. 
            </h2> 
 
            <p className="mt-6 text-lg leading-8 text-gray-500"> 
              Every conversation is an opportunity to discover something new, 
              solve a problem, and create something valuable. 
            </p> 
 
          </div> 
 
          <div className="mt-16 grid gap-6 md:grid-cols-3"> 
 
            {reasons.map((reason) => { 
              const Icon = reason.icon; 
 
              return ( 
                <div 
                  key={reason.title} 
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.05]" 
                > 
 
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/10"> 
                    <Icon className="h-6 w-6 text-cyan-400" /> 
                  </div> 
 
                  <h3 className="mt-7 text-xl font-semibold"> 
                    {reason.title} 
                  </h3> 
 
                  <p className="mt-4 text-sm leading-7 text-gray-500"> 
                    {reason.text} 
                  </p> 
 
                  <div className="mt-7 h-px w-12 bg-cyan-400/30 transition-all duration-300 group-hover:w-24" /> 
 
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" /> 
 
                </div> 
              ); 
            })} 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="px-6 py-24 lg:px-8"> 
 
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 px-8 py-20 sm:px-16"> 
 
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" /> 
 
          <div className="relative mx-auto max-w-3xl text-center"> 
 
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"> 
              Trust & Tranquility 
            </p> 
 
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl"> 
              Have an idea? 
              <span className="block text-cyan-300"> 
                Let's make it real. 
              </span> 
            </h2> 
 
            <p className="mt-6 text-lg leading-8 text-gray-400"> 
              Great digital experiences start with a simple conversation. 
              Reach out and let's discover what's possible together. 
            </p> 
 
            <a 
              href="mailto:hello@trustandtranquility.com" 
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20" 
            > 
              Email Us 
 
              <PaperAirplaneIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> 
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