import React, { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    // Reset messages
    setError("");
    setMessage("");

    // Empty
    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    // Length
    if (cleanEmail.length > 254) {
      setError("Email address is too long.");
      return;
    }

    // Email format
    if (!validateEmail(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Get subscribers
    const subscribers = JSON.parse(
      localStorage.getItem("Newsletter") || "[]"
    );

    // Duplicate
    if (subscribers.includes(cleanEmail)) {
      setError("This email is already subscribed.");
      return;
    }

    // Save
    subscribers.push(cleanEmail);

    localStorage.setItem(
      "Newsletter",
      JSON.stringify(subscribers)
    );

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-section-gap bg-primary text-on-primary">
      <div className="max-w-[1440px] mx-auto px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto reveal-on-scroll">

          <h2 className="font-headline-lg text-headline-lg mb-6">
            Join The Inner Circle
          </h2>

          <p className="font-body-lg text-body-lg mb-12 opacity-80">
            Be the first to receive exclusive collection drops, private
            sales, and fashion insights directly from our editors.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <div className="w-full md:w-96">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setMessage("");
                }}
                placeholder="YOUR EMAIL ADDRESS"
                autoComplete="email"
                className={`w-full bg-transparent border-b py-4
                  font-label-caps text-label-caps
                  focus:outline-none text-white
                  placeholder:text-white/50
                  ${
                    error
                      ? "border-red-400"
                      : "border-white"
                  }`}
              />

              {error && (
                <p className="text-red-300 text-sm text-left mt-2">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-white text-black
                px-12 py-4 font-label-caps text-label-caps
                hover:bg-surface-dim transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>

          {message && (
            <p className="mt-5 text-green-300 font-label-sm">
              {message}
            </p>
          )}

          <p className="mt-8 font-label-sm text-label-sm opacity-50">
            By subscribing, you agree to our Privacy Policy and
            Terms of Service.
          </p>

        </div>
      </div>
    </section>
  );
}

export default NewsLetter;