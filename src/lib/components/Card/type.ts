import { HTMLAttributes } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  category: string;
  date: string;
  link: string;
  description?: string;
}
