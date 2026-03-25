"use client";

import Link from "next/link";

export default function HeroUI() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none">
      <div className="max-w-4xl text-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
          The Premier Web3 Media Infrastructure
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          Access 4M+ verified crypto traders across the CIS region — through a
          single, compliant gateway.
        </p>

        <div className="mt-8">
          <Link
            href="/media-kit"
            className="pointer-events-auto inline-flex px-6 py-3 rounded-xl bg-white text-black text-sm md:text-base font-medium hover:opacity-90 transition"
          >
            Request a Media Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
