"use client";

import Link from "next/link";

export default function HeroUI() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* text readability layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/70 md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35 hidden md:block" />

      <div className="flex h-full flex-col items-center justify-start px-5 pt-28 text-center sm:px-6 sm:pt-32 md:justify-center md:px-6 md:pt-0">
        <div className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-4xl">
          <h1 className="text-white text-[2rem] leading-[0.94] tracking-[-0.04em] font-semibold sm:text-[2.6rem] md:text-6xl lg:text-7xl">
            The Premier Web3
            <br className="md:hidden" /> Media Infrastructure
          </h1>

          <p className="mx-auto mt-4 max-w-[300px] text-[14px] leading-6 text-gray-300 sm:mt-5 sm:max-w-[360px] sm:text-[15px] md:mt-6 md:max-w-2xl md:text-base lg:text-lg">
            Access 20M+ Crypto Trading and High-Intent tech audience across the
            CIS region — through a single, compliant gateway.
          </p>

          <div className="mt-6 sm:mt-7 md:mt-8">
            <Link
              href="/media-kit"
              className="pointer-events-auto inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-black transition hover:opacity-90 sm:max-w-[280px] sm:text-base md:min-h-0 md:w-auto md:max-w-none"
            >
              Request a Media Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
