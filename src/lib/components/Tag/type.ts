import { HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLButtonElement> {
  color: string;
  textColor?: string;
  isReadOnly?: boolean;
}
