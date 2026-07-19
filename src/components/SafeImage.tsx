"use client";

import { useState } from "react";
import Image from "next/image";

type SafeImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholderColor?: string;
};

/**
 * Next/Image-wrapper die bij ontbrekende of kapotte afbeeldingen
 * een nette gekleurde placeholder toont i.p.v. te crashen.
 * Bij fill: altijd een position:relative wrapper zodat de afbeelding
 * binnen de container blijft, ook als Tailwind CSS nog niet geladen is.
 */
export function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  placeholderColor = "#c9b8e0",
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center ${fill ? "absolute inset-0" : ""} ${className}`}
        style={{
          background: `linear-gradient(135deg, ${placeholderColor} 0%, #f2b8c6 50%, #7ec8c0 100%)`,
          width: fill ? undefined : width,
          height: fill ? undefined : height,
          minHeight: fill ? undefined : height ?? 200,
        }}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center text-sm font-medium text-white/90 drop-shadow-sm">
          {alt}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <div className="relative h-full w-full" style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes={sizes}
          priority={priority}
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
