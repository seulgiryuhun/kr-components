import classNames from 'classnames';
import { TagProps } from './type';
import styles from './index.module.scss';
import { MouseEventHandler, useState } from 'react';

export const Tag = ({ onClick, className, children, ...props }: TagProps) => {
  const [isOn, setIsOn] = useState(false);
  const handleClickTag: MouseEventHandler<HTMLButtonElement> = e => {
    setIsOn(!isOn);
    onClick?.(e);
  };
  return (
    <button
      className={classNames(className, styles['tag'], styles[`${isOn ? 'on' : 'off'}`])}
      onClick={handleClickTag}
      {...props}
    >
      {children}
    </button>
  );
};
