import type { ButtonProps } from './type';
import classNames from 'classnames';
import styles from './index.module.scss';
import { Icon } from '../Icon';

export const Button = ({
  variant = 'filled',
  size = 'md',
  theme = 'gray',
  icon,
  iconSize = 0,
  ...props
}: ButtonProps) => {
  const { children, className } = props;

  return (
    <button
      className={classNames(styles.btn, styles[variant], styles[size], styles[theme], className)}
      type="button"
      {...props}
    >
      {icon && <Icon type={icon} size={iconSize} />}
      <span>{children}</span>
    </button>
  );
};
