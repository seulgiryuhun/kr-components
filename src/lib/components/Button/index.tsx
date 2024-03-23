import type { ButtonProps } from './type';
import classNames from 'classnames';
import styles from './index.module.scss';

export const Button = ({ variant = 'filled', size = 'md', theme = 'gray', ...props }: ButtonProps) => {
  const { children, className } = props;

  return (
    <button className={classNames(styles.btn, styles[variant], styles[size], styles[theme], className)} {...props}>
      {children}
    </button>
  );
};
