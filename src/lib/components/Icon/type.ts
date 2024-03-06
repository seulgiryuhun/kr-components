export const TYPE = ['vite'];
export type IconType = (typeof TYPE)[number];

export interface IconProps {
  type: IconType;
  size: number;
}
