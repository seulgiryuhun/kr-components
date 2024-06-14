import { Button } from '@/lib/components/Button';
import { HeaderWrapper } from '@/lib/components/Header/styled';
import { HeaderProps } from '@/lib/components/Header/type';

export const Header = ({ leftBtn }: HeaderProps) => {
  const { src, alt } = leftBtn;
  return (
    <HeaderWrapper>
      <Button>
        <img src={src} alt={alt} />
      </Button>

      <button></button>
    </HeaderWrapper>
  );
};
