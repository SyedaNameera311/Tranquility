import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#020617] px-6 py-16 sm:py-24">

      {/* Background glow */}

      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div className="hidden lg:block">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <ShieldCheckIcon className="h-5 w-5" />
            Trusted Digital Experiences
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white xl:text-6xl">
            Welcome to
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trust & Tranquility
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Create your account and become part of a digital space
            designed around trust, security and new experiences.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Digital Trust
                </h3>

                <p className="text-sm text-gray-500">
                  Secure and reliable digital solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                ✓
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  New Experiences
                </h3>

                <p className="text-sm text-gray-500">
                  Explore creative and modern web experiences.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* SIGNUP CARD */}

        <div className="mx-auto w-full max-w-md">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

            {/* Header */}

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">

                <UserIcon className="h-8 w-8 text-cyan-400" />

              </div>

              <h2 className="text-3xl font-bold text-white">
                Create Account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Join Trust & Tranquility today
              </p>

            </div>

            <form className="mt-8 space-y-5">

              {/* NAME */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <div className="relative">

                  <UserIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />

                </div>
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <div className="relative">

                  <EnvelopeIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />

                </div>
              </div>

              {/* PASSWORD */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Password
                </label>

                <div className="relative">

                  <LockClosedIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-20 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-cyan-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* TERMS */}

              <label className="flex gap-3 text-sm text-gray-500">

                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                />

                <span>
                  I agree to the{" "}
                  <span className="text-cyan-400">
                    Terms & Privacy Policy
                  </span>
                </span>

              </label>

              {/* BUTTON */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.01] hover:from-cyan-400 hover:to-blue-500"
              >
                Create Account

                <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

            </form>

            {/* LOGIN */}

            <p className="mt-7 text-center text-sm text-gray-500">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Sign in
              </Link>

            </p>

          </div>

        </div>

      </div>
    </div>
  );
}