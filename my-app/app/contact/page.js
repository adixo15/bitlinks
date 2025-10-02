"use client"
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call or email integration can be added here
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col gap-6 sm:gap-8">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 text-center">
          Contact Us
        </h1>

        {/* Description */}
        <p className="text-purple-700 text-center text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          Have a question, feedback, or suggestion? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-semibold text-sm sm:text-base">
            Your message has been submitted successfully!
          </div>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition shadow-sm w-full text-sm sm:text-base"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition shadow-sm w-full text-sm sm:text-base"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            rows={5}
            className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition shadow-sm w-full text-sm sm:text-base resize-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl py-3 shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-purple-600 text-xs sm:text-sm mt-6">
          &copy; {new Date().getFullYear()} BitLink. All rights reserved.
        </div>
      </div>
    </div>
  );
}
