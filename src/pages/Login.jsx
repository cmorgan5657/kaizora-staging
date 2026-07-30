import React, { useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Loader2 } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { AuthDivider, AuthError, GoogleButton, AppleButton } from "@/components/kaizora/AuthBits";
import PasswordInput from "@/components/kaizora/PasswordInput";
import { safeReturnTo } from "@/lib/authReturnTo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const returnTo = safeReturnTo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await base44.auth.loginViaEmailPassword(email, password);
      window.location.href = returnTo;
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => base44.auth.loginWithProvider("google", returnTo);
  const handleApple = () => base44.auth.loginWithProvider("apple", returnTo);

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to your Kaizora account"
      footer={
        <>
          Don't have an account?{" "}
          <Link
            to={"/register" + (returnTo !== "/" ? "?returnTo=" + encodeURIComponent(returnTo) : "")}
            className="text-[#ff3344] font-medium hover:underline"
          >
            Sign up
          </Link>
        </>
      }
    >
      <div className="space-y-3">
        <GoogleButton onClick={handleGoogle} />
        <AppleButton onClick={handleApple} />
      </div>

      <AuthDivider />

      {error && <AuthError>{error}</AuthError>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" aria-hidden="true" />
            <Input
              id="email"
              type="email"
              autoComplete="email"
              autoFocus
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
              Password
            </Label>
            <Link to="/forgot-password" className="text-xs text-[#ff3344] hover:underline">
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="••••••••"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="accent-[#ff3344] w-4 h-4 rounded"
          />
          Remember me
        </label>
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 bg-[#ff3344] hover:bg-[#ff4455] hover:shadow-[0_0_22px_rgba(255,51,68,0.5)] text-white font-medium border-0"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Logging in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}