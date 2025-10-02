"use client";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!url.trim()) {
      alert("Please enter a URL!");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), shorturl: shorturl.trim() }),
      });

      const result = await response.json();

      if (result.error) {
        alert(result.message);
        setLoading(false);
        return;
      }

      setGenerated(result.shortUrl); // ✅ Trust backend response
      setUrl("");
      setShortUrl("");

      alert(result.message);
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-900 text-center">
          Generate Your URLs
        </h1>

        <p className="text-purple-700 text-center text-sm sm:text-base">
          Create fast, secure, and customizable short links in seconds.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL"
            className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition shadow-sm w-full"
          />

          <input
            type="text"
            value={shorturl}
            onChange={(e) => setShortUrl(e.target.value)}
            placeholder="Preferred short URL text (optional)"
            className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:outline-none transition shadow-sm w-full"
          />

          <button
            onClick={generate}
            disabled={loading}
            className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl py-3 shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {generated && (
          <div className="mt-4 text-center">
            <span className="font-bold text-lg text-purple-900 block mb-2">
              Your Short Link:
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={generated}
              className="text-purple-700 underline break-all"
            >
              {generated}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
