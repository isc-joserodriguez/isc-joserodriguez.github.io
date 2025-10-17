'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TechIconProps {
  iconKey: string;
  label: string;
  size?: number;
}

/**
 * Componente que intenta cargar iconos de tecnología
 * Primero intenta SVG, si falla intenta PNG
 */
export function TechIcon({ iconKey, label, size = 16 }: TechIconProps) {
  const [imageError, setImageError] = useState(false);
  const [imageFormat, setImageFormat] = useState<'svg' | 'png'>('svg');

  const handleError = () => {
    if (imageFormat === 'svg') {
      // Si SVG falla, intenta PNG
      setImageFormat('png');
      setImageError(false);
    } else {
      // Si ambos fallan, marca error
      setImageError(true);
    }
  };

  // Si ambos formatos fallan, no mostrar nada
  if (imageError) {
    return null;
  }

  return (
    <Image
      src={`/images/icons/${iconKey}.${imageFormat}`}
      alt={label}
      width={size}
      height={size}
      className="shrink-0"
      onError={handleError}
      unoptimized
    />
  );
}
