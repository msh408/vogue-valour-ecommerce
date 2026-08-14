import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";

function Profile() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");

    return user ? JSON.parse(user) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">
            You are not logged in
          </h1>

          <Link
            to="/login"
            className="px-6 py-3 bg-primary text-white"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-surface pt-28 px-6 md:px-12">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CiUser size={32} />

            <span className="text-sm tracking-[0.2em] uppercase">
              My Account
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl text-primary">
            Welcome, {currentUser.name}
          </h1>

          <p className="mt-3 text-on-surface-variant">
            Manage your account and preferences.
          </p>
        </div>


        {/* Account Information */}
        <section className="border-t border-outline-variant py-8">

          <h2 className="text-xl mb-6">
            Account Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-xs tracking-widest text-on-surface-variant uppercase">
                Full Name
              </p>

              <p className="mt-2 text-lg">
                {currentUser.name}
              </p>
            </div>


            <div>
              <p className="text-xs tracking-widest text-on-surface-variant uppercase">
                Email
              </p>

              <p className="mt-2 text-lg">
                {currentUser.email}
              </p>
            </div>

          </div>

        </section>


        {/* Interests */}
        <section className="border-t border-outline-variant py-8">

          <h2 className="text-xl mb-6">
            Interests
          </h2>

          <div className="flex flex-wrap gap-3">

            {currentUser.interest?.map((item) => (
              <span key={item}
                className="px-5 py-2 border border-outline-variant text-sm tracking-widest"
              >
                {item}
              </span>
            ))}

          </div>

        </section>


        {/* Newsletter */}
        <section className="border-t border-outline-variant py-8">

          <h2 className="text-xl mb-4">
            Newsletter
          </h2>

          <p className="text-on-surface-variant">
            {currentUser.newsletter
              ? "You are subscribed to our newsletter."
              : "You are not subscribed to our newsletter."
            }
          </p>

        </section>


        {/* Actions */}
        <section className="border-t border-outline-variant py-8 flex gap-4">

          <button
            onClick={handleLogout}
            className="px-8 py-4 bg-primary text-on-primary tracking-widest text-sm"
          >
            LOGOUT
          </button>

          <Link
            to="/products"
            className="px-8 py-4 border border-primary text-primary tracking-widest text-sm"
          >
            CONTINUE SHOPPING
          </Link>

        </section>

      </div>

    </main>
  );
}

export default Profile;