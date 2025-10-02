import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen flex items-center">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-6 justify-center text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-purple-900 leading-snug">
            Shorten URLs with Ease and Confidence
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-purple-800">
            BitLinks delivers a fast, reliable, and privacy-first URL shortening experience. Unlike others, we never track your activity or ask for unnecessary details. Simplify your links while maintaining security and professionalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/generate">
              <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full shadow hover:bg-purple-600 transition w-full sm:w-auto">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="px-6 py-3 border border-purple-500 text-purple-700 font-semibold rounded-full shadow hover:bg-purple-200 transition w-full sm:w-auto">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="flex justify-center items-center">
          <Image
            src="/vector.png"
            alt="Illustration of URL shortening"
            width={500}
            height={500}
            className="mix-blend-multiply object-contain rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />
        </div>

      </section>
    </main>
  );
}
