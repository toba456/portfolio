"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileImage() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center">
        <span className="text-2xl font-bold text-[#f97316]">TM</span>
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt="Tobias Marroquin"
      fill
      className="object-cover"
      priority
      onError={() => setError(true)}
    />
  );
}
