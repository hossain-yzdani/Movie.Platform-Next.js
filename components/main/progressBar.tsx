"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";


export default function ProgressBar () {
  const pathname = usePathname();

  useEffect(() => {
    Nprogress.start();
    Nprogress.done();
  }, [pathname]);

  return null;
};
