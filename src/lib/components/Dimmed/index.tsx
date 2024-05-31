import { DimmedWrapper } from '@/lib/components/Dimmed/styled';
import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface DimmedProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
}
export const Dimmed = ({ onClose, children, isOpen }: DimmedProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return createPortal(
    <DimmedWrapper isOpen={isOpen} onClick={onClose} data-testid="dimmed-testid">
      <article role="dialog" onClick={e => e.stopPropagation()}>
        {children}
      </article>
    </DimmedWrapper>,
    document.body,
  );
};
