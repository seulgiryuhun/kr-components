import styles from './index.module.scss';
import type { IconProps, IconType } from './type';

export const Icon = ({ type, size = 16 }: IconProps) => {
  const makeIconUrl = (type: IconType) => {
    return `/${type}.svg`;
  };

  return (
    <i
      className={styles.icon}
      data-testid="icon-button"
      style={{ backgroundImage: `url(${makeIconUrl(type)})`, width: size, height: size }}
    />
  );
};
