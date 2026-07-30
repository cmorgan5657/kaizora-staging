import React from "react";
import GoogleIcon from "@/components/GoogleIcon";

export function GoogleButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-11 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#ff3344]/50 hover:shadow-[0_0_14px_rgba(255,51,68,0.35)] transition flex items-center justify-center gap-2 text-sm font-medium text-white"
    >
      <GoogleIcon className="w-4 h-4" />
      Continue with Google
    </button>
  );
}

export function AppleButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-11 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#ff3344]/50 hover:shadow-[0_0_14px_rgba(255,51,68,0.35)] transition flex items-center justify-center gap-2 text-sm font-medium text-white"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.78 1.3 10.33.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.44 1.39-2.84 1.41-2.91-.03-.01-2.71-1.04-2.74-4.14zM14.6 4.59c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z" />
      </svg>
      Continue with Apple
    </button>
  );
}

export function AuthDivider() {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10" />
      </div>
      <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
        <span className="bg-[#1b1b21] px-3 text-zinc-500">or</span>
      </div>
    </div>
  );
}

export function AuthError({ children }) {
  return (
    <div className="mb-4 flex items-start gap-2 rounded-xl border border-[#ff3344]/30 bg-[#ff3344]/10 p-3 text-sm text-[#ff8a99]">
      <span className="mt-0.5 h-4 w-1 rounded-full bg-[#ff3344] shrink-0" />
      <span>{children}</span>
    </div>
  );
}