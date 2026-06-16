// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-black via-[#0a0a0f] to-black border-t border-yellow-400/10 mt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - CTA */}
        <div className="text-center mb-12 pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
            </span>
            <span className="text-yellow-400 text-sm font-medium tracking-wider">
              JOIN 10,000+ MOVIE LOVERS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to dive into the
            <span className="bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {" "}
              world of cinema
            </span>
            ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Subscribe to our newsletter and never miss a movie review, trailer,
            or exclusive content.
          </p>
          <form className="max-w-md mx-auto mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-linear-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95 group"
            >
              <span className="flex items-center gap-2">
                Subscribe
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 group"
            >
              <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:shadow-yellow-400/40 transition-all duration-300 group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v12H4V6zm1 1v10h14V7H5zm2 2h10v6H7V9zm1 1v4h8v-4H8z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">
                K<span className="text-yellow-400">.</span>Movie
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your ultimate destination for discovering, watching, and reviewing
              the best movies ever made.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {["4K", "HD", "Top Rated"].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-yellow-400 rounded-full" />
              Explore
            </h4>
            <ul className="space-y-3">
              {["Home", "Movies", "Genres", "Watchlist"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-yellow-400 rounded-full" />
              Support
            </h4>
            <ul className="space-y-3">
              {["About Us", "Contact", "FAQ", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-yellow-400 rounded-full" />
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  label: "Instagram",
                  color: "hover:bg-pink-500/20 hover:text-pink-400",
                },
                {
                  label: "Twitter",
                  color: "hover:bg-blue-400/20 hover:text-blue-400",
                },
                {
                  label: "YouTube",
                  color: "hover:bg-red-500/20 hover:text-red-400",
                },
                {
                  label: "Telegram",
                  color: "hover:bg-blue-500/20 hover:text-blue-400",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className={`flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-gray-400 text-xs transition-all duration-300 ${social.color}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Stats */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Movies", value: "10K+" },
              { label: "Users", value: "50K+" },
              { label: "Reviews", value: "100K+" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold text-sm">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
            >
              Cookies
            </Link>
            <span className="text-gray-600 text-xs flex items-center gap-1.5">
              Made with <span className="text-red-400">♥</span> by
              <span className="text-white/80 font-medium">K.Movie</span>
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} K.Movie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
