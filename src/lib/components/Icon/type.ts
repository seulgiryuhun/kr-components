export const ICON_TYPE = ['vite', 'x_icon', 'hamburger_icon'] as const;
export type IconType = (typeof ICON_TYPE)[number];

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  type: IconType;
  size: number;
}
