import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../local/LocalStorageUser";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmitChange = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    const users = getUsers();

    const user = users.find(
      (user) =>
        user.email === email.trim() &&
        user.password === password
    );

    if (!user) {
      setError("Your email or password is incorrect");
      return;
    }

    setError("");

    console.log("Logged in user:", user);

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    navigate("/products");
  };

  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row">

        {/* Left Section */}

        <section className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-20 py-12 z-10 bg-surface">

          <div className="max-w-[440px] w-full space-y-10 fade-in">

            {/* Brand */}

            <div className="text-center md:text-left mb-12">

              <h1 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">
                Vogue &amp; Valour
              </h1>

              <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 tracking-[0.2em]">
                PRESTIGE AUTHENTICITY STYLE
              </p>

            </div>

            {/* Welcome */}

            <div className="space-y-2">

              <h2 className="font-headline-md text-headline-md text-primary">
                Welcome Back
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Access your curated selection and personal archive.
              </p>

            </div>

            {/* Form */}

            <form
              className="space-y-8"
              onSubmit={handleSubmitChange}
            >

              {/* Email Field */}

              <div className="space-y-2 group">

                <label
                  htmlFor="email"
                  className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors"
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent py-4 font-body-md text-body-md form-input-border focus:outline-none"
                />

              </div>

              {/* Password Field */}

              <div className="space-y-2 group">

                <div className="flex justify-between items-center">

                  <label
                    htmlFor="password"
                    className="font-label-caps text-label-caps text-on-surface-variant group-focus-within:text-primary transition-colors"
                  >
                    PASSWORD
                  </label>

                  <Link
                    to="/forgot-password"
                    className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                  >
                    FORGOT?
                  </Link>

                </div>

                <div className="relative">

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-transparent py-4 font-body-md text-body-md form-input-border focus:outline-none"
                  />

                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>

                </div>

              </div>

              {/* Error */}

              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}

              {/* Submit */}

              <div className="pt-4 space-y-4">

                <button
                  type="submit"
                  className="w-full py-5 bg-primary text-on-primary font-label-caps text-label-caps hover:opacity-90 transition-opacity tracking-widest"
                >
                  SIGN IN
                </button>

              </div>

            </form>

            {/* Register */}

            <div className="text-center pt-8">

              <p className="font-body-md text-body-md text-on-surface-variant">
                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="text-primary font-semibold hover:underline underline-offset-4"
                >
                  Create Account
                </Link>
              </p>

            </div>

          </div>

          {/* Mobile Footer */}

          <div className="mt-auto pt-12 md:hidden">

            <p className="font-label-caps text-[10px] text-outline text-center">
              © 2024 VOGUE &amp; VALOUR. ALL RIGHTS RESERVED.
            </p>

          </div>

        </section>

        {/* Right Section */}

        <section className="hidden md:block md:w-1/2 relative overflow-hidden bg-surface-container">

          <div className="absolute inset-0 editorial-image-container">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw_I4qGS2-kIdXANT_MKG21USwLRfkxZ8gp-UkDDGmR_GpAHyLw3VimS6vvavW-rP1XA-9I2rDoz2ghn61LXC6-G1YWvRBmAjqLlC76QnbdVa37emXxtjCpghC8UXZP7E9o6U7IeIDAcKkDa4AS25m6RqpyHobBFHbTYoRPm2-aoAjZx7C3OUxD_MLssXcu0E-R94vS7urLzPi8Y2cX3qh7TN5tSr6ofGx4DKBKiM7Md8l4AVdiH_l"
              alt="High-fashion editorial portrait"
              data-alt="A cinematic, high-fashion editorial portrait of a sophisticated woman wearing a structural black wool coat against a minimalist architectural background with sharp shadows. The lighting is dramatic and high-contrast, emphasizing the clean lines and premium fabric textures. The overall mood is quiet luxury, elite, and authoritative, echoing a heritage fashion brand's aesthetic. Monochromatic palette with soft silver highlights."
              className="w-full h-full object-cover"
            />

          </div>

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/20" />

          {/* Branding Overlay */}

          <div className="absolute bottom-margin-desktop left-margin-desktop space-y-2 max-w-sm">

            <p className="font-headline-md text-white mix-blend-difference drop-shadow-sm italic">
              "Elegance is the only beauty that never fades."
            </p>

            <div className="h-1 w-12 bg-white mix-blend-difference" />

          </div>

          {/* Floating Decoration */}

          <div className="absolute top-1/2 right-12 -translate-y-1/2 rotate-90 origin-right">

            <p className="font-label-caps text-label-caps text-white/50 tracking-[0.5em] whitespace-nowrap">
              ESTABLISHED MCMXCIV • ARCHIVE COLLECTION
            </p>

          </div>

        </section>

      </main>

      {/* Global Footer */}

      <footer className="hidden md:block fixed bottom-4 left-20 z-20">

        <p className="font-label-caps text-[10px] text-outline tracking-widest">
          © 2024 VOGUE &amp; VALOUR. ALL RIGHTS RESERVED.
        </p>

      </footer>
    </>
  );
}