import React from 'react';

export default function GlowDot() {
  return (
    <div className="
      w-1.5 h-1.5 rounded-full
      bg-[rgba(255,255,255,0.7)]
      shadow-[inset_0_0_10px_2px_rgba(0,255,182,0.5),0_0_10px_2px_rgba(0,255,135,0.3)]
      animate-pulse-dot
    " />
  );
}
