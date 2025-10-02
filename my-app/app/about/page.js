import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col gap-6 sm:gap-8">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 text-center">
          About BitLink
        </h1>

        {/* Description */}
        <p className="text-purple-700 text-center text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          BitLink is a fast, secure, and customizable URL shortener that simplifies your links 
          while keeping your data private. Our platform ensures seamless sharing, tracking, 
          and management of your links, whether for personal use or professional projects.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
          
          <div className="p-4 sm:p-6 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition cursor-default">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Fast & Reliable</h2>
            <p className="text-purple-700 text-sm sm:text-base">
              Shorten your URLs in seconds with instant redirection for every link.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-pink-50 rounded-2xl shadow hover:shadow-lg transition cursor-default">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Secure & Private</h2>
            <p className="text-purple-700 text-sm sm:text-base">
              We never track your activity or share your data with third parties.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition cursor-default">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Custom Short Links</h2>
            <p className="text-purple-700 text-sm sm:text-base">
              Choose your own short URL text or generate random unique slugs automatically.
            </p>
          </div>

          <div className="p-4 sm:p-6 bg-pink-50 rounded-2xl shadow hover:shadow-lg transition cursor-default">
            <h2 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Cross-Platform</h2>
            <p className="text-purple-700 text-sm sm:text-base">
              Works seamlessly on desktop, mobile, and in-app browsers like WhatsApp or Instagram.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-purple-600 mt-4 sm:mt-6 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} BitLink. All rights reserved.
        </p>

      </div>
    </div>
  );
}
