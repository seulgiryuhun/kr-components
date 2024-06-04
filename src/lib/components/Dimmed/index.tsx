import { DimmedWrapper } from '@/lib/components/Dimmed/styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DimmedProps } from './type';

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
