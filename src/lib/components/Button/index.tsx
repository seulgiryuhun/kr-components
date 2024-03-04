import type { ButtonProps } from './type';
import classNames from 'classnames';
import styles from './index.module.scss';

export const Button = ({ label, variant = 'filled', size = 'md', theme = 'GRAY-50' }: ButtonProps) => {
  return <button className={classNames(styles.btn, styles[variant], styles[size], styles[theme])}>{label}</button>;
};
