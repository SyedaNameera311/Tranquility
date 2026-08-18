import { 
  ArrowRightIcon, 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon, 
  ServerStackIcon, 
  ShieldCheckIcon, 
  MegaphoneIcon, 
  GlobeAltIcon, 
  CheckIcon, 
} from "@heroicons/react/24/outline"; 
 
const services = [ 
  { 
    number: "01", 
    icon: DevicePhoneMobileIcon, 
    title: "Landing Pages", 
    description: 
      "High-converting landing pages designed to introduce your brand, product, service, or campaign.", 
    items: [ 
      "Beginner Landing Page", 
      "Standard Landing Page", 
      "Professional Landing Page", 
    ], 
    color: "cyan", 
  }, 
 
  { 
    number: "02", 
    icon: PaintBrushIcon, 
    title: "Portfolio Websites", 
    description: 
      "Professional portfolio websites for developers, designers, creators, students, businesses, and professionals.", 
    items: [ 
      "Beginner Portfolio", 
      "Standard Portfolio", 
      "Professional Portfolio", 
      "Animated Portfolio", 
      "Clean / Non-Animated Portfolio", 
    ], 
    color: "blue", 
  }, 
 
  { 
    number: "03", 
    icon: CodeBracketIcon, 
    title: "Frontend Development", 
    description: 
      "Modern, responsive and interactive user interfaces built for an excellent web experience.", 
    items: [ 
      "Responsive UI", 
      "React Development", 
      "Interactive Components", 
      "Animations & Micro-interactions", 
      "API Integration", 
    ], 
    color: "indigo", 
  }, 
 
  { 
    number: "04", 
    icon: ServerStackIcon, 
    title: "Backend Development", 
    description: 
      "Reliable server-side systems that power your applications, APIs, databases and business logic.", 
    items: [ 
      "REST APIs", 
      "Database Integration", 
      "Authentication Systems", 
      "Server-side Logic", 
      "API Development", 
    ], 
    color: "cyan", 
  }, 
 
  { 
    number: "05", 
    icon: ShieldCheckIcon, 
    title: "Cyber Security", 
    description: 
      "Security-focused services designed to identify weaknesses and help protect authorized web applications.", 
    items: [ 
      "Vulnerability Assessment", 
      "Authorized Penetration Testing", 
      "Web Security Testing", 
      "Security Hardening", 
      "Security Audits", 
    ], 
    color: "red", 
  }, 
 
  { 
    number: "06", 
    icon: MegaphoneIcon, 
    title: "Digital Marketing", 
    description: 
      "Build your online presence, reach the right audience and turn attention into meaningful engagement.", 
    items: [ 
      "Social Media Strategy", 
      "Content Strategy", 
      "SEO", 
      "Brand Awareness", 
      "Digital Campaigns", 
    ], 
    color: "purple", 
  }, 
 
  { 
    number: "07", 
    icon: GlobeAltIcon, 
    title: "Full Web Development", 
    description: 
      "Complete web solutions combining frontend, backend, databases, APIs, deployment and security.", 
    items: [ 
      "Complete Website", 
      "Frontend + Backend", 
      "Database", 
      "Authentication", 
      "Deployment & Optimization", 
    ], 
    color: "blue", 
  }, 
]; 
 
const tiers = [ 
  { 
    name: "Beginner", 
    description: "Perfect for simple projects and personal needs.", 
    features: [ 
      "Clean modern design", 
      "Responsive layout", 
      "Essential sections", 
      "Mobile friendly", 
    ], 
  }, 
  { 
    name: "Standard", 
    description: "For businesses and professionals who need more.", 
    features: [ 
      "Custom design", 
      "Interactive sections", 
      "Animations", 
      "Advanced responsiveness", 
      "SEO-friendly structure", 
    ], 
  }, 
  { 
    name: "Professional", 
    description: "A complete premium digital experience.", 
    features: [ 
      "Premium UI/UX", 
      "Advanced animations", 
      "Custom functionality", 
      "API integration", 
      "Performance optimization", 
      "Deployment support", 
    ], 
  }, 
]; 
 
export default function Services() { 
  return ( 
    <main className="relative isolate overflow-hidden bg-[#030712] text-white"> 
 
      <div className="absolute inset-0 -z-20 bg-[#030712]" /> 
 
      <div className="absolute -left-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" /> 
 
      <div className="absolute right-[-150px] top-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" /> 
 
      <div className="absolute bottom-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" /> 
 
      <div 
        aria-hidden="true" 
        className="absolute inset-0 -z-10 opacity-[0.035]" 
        style={{ 
          backgroundImage: 
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", 
          backgroundSize: "70px 70px", 
        }} 
      /> 
 
      <section className="px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8 lg:pt-40"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="mx-auto max-w-3xl text-center"> 
 
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md"> 
 
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" /> 
 
              <span className="text-sm font-medium text-cyan-300"> 
                What we offer 
              </span> 
 
            </div> 
 
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"> 
 
              Digital services 
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent"> 
                built for you. 
              </span> 
 
            </h1> 
 
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl"> 
              From a simple landing page to a complete web application, 
              Trust & Tranquility provides digital solutions designed around 
              your goals, your audience, and your future. 
            </p> 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="px-6 pb-24 lg:px-8"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="grid gap-6 lg:grid-cols-2"> 
 
            {services.map((service, index) => { 
 
              const Icon = service.icon; 
 
              return ( 
                <div 
                  key={service.number} 
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.05] sm:p-10 ${ 
                    index === services.length - 1 
                      ? "lg:col-span-2" 
                      : "" 
                  }`} 
                > 
 
                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" /> 
 
                  <div className="relative"> 
 
                    <div className="flex items-start justify-between"> 
 
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/10"> 
 
                        <Icon className="h-7 w-7 text-cyan-400" /> 
 
                      </div> 
 
                      <span className="text-sm font-medium tracking-widest text-gray-700"> 
                        {service.number} 
                      </span> 
 
                    </div> 
 
                    <h2 className="mt-8 text-2xl font-semibold sm:text-3xl"> 
                      {service.title} 
                    </h2> 
 
                    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500"> 
                      {service.description} 
                    </p> 
 
                    <div className="mt-8 grid gap-3 sm:grid-cols-2"> 
 
                      {service.items.map((item) => ( 
                        <div 
                          key={item} 
                          className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3" 
                        > 
 
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10"> 
 
                            <CheckIcon className="h-3 w-3 text-cyan-400" /> 
 
                          </div> 
 
                          <span className="text-sm text-gray-400"> 
                            {item} 
                          </span> 
 
                        </div> 
                      ))} 
 
                    </div> 
 
                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-cyan-400"> 
 
                      Explore service 
 
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> 
 
                    </div> 
 
                  </div> 
 
                </div> 
              ); 
            })} 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 sm:py-32 lg:px-8"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="mx-auto max-w-3xl text-center"> 
 
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"> 
              Choose your level 
            </p> 
 
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"> 
              Start simple. 
              <span className="text-gray-500"> Go further.</span> 
            </h2> 
 
            <p className="mt-6 text-lg leading-8 text-gray-500"> 
              Whether you're starting your first website or building a 
              complete digital product, choose the level that fits your needs. 
            </p> 
 
          </div> 
 
          <div className="mt-16 grid gap-6 lg:grid-cols-3"> 
 
            {tiers.map((tier, index) => ( 
              <div 
                key={tier.name} 
                className={`relative rounded-3xl border p-8 ${ 
                  index === 1 
                    ? "border-cyan-400/30 bg-cyan-400/[0.05] shadow-2xl shadow-cyan-500/5" 
                    : "border-white/10 bg-white/[0.03]" 
                }`} 
              > 
 
                {index === 1 && ( 
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-gray-950"> 
                    MOST POPULAR 
                  </div> 
                )} 
 
                <p className="text-sm uppercase tracking-widest text-cyan-400"> 
                  {tier.name} 
                </p> 
 
                <p className="mt-4 min-h-14 text-gray-500"> 
                  {tier.description} 
                </p> 
 
                <div className="my-7 h-px bg-white/10" /> 
 
                <ul className="space-y-4"> 
 
                  {tier.features.map((feature) => ( 
                    <li 
                      key={feature} 
                      className="flex items-center gap-3 text-sm text-gray-400" 
                    > 
                      <CheckIcon className="h-5 w-5 shrink-0 text-cyan-400" /> 
                      {feature} 
                    </li> 
                  ))} 
 
                </ul> 
 
                <a 
                  href="/contact" 
                  className="mt-8 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300" 
                > 
                  Get Started 
                </a> 
 
              </div> 
            ))} 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="px-6 py-24 sm:py-32 lg:px-8"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="grid items-center gap-16 lg:grid-cols-2"> 
 
            <div> 
 
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"> 
                Portfolio websites 
              </p> 
 
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"> 
                Your work deserves 
                <span className="block text-gray-500"> 
                  a great first impression. 
                </span> 
              </h2> 
 
              <p className="mt-6 text-lg leading-8 text-gray-500"> 
                Showcase your skills, projects, achievements and personality 
                with a portfolio designed around you. 
              </p> 
 
              <div className="mt-8 space-y-4"> 
 
                {[ 
                  "Clean & professional portfolio", 
                  "Modern animated portfolio", 
                  "Creative interactive portfolio", 
                ].map((item) => ( 
                  <div 
                    key={item} 
                    className="flex items-center gap-3 text-gray-400" 
                  > 
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400"> 
                      ✓ 
                    </span> 
 
                    {item} 
                  </div> 
                ))} 
 
              </div> 
 
              <a 
                href="/contact" 
                className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-cyan-400" 
              > 
                Build my portfolio 
 
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /> 
 
              </a> 
 
            </div> 
 
            <div className="relative"> 
 
              <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[100px]" /> 
 
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl"> 
 
                <div className="rounded-2xl border border-white/10 bg-[#080d19] p-5"> 
 
                  <div className="flex items-center gap-2 border-b border-white/10 pb-4"> 
 
                    <span className="h-3 w-3 rounded-full bg-red-400/70" /> 
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" /> 
                    <span className="h-3 w-3 rounded-full bg-green-400/70" /> 
 
                    <div className="ml-4 h-2 w-32 rounded-full bg-white/10" /> 
 
                  </div> 
 
                  <div className="grid gap-5 py-8 sm:grid-cols-2"> 
 
                    <div className="h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20" /> 
 
                    <div className="space-y-4"> 
 
                      <div className="h-5 w-3/4 rounded bg-white/10" /> 
 
                      <div className="h-3 w-full rounded bg-white/5" /> 
 
                      <div className="h-3 w-5/6 rounded bg-white/5" /> 
 
                      <div className="mt-6 h-10 w-28 rounded-xl bg-cyan-400/20" /> 
 
                    </div> 
 
                  </div> 
 
                </div> 
 
              </div> 
 
            </div> 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="border-y border-white/10 bg-gradient-to-r from-red-500/[0.03] via-transparent to-cyan-500/[0.03] px-6 py-24 sm:py-32 lg:px-8"> 
 
        <div className="mx-auto max-w-7xl"> 
 
          <div className="grid items-center gap-12 lg:grid-cols-2"> 
 
            <div> 
 
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-400/10"> 
 
                <ShieldCheckIcon className="h-7 w-7 text-red-400" /> 
 
              </div> 
 
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-red-400"> 
                Secure the Web 
              </p> 
 
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"> 
                Security isn't 
                <span className="text-gray-500"> optional.</span> 
              </h2> 
 
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500"> 
                We can help identify security weaknesses in authorized web 
                applications and strengthen your digital environment before 
                problems become bigger risks. 
              </p> 
 
            </div> 
 
            <div className="grid gap-4 sm:grid-cols-2"> 
 
              {[ 
                "Vulnerability Assessment", 
                "Authorized Penetration Testing", 
                "Web Security Testing", 
                "Security Hardening", 
              ].map((item) => ( 
                <div 
                  key={item} 
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6" 
                > 
 
                  <ShieldCheckIcon className="h-6 w-6 text-red-400" /> 
 
                  <h3 className="mt-5 font-semibold"> 
                    {item} 
                  </h3> 
 
                  <p className="mt-2 text-sm leading-6 text-gray-600"> 
                    Professional security-focused assessment and improvement. 
                  </p> 
 
                </div> 
              ))} 
 
            </div> 
 
          </div> 
 
        </div> 
 
      </section> 
 
      <section className="px-6 py-24 lg:px-8"> 
 
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 px-8 py-20 text-center sm:px-16"> 
 
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" /> 
 
          <div className="relative mx-auto max-w-3xl"> 
 
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"> 
              Have a project in mind? 
            </p> 
 
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl"> 
              Let's build something 
              <span className="text-cyan-300"> 
                {" "}worth exploring. 
              </span> 
            </h2> 
 
            <p className="mt-6 text-lg leading-8 text-gray-500"> 
              Tell us what you're imagining and we'll help you find the right 
              digital solution. 
            </p> 
 
            <a 
              href="/contact" 
              className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20" 
            > 
              Start a Conversation 
 
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /> 
 
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