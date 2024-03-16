import type { ButtonProps } from './type';
import classNames from 'classnames';
import styles from './index.module.scss';
import { Icon } from '../Icon';

export const Button = ({ label, variant = 'filled', size = 'md', theme = 'GRAY-50', icon, iconSize = 0 }: ButtonProps) => {
  return (
    <button 
      className={classNames(styles.btn, styles[variant], styles[size], styles[theme])}
      type='button'
    >
      {
        icon && <Icon type={icon} size={iconSize}/>
      }
      <span>
        {label}
      </span>
    </button>
    )
};
