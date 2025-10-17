'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CompanyLogoProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

/**
 * Component to display company/institution logos with automatic SVG/PNG fallback
 * Tries to load the image as-is first, then falls back gracefully on error
 */
export function CompanyLogo({ src, alt, size = 60, className = '' }: CompanyLogoProps) {
  const [imageError, setImageError] = useState(false);

  // If original image fails, don't render anything
  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-xs font-semibold">{alt.charAt(0).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded object-contain ${className}`}
      unoptimized
      onError={() => setImageError(true)}
    />
  );
}
