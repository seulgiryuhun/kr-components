export const ICON_TYPE = ['vite'] as const;
export type IconType = (typeof ICON_TYPE)[number];

export interface IconProps {
  type: IconType;
  size: number;
}
