import { useState } from "react";

import {
  ChevronDownIcon,
  UserIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  SparklesIcon,
  ArrowRightIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/logo.png";




function NiqabAvatar({ large = false }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-full
        border border-cyan-300/30
        bg-gradient-to-br from-cyan-100 via-blue-100 to-violet-200
        shadow-[0_0_30px_rgba(34,211,238,0.25)]
        ${large ? "h-20 w-20" : "h-10 w-10"}
      `}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="avatarBg"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#e0faff" />
            <stop offset="50%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#ddd6fe" />
          </linearGradient>

          <linearGradient
            id="cloth"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#334155" />
            <stop offset="45%" stopColor="#111827" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="50"
          fill="url(#avatarBg)"
        />

        <circle
          cx="17"
          cy="22"
          r="3"
          fill="white"
          opacity=".8"
        />

        <circle
          cx="83"
          cy="25"
          r="2.5"
          fill="white"
          opacity=".9"
        />

      
        <path
          d="
            M13 100
            C14 70 18 42 30 27
            C36 19 43 15 50 15
            C57 15 64 19 70 27
            C82 42 86 70 87 100
            Z
          "
          fill="url(#cloth)"
        />

   
        <ellipse
          cx="50"
          cy="47"
          rx="21"
          ry="23"
          fill="#f4d2be"
        />

        <path
          d="
            M28 44
            C30 29 39 21 50 21
            C61 21 70 29 72 44
            C66 37 59 34 50 34
            C41 34 34 37 28 44
            Z
          "
          fill="#111827"
        />

     
        <path
          d="
            M29 43
            C35 36 42 33 50 33
            C58 33 65 36 71 43
            C65 49 58 52 50 52
            C42 52 35 49 29 43
            Z
          "
          fill="#020617"
        />

      
        <ellipse
          cx="42"
          cy="43"
          rx="4"
          ry="4.7"
          fill="white"
        />

        <ellipse
          cx="43"
          cy="43"
          rx="2.2"
          ry="3"
          fill="#3b2929"
        />

        <circle
          cx="44"
          cy="41.5"
          r="0.8"
          fill="white"
        />

    
        <ellipse
          cx="58"
          cy="43"
          rx="4"
          ry="4.7"
          fill="white"
        />

        <ellipse
          cx="57"
          cy="43"
          rx="2.2"
          ry="3"
          fill="#3b2929"
        />

        <circle
          cx="58"
          cy="41.5"
          r="0.8"
          fill="white"
        />

       
        <path
          d="M38 39 Q42 36 46 39"
          fill="none"
          stroke="#1e293b"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="M54 39 Q58 36 62 39"
          fill="none"
          stroke="#1e293b"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="
            M29 49
            C35 54 42 57 50 57
            C58 57 65 54 71 49
            L69 72
            C64 80 57 84 50 84
            C43 84 36 80 31 72
            Z
          "
          fill="#020617"
        />

        <path
          d="M34 64 Q42 70 50 71"
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
        />

        <path
          d="M66 64 Q58 70 50 71"
          fill="none"
          stroke="#334155"
          strokeWidth="1.5"
        />

     
        <ellipse
          cx="35"
          cy="56"
          rx="4"
          ry="2"
          fill="#fb7185"
          opacity=".25"
        />

        <ellipse
          cx="65"
          cy="56"
          rx="4"
          ry="2"
          fill="#fb7185"
          opacity=".25"
        />
      </svg>

      {!large && (
        <span
          className="
            absolute bottom-0 right-0
            h-3 w-3 rounded-full
            border-2 border-slate-950
            bg-cyan-400
            shadow-[0_0_10px_rgba(34,211,238,0.9)]
          "
        />
      )}
    </div>
  );
}


export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">


      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <nav
        className="
          relative mx-auto max-w-7xl
          rounded-[24px]
          border border-white/10
          bg-[#07101f]/85
          shadow-2xl shadow-black/30
          backdrop-blur-2xl
        "
      >

  
        <div
          className="
            absolute left-10 right-10 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/70
            to-transparent
          "
        />

        <div className="flex h-[76px] items-center justify-between px-4 sm:px-6">

          <a
            href="/home"
            className="group flex items-center gap-3"
          >
            <div className="relative">

              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-cyan-400/20
                  blur-xl
                  transition
                  group-hover:bg-cyan-400/30
                "
              />

              <img
                src={logo}
                alt="Trust & Tranquility"
                className="
                  relative h-11 w-11
                  rounded-xl
                  object-contain
                "
              />
            </div>

            <div className="hidden sm:block">
              <h1
                className="
                  font-serif
                  text-lg
                  font-bold
                  tracking-wide
                  text-white
                "
              >
                TRUST
                <span className="text-cyan-400"> & </span>
                TRANQUILITY
              </h1>

              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-gray-500
                "
              >
                Digital Trust • New Experiences
              </p>
            </div>
          </a>



          <div
            className="
              hidden md:flex
              items-center gap-1
              rounded-2xl
              border border-white/5
              bg-white/[0.025]
              p-1.5
            "
          >
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  group relative
                  rounded-xl
                  px-5 py-2.5
                  text-sm
                  font-medium
                  transition-all duration-300

                  ${
                    index === 0
                      ? "text-cyan-300"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {item.name}

                {index === 0 && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-0.5
                      w-7
                      -translate-x-1/2
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_10px_cyan]
                    "
                  />
                )}

                <span
                  className="
                    absolute inset-0 -z-10
                    rounded-xl
                    bg-cyan-400/0
                    transition
                    group-hover:bg-cyan-400/10
                  "
                />
              </a>
            ))}
          </div>



          <div className="flex items-center gap-2 sm:gap-3">

          
            <a
              href="/signup"
              className="
                hidden sm:flex
                items-center gap-2
                rounded-xl
                border border-cyan-400/40
                bg-cyan-400/5
                px-4 py-2.5
                text-sm font-semibold
                text-cyan-300
                transition
                hover:bg-cyan-400/15
                hover:shadow-[0_0_25px_rgba(34,211,238,.15)]
              "
            >
              <UserPlusIcon className="h-5 w-5" />
              Sign Up
            </a>


            {/* Notification */}
            <button
              type="button"
              className="
                relative
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-2.5
                text-gray-400
                transition
                hover:border-cyan-400/30
                hover:text-cyan-300
              "
            >
              <BellIcon className="h-5 w-5" />

              <span
                className="
                  absolute -right-1 -top-1
                  flex h-4 min-w-4
                  items-center justify-center
                  rounded-full
                  bg-cyan-400
                  px-1
                  text-[9px]
                  font-bold
                  text-slate-950
                "
              >
                3
              </span>
            </button>


            <div className="relative">

              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="
                  group flex items-center gap-2
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-1.5
                  transition
                  hover:border-cyan-400/30
                "
              >
                <NiqabAvatar />

                <ChevronDownIcon
                  className={`
                    hidden h-4 w-4
                    text-gray-500
                    transition
                    sm:block

                    ${profileOpen ? "rotate-180" : ""}
                  `}
                />
              </button>


         
              {profileOpen && (
                <div
                  className="
                    absolute right-0 top-14
                    z-50
                    w-[340px]
                    overflow-hidden
                    rounded-3xl
                    border border-white/10
                    bg-[#07101f]/95
                    shadow-2xl
                    shadow-black/50
                    backdrop-blur-2xl
                  "
                >

                  {/* Header */}
                  <div
                    className="
                      relative
                      border-b border-white/10
                      p-5
                    "
                  >

                    <div
                      className="
                        absolute
                        -right-10 -top-10
                        h-32 w-32
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                      "
                    />

                    <div className="relative flex items-center gap-4">

                      <NiqabAvatar large />

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Trust & Tranquility
                        </h3>

                        <p className="text-sm text-cyan-400">
                          Digital Trust & Experiences
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Official Company Profile
                        </p>
                      </div>
                    </div>


                    <div
                      className="
                        mt-5 flex gap-3
                        rounded-xl
                        border border-cyan-400/10
                        bg-cyan-400/5
                        p-3
                      "
                    >
                      <ShieldCheckIcon
                        className="
                          h-6 w-6
                          shrink-0
                          text-cyan-400
                        "
                      />

                      <p className="text-xs leading-5 text-gray-400">
                        We create secure, beautiful and
                        meaningful digital experiences.
                      </p>
                    </div>
                  </div>


                  <div className="p-2">

                    <ProfileLink
                      href="/profile"
                      icon={<UserIcon />}
                      title="Company Profile"
                      text="Learn more about us"
                    />

                    <ProfileLink
                      href="/about"
                      icon={<SparklesIcon />}
                      title="Our Mission"
                      text="Our vision & commitments"
                    />

                    <ProfileLink
                      href="/signup"
                      icon={<UserPlusIcon />}
                      title="Create Account"
                      text="Join us today and get started"
                      cyan
                    />
                  </div>


                  <div className="border-t border-white/10 p-3">

                    <button
                      type="button"
                      className="
                        flex w-full
                        items-center gap-3
                        rounded-xl
                        px-4 py-3
                        text-sm font-medium
                        text-red-400
                        transition
                        hover:bg-red-400/5
                      "
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5" />
                      Sign Out
                    </button>

                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-2.5
                text-gray-300
                transition
                hover:border-cyan-400/30
                hover:text-cyan-300
                md:hidden
              "
            >
              {mobileOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>

          </div>
        </div>


        {mobileOpen && (
          <div
            className="
              border-t border-white/10
              p-3
              md:hidden
            "
          >
            <div className="space-y-1">

              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    flex items-center
                    rounded-xl
                    px-4 py-3
                    text-sm font-medium
                    transition

                    ${
                      index === 0
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <a
                href="/signup"
                className="
                  flex items-center
                  justify-center gap-2
                  rounded-xl
                  border border-cyan-400/30
                  bg-cyan-400/5
                  px-4 py-3
                  text-sm font-semibold
                  text-cyan-300
                "
              >
                <UserPlusIcon className="h-5 w-5" />
                Create Account
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



function ProfileLink({
  href,
  icon,
  title,
  text,
  cyan = false,
}) {
  return (
    <a
      href={href}
      className="
        group flex items-center gap-4
        rounded-xl
        p-4
        transition
        hover:bg-white/5
      "
    >
      <div
        className={`
          rounded-xl
          p-2.5

          ${
            cyan
              ? "bg-cyan-400/10 text-cyan-400"
              : "bg-white/5 text-gray-300"
          }
        `}
      >
        <div className="h-5 w-5">
          {icon}
        </div>
      </div>

      <div className="flex-1">
        <p
          className={`
            font-semibold
            ${cyan ? "text-cyan-300" : "text-white"}
          `}
        >
          {title}
        </p>

        <p className="text-xs text-gray-500">
          {text}
        </p>
      </div>

      <ArrowRightIcon
        className="
          h-5 w-5
          text-gray-600
          transition
          group-hover:translate-x-1
          group-hover:text-cyan-400
        "
      />
    </a>
  );
}