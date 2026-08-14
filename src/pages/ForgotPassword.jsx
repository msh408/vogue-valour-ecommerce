import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../local/LocalStorageUser";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotChange = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email");
      return;
    }

    const users = getUsers();

    const user = users.find(
      (user) => user.email === email.trim()
    );

    if (!user) {
      setMessage("No account found with this email");
      return;
    }

    console.log("User found:", user);

    setMessage("Email found. You can reset your password.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 sm:px-6 lg:px-8">

      <div className="w-full max-w-md">

        {/* Header */}

        <div className="text-center mb-10">

          <span className="inline-block mb-5 px-3 py-1 bg-tertiary-fixed-dim/20 text-on-tertiary-container text-xs tracking-[0.2em] uppercase">
            Account Recovery
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold text-primary">
            Forgot Password?
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-on-surface-variant max-w-sm mx-auto">
            Enter the email address associated with your account and we'll help you recover access.
          </p>

        </div>

        {/* Card */}

        <div className="bg-surface-container-low p-6 sm:p-8 lg:p-10 border border-outline-variant/40">

          <form
            onSubmit={handleForgotChange}
            className="space-y-7"
          >

            {/* Email */}

            <div className="space-y-2">

              <label
                htmlFor="email"
                className="block text-xs sm:text-sm tracking-[0.15em] uppercase text-on-surface-variant"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 text-primary text-sm sm:text-base outline-none transition-colors placeholder:text-outline/40 focus:border-primary"
              />

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full py-4 sm:py-5 px-6 bg-primary text-on-primary text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:opacity-90 active:scale-[0.99]"
            >
              Reset Password
            </button>

            {/* Message */}

            {message && (
              <div className="p-4 bg-surface-container border border-outline-variant/50 text-sm text-on-surface-variant leading-relaxed">
                {message}
              </div>
            )}

          </form>

          {/* Back to Login */}

          <div className="mt-8 pt-6 border-t border-outline-variant/30 text-center">

            <Link
              to="/login"
              className="text-xs sm:text-sm tracking-[0.15em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              ← Back to Sign In
            </Link>

          </div>

        </div>

        {/* Footer */}

        <p className="mt-8 text-center text-xs text-on-surface-variant/60">
          If you have an account with Vogue &amp; Valour, we'll help you regain access.
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;