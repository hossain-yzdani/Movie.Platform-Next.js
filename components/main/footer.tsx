"use client";

import Link from "next/link";
import { Home, Film, Tv, Trophy, Users, Mail, ArrowUp } from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black/80 backdrop-blur-md rounded-2xl m-2 lg:pr-20">
      {/* دکمه بازگشت به بالا */}
      {/* <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-blue-600 hover:bg-blue-500 transition-all duration-300 p-3 rounded-full shadow-lg"
        aria-label="بازگشت به بالا"
      >
        <ArrowUp size={20} />
      </button> */}

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* لوگو */}
          <div className="text-center md:text-right">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Qmovie</h2>
            <p className="text-sm text-white/50 leading-relaxed">
              بزرگترین مرجع تخصصی فیلم، سریال و انیمیشن. با ما لحظات ناب سینمایی
              را تجربه کنید.
            </p>
          </div>

          <div className="flex gap-20">
            {/* لینک‌های سریع */}
            <div className="text-right md:text-right">
              <h3 className="font-bold text-white mb-4 text-lg">
                لینک‌های سریع
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-400 transition flex items-center gap-2 justify-right md:justify-start"
                  >
                    <Home size={16} />
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/movies"
                    className="hover:text-blue-400 transition flex items-center gap-2 justify-right md:justify-start"
                  >
                    <Film size={16} />
                    فیلم‌ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className="hover:text-blue-400 transition flex items-center gap-2 justify-right md:justify-start"
                  >
                    <Tv size={16} />
                    سریال‌ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/top-rated"
                    className="hover:text-blue-400 transition flex items-center gap-2 justify-right md:justify-start"
                  >
                    <Trophy size={16} />
                    برترین‌ها
                  </Link>
                </li>
              </ul>
            </div>

            {/* درباره ما */}
            <div className="text-right md:text-right">
              <h3 className="font-bold text-white mb-4 text-lg">درباره ما</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition flex items-center gap-2 justify-right md:justify-start"
                  >
                    <Users size={16} />
                    درباره کیو مووی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-400 transition flex items-center gap-2 justify-right md:justify-start"
                  >
                    <Mail size={16} />
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-blue-400 transition block"
                  >
                    قوانین و مقررات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-blue-400 transition block"
                  >
                    حریم خصوصی
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-white mb-4 text-lg">
              ما را دنبال کنید
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="bg-white/10 hover:bg-pink-600 p-3 rounded-full transition-all"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-sky-600 p-3 rounded-full transition-all"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-red-600 p-3 rounded-full transition-all"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-blue-600 p-3 rounded-full transition-all"
              >
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          <p>© {new Date().getFullYear()} Qmovie. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
