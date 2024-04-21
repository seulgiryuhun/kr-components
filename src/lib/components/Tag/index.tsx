import { TagProps } from './type';
import { StyledTag } from './styled';
import { useState } from 'react';

export const Tag = ({ children, color, isReadOnly, textColor = 'white', onClick, ...props }: TagProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleTagClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    setIsActive(!isActive);
  };

  return (
    <StyledTag
      color={color}
      textColor={textColor}
      onClick={handleTagClick}
      isActive={isActive}
      disabled={isReadOnly}
      {...props}
    >
      {children}
    </StyledTag>
  );
};
