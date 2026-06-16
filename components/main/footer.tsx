// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 mt-20">
      <div className="container mx-auto px-6 lg:px-30">
        <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-blue-600">کیو</span>
              <span className="text-white/80">مووی</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs">
              مرجع تخصصی فیلم و سریال
            </p>
          </div>

          <div className="flex gap-8">
            <div className="space-y-2">
              <h4 className="text-blue-600 text-sm font-semibold tracking-wider">
                دسترسی
              </h4>
              <ul className="space-y-1 text-white/50 text-sm">
                <li>
                  <Link href="/" className="hover:text-blue-500 transition">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/movies"
                    className="hover:text-blue-500 transition"
                  >
                    فیلم‌ها
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className="hover:text-blue-500 transition"
                  >
                    سریال‌ها
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-blue-600 text-sm font-semibold tracking-wider">
                درباره
              </h4>
              <ul className="space-y-1 text-white/50 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-500 transition"
                  >
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-blue-500 transition"
                  >
                    حریم خصوصی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-blue-500 transition"
                  >
                    قوانین
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-600/40 hover:border-blue-600 bg-blue-600/5 hover:bg-blue-600/20 transition-all duration-300"
            >
              <span className="text-blue-500 group-hover:text-blue-400 text-sm font-medium">
                تماشا در کیو مووی
              </span>
              <svg
                className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center text-white/20 text-xs pt-8 mt-8 border-t border-white/5">
          <p>
            &copy; {new Date().getFullYear()} کیو مووی. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
