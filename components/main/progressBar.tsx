"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Nprogress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
});

export default function ProgressBar () {
  const pathname = usePathname();

  useEffect(() => {
    Nprogress.start();
    Nprogress.done();
  }, [pathname]);

  return null;
};
