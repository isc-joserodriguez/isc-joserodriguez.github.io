import { Github, Linkedin, Mail, Trophy, type LucideIcon } from 'lucide-react';

/**
 * Mapeo de iconKey a componentes de Lucide
 * Solo para iconos sociales y especiales que no tienen SVG en /public/images/icons/
 * Los iconos de tecnologías se cargan como SVG desde /public/images/icons/{iconKey}.svg
 */
export const socialIconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  email: Mail,
  hackerrank: Trophy,
};

/**
 * Obtiene el componente de ícono social correspondiente a un iconKey
 * @param key - La clave del ícono (ej: 'linkedin', 'github')
 * @returns El componente de ícono de Lucide o undefined si no existe
 */
export function getSocialIcon(key: string): LucideIcon | undefined {
  return socialIconMap[key.toLowerCase()];
}

/**
 * Verifica si existe un ícono social para la clave dada
 * @param key - La clave del ícono
 * @returns true si existe el ícono social
 */
export function hasSocialIcon(key: string): boolean {
  return key.toLowerCase() in socialIconMap;
}
