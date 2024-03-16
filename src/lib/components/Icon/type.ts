export const TYPE = ['vite'];
export type IconType = (typeof TYPE)[number];

export interface IconProps extends React.HTMLAttributes<HTMLElement>{
  type: IconType;
  size: number;
}
