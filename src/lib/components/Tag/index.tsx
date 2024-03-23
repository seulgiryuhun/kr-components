import classNames from 'classnames';
import { TagProps } from './type';
import styles from './index.module.scss';

export const Tag = ({ className, children, ...props }: TagProps) => {
  return (
    <span className={classNames(className, styles['tag'])} {...props}>
      {children}
    </span>
  );
};
