import { Icon } from '@/lib/components/Icon';
import { IconButtonProps } from '@/lib/components/IconButton/type';

export const IconButton = ({ onClick, type, size }: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon type={type} size={size} />
    </button>
  );
};
