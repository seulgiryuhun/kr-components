import { Icon } from '../Icon';
import { StyledButton } from './styled';
import { ButtonProps } from './type';

export const Button = ({
  variant = 'filled',
  color = 'gray',
  width = 100,
  height = 40,
  iconSize = 0,
  icon,
  ...props
}: ButtonProps) => {
  const { children } = props;

  return (
    <StyledButton color={color} variant={variant} width={width} height={height} {...props}>
      {icon && <Icon type={icon} size={iconSize} />}
      <span>{children}</span>
    </StyledButton>
  );
};
