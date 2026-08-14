import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { saveUser } from "../local/LocalStorageUser";

export default function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [interest, setInterests] = useState([]);
  const [newsletter, setNewsletter] = useState(false);

  const handleInterestChange = (category) => {
    setInterests((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter valid email");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters");
      return;
    }

    setError("");

    const user = {
      name: name.trim(),
      email: email.trim(),
      password,
      interest,
      newsletter,
    };

    saveUser(user);

    setName("");
    setEmail("");
    setPassword("");
    setInterests([]);
    setNewsletter(false);

    console.log("User saved:", user);

    navigate("/login");
  };

  return (
    <>
      {/* Top Navigation */}

      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">

          <NavLink
            to="/"
            className="font-headline-md text-headline-md font-bold text-primary tracking-tighter"
          >
            Vogue &amp; Valour
          </NavLink>

          <NavLink
            to="/login"
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
          >
            Sign In
          </NavLink>

        </div>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row pt-20">

        {/* Editorial Image Section */}

        <section className="hidden lg:block lg:w-5/12 h-[calc(100vh-80px)] sticky top-20 overflow-hidden bg-surface-container">

          <div className="w-full h-full relative">

            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
              data-alt="A high-fashion editorial portrait of a sophisticated model wearing a minimalist structured charcoal wool coat. The setting is a bright, high-contrast architectural space with sharp geometric shadows and clean white walls. The lighting is crisp and editorial, highlighting the texture of the fabric. The overall mood is exclusive, prestigious, and modern, aligning with a premium digital magazine aesthetic."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClTt6wbYge6qCA6K4tG-ivq4hXId0EqsbVU9JddVsiVL26SQK7Ds05KXblkcOAtW3OQNJNJM8HmcPhcgVNMrYn3KxTznTdLN0utugaYbNwMcs0roeyxENkZmUmXD5LYih4j7Hk2IjwYvDbLw-Vz2aCiVcuUoBjqRh-dRTHj8pW2XG507KrvnM3WI1xynoiWYyr_gAlfWQnzNfYuwO-usyNoiRQWYRNgX_vh5CnfJ0K9M09wY0ZvNhS')",
              }}
            />

            <div className="absolute inset-0 bg-primary/5" />

            <div className="absolute bottom-12 left-12 max-w-sm">

              <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest leading-none mb-4">
                The Vogue Circle
              </h2>

              <p className="font-body-lg text-surface-container-lowest opacity-90">
                Access curated collections, private sales, and the pulse of
                contemporary craft.
              </p>

            </div>

          </div>
        </section>

        {/* Form Section */}

        <section className="flex-grow px-margin-mobile md:px-margin-desktop py-section-gap flex items-center justify-center lg:justify-start lg:pl-24">

          <div className="w-full max-w-md reveal-element">

            {/* Intro */}

            <div className="mb-12">

              <span className="font-label-caps text-label-caps text-on-tertiary-container bg-tertiary-fixed-dim/20 px-3 py-1 mb-6 inline-block tracking-widest">
                ESTABLISHED 2024
              </span>

              <h1 className="font-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-4">
                Join the Circle
              </h1>

              <p className="font-body-md text-on-surface-variant">
                Membership is complimentary. Your journey into redefined
                luxury starts here.
              </p>

            </div>

            {/* Signup Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
              id="onboardingForm"
            >

              {/* Name */}

              <div className="space-y-2 input-underline">

                <label
                  htmlFor="name"
                  className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alexandre Vauthier"
                  required
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary placeholder:text-outline/40 font-body-md"
                />

              </div>

              {/* Email */}

              <div className="space-y-2 input-underline">

                <label
                  htmlFor="email"
                  className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="journal@voguevalour.com"
                  required
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary placeholder:text-outline/40 font-body-md"
                />

              </div>

              {/* Password */}

              <div className="space-y-2 input-underline">

                <label
                  htmlFor="password"
                  className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-widest"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-primary placeholder:text-outline/40 font-body-md"
                  />

                  <button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>

                </div>

              </div>

              {/* Interests */}

              <div className="pt-4 space-y-4">

                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Interests
                </p>

                <div className="flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={() => handleInterestChange("women")}
                    className={`px-6 py-2 border transition-all ${interest.includes("women") ? "border-primary bg-primary text-white" : "border-outline-variant hover:border-primary"}`}
                  >
                    WOMEN
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInterestChange("men")}
                    className={`px-6 py-2 border transition-all ${interest.includes("men") ? "border-primary bg-primary text-white" : "border-outline-variant hover:border-primary"}`}
                  >
                    MEN
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInterestChange("accessories")}
                    className={`px-6 py-2 border transition-all ${interest.includes("accessories") ? "border-primary bg-primary text-white" : "border-outline-variant hover:border-primary"}`}
                  >
                    ACCESSORIES
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInterestChange("lifestyle")}
                    className={`px-6 py-2 border transition-all ${interest.includes("lifestyle") ? "border-primary bg-primary text-white" : "border-outline-variant hover:border-primary"}`}
                  >
                    LIFESTYLE
                  </button>

                </div>
              </div>

              {/* Newsletter */}

              <div className="space-y-4 pt-4">

                <label className="flex items-start gap-3 cursor-pointer group">

                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-1 w-4 h-4 border-outline-variant rounded-none text-primary focus:ring-offset-0 focus:ring-0"
                  />

                  <span className="font-body-md text-label-sm text-on-surface-variant group-hover:text-primary transition-colors">
                    I wish to receive the 'Vogue &amp; Valour' digital journal
                    and exclusive invitations.
                  </span>

                </label>

              </div>

              {/* Action */}

              <div className="pt-8">

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-5 px-8 font-label-caps text-label-caps tracking-[0.2em] hover:bg-on-surface-variant transition-colors flex justify-between items-center group"
                >
                  <span>
                    CREATE ACCOUNT
                  </span>

                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>

                </button>

                <p className="mt-8 text-center font-label-sm text-label-sm text-on-surface-variant opacity-60">
                  By joining, you agree to our{" "}
                  <a
                    href="#"
                    className="underline hover:text-primary"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="underline hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>

              </div>

              {/* Error */}

              {error && (
                <p className="text-red-500">
                  {error}
                </p>
              )}

            </form>

            {/* Existing Account */}

            <div className="mt-8 text-center">

              <p className="text-sm text-on-surface-variant">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 mt-4 w-full bg-primary text-on-primary py-5 px-8 font-label-caps text-label-caps tracking-[0.2em] hover:bg-on-surface-variant transition-colors group"
              >
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  login
                </span>

                SIGN IN
              </Link>

            </div>

          </div>
        </section>
      </main>

      {/* Footer */}

      <footer className="w-full bg-surface border-t border-outline-variant/30">

        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-6">

          <span className="font-label-sm text-label-sm text-on-surface-variant opacity-60">
            © 2024 VOGUE &amp; VALOUR. ALL RIGHTS RESERVED.
          </span>

          <div className="flex gap-8">

            <a
              href="#"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              SUPPORT
            </a>

            <a
              href="#"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              SUSTAINABILITY
            </a>

            <a
              href="#"
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              INSTAGRAM
            </a>

          </div>

        </div>

      </footer>
    </>
  );
}