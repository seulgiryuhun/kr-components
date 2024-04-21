import type { ButtonHTMLAttributes } from 'react';
import type { IconType } from '../Icon/type';

export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ButtonColorType = 'blue' | 'gray' | 'peach' | 'green';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColorType;
  variant: ButtonVariant;
  width?: number;
  height?: number;
  icon?: IconType;
  iconSize?: number;
}
