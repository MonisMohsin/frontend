import React from "react";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative h-[220px] w-full rounded-2xl overflow-hidden bg-[#F5B800] flex items-center">
      {/* Right circular blob */}
      <div className="absolute -right-8 -top-8 w-[300px] h-[300px] bg-[#F9CC4A] rounded-full" />

      {/* Faint lion watermark */}
      <div className="absolute left-[180px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img src="/lion.png" alt="" className="w-[220px]" />
      </div>

      {/* Player image */}
      <div className="absolute left-0 bottom-0 h-[115%] w-[200px] z-10">
        <Image
          src="/football-player.png"
          alt="Football Player"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-between w-full pl-[210px] pr-10">
        {/* Left: Team names + meta */}
        <div className="text-white">
          {/* BARCELONA with slashes */}
          <div className="flex items-center gap-3">
            <h1 className="text-[42px] font-black tracking-tight leading-none">
              BARCELONA
            </h1>
            <div className="flex flex-col gap-[3px] rotate-12 mb-1">
              <div className="w-9 h-[2.5px] bg-white rounded" />
              <div className="w-7 h-[2.5px] bg-white rounded" />
            </div>
          </div>

          {/* REAL MADRID */}
          <h1 className="text-[42px] font-black tracking-tight leading-none mt-1">
            REAL MADRID
          </h1>

          {/* Club logos + VS */}
          <div className="flex items-center gap-2 mt-3">
            <img
              src="/barca.png"
              alt="Barcelona"
              className="w-7 h-7 object-contain"
            />
            <span className="text-xs font-semibold opacity-80">vs</span>
            <img
              src="/madrid.png"
              alt="Real Madrid"
              className="w-7 h-7 object-contain"
            />
          </div>

          {/* Time + Location */}
          <div className="flex items-center gap-6 mt-3 text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={15} />
              <span>5:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={15} />
              <span>Spain</span>
            </div>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="text-right">
          <p className="text-white text-[26px] font-bold leading-tight">
            Up To $50
          </p>
          <p className="text-white text-[26px] font-bold leading-tight">
            Free Matched
          </p>
          <button className="mt-4 bg-white text-yellow-500 px-7 py-2.5 rounded-full font-semibold text-sm shadow flex items-center gap-2 ml-auto">
            Join Now <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
