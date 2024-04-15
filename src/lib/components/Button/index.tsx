import { Icon } from '../Icon';
import { Button } from './styled';
import { ButtonProps } from './type';

export const DefaultButton = ({
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
    <Button color={color} variant={variant} width={width} height={height} {...props}>
      {icon && <Icon type={icon} size={iconSize} />}
      <span>{children}</span>
    </Button>
  );
};
