import type { ButtonHTMLAttributes } from 'react';
import type { IconType } from '../Icon/type';

export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type Theme = 'blue' | 'gray' | 'peach';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  iconSize?: number;
  label?: string;
}
