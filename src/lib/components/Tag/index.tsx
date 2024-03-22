import classNames from 'classnames';
import { TagProps } from './type';
import styles from './index.module.scss';

export const Tag = ({ onClick, className, children, ...props }: TagProps) => {
  return (
    <button className={classNames(className, styles['tag'])} {...props}>
      {children}
    </button>
  );
};
