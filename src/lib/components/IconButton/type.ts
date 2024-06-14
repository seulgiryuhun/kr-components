import { IconProps } from '@/lib/components/Icon/type';

export interface IconButtonProps extends IconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
