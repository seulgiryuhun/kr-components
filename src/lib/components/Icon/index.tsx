import { StyledIcon } from './styled';
import type { IconProps } from './type';

export const Icon = ({ type, size = 16 }: IconProps) => {
  return <StyledIcon type={type} size={size} data-testid="icon" />;
};
