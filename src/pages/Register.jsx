import React, { useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus, Mail, Loader2 } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import AuthLayout from "@/components/AuthLayout";
import { AuthDivider, AuthError, GoogleButton, AppleButton } from "@/components/kaizora/AuthBits";
import PasswordInput from "@/components/kaizora/PasswordInput";
import { toast } from "@/components/ui/use-toast";
import { safeReturnTo } from "@/lib/authReturnTo";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpCode, setOtpCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!agreedTerms) {
      setError("You must agree to the Terms to continue");
      return;
    }
    setLoading(true);
    try {
      await base44.auth.register({ email, password });
      setShowOtp(true);
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await base44.auth.verifyOtp({ email, otpCode });
      if (result?.access_token) {
        base44.auth.setToken(result.access_token);
      }
      try {
        await base44.auth.updateMe({
          name: fullName,
          date_of_birth: dob || undefined,
          bio: bio || undefined,
          social_links: {
            website: website || undefined,
            twitter: twitter || undefined,
            instagram: instagram || undefined,
          },
          agreed_terms: true,
          agreed_terms_at: new Date().toISOString(),
        });
      } catch {
        // profile extras are best-effort; don't block login
      }
      window.location.href = safeReturnTo();
    } catch (err) {
      setError(err.message || "Invalid verification code");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    try {
      await base44.auth.resendOtp(email);
      toast({
        title: "Code sent",
        description: "Check your email for the new code.",
      });
    } catch (err) {
      setError(err.message || "Failed to resend code");
    }
  };

  const handleGoogle = () => base44.auth.loginWithProvider("google", safeReturnTo());
  const handleApple = () => base44.auth.loginWithProvider("apple", safeReturnTo());

  if (showOtp) {
    return (
      <AuthLayout icon={Mail} title="Verify your email" subtitle={`We sent a code to ${email}`}>
        {error && <AuthError>{error}</AuthError>}
        <div className="flex justify-center mb-6">
          <InputOTP
            maxLength={6}
            value={otpCode}
            onChange={setOtpCode}
            autoFocus
            autoComplete="one-time-code"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button
          className="w-full h-11 bg-[#ff3344] hover:bg-[#ff4455] hover:shadow-[0_0_22px_rgba(255,51,68,0.5)] text-white font-medium border-0"
          onClick={handleVerify}
          disabled={loading || otpCode.length < 6}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify"
          )}
        </Button>
        <p className="text-center text-sm text-zinc-400 mt-4">
          Didn't receive the code?{" "}
          <button onClick={handleResend} className="text-[#ff3344] font-medium hover:underline">
            Resend
          </button>
        </p>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      icon={UserPlus}
      title="Create Account"
      subtitle="Sign up to join the marketplace"
      footer={
        <>
          Already have an account?{" "}
          <Link
            to={"/login" + (safeReturnTo() !== "/" ? "?returnTo=" + encodeURIComponent(safeReturnTo()) : "")}
            className="text-[#ff3344] font-medium hover:underline"
          >
            Sign in
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
          <Label htmlFor="name" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            autoFocus
            placeholder="Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
            required
          />
        </div>
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
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Bio <span className="text-zinc-600 normal-case tracking-normal">(optional)</span>
          </Label>
          <Textarea
            id="bio"
            rows={3}
            placeholder="Tell the community about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30 resize-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Social Links <span className="text-zinc-600 normal-case tracking-normal">(optional)</span>
          </Label>
          <div className="space-y-2">
            <Input
              type="url"
              placeholder="Website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
            />
            <Input
              type="text"
              placeholder="X / Twitter handle"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
            />
            <Input
              type="text"
              placeholder="Instagram handle"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="h-11 bg-white/5 border-white/10 focus-visible:border-[#ff3344]/60 focus-visible:ring-[#ff3344]/30"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Password
          </Label>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="••••••••"
          />
          <p className="text-xs text-zinc-500">Must be at least 6 characters</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm" className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
            Confirm Password
          </Label>
          <PasswordInput
            id="confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="••••••••"
          />
        </div>
        <label className="flex items-start gap-2 text-sm text-zinc-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
            className="accent-[#ff3344] w-4 h-4 rounded mt-0.5"
            required
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-[#ff3344] hover:underline">Terms of Service</a> and{" "}
            <a href="#" className="text-[#ff3344] hover:underline">Privacy Policy</a>.
          </span>
        </label>
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 bg-[#ff3344] hover:bg-[#ff4455] hover:shadow-[0_0_22px_rgba(255,51,68,0.5)] text-white font-medium border-0"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Creating account...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}