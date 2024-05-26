import { DimmedWrapper } from '@/lib/components/Dimmed/styled';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export interface DimmedProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
}
export const Dimmed = ({ onClose, children, isOpen }: DimmedProps) => {
  return createPortal(
    <DimmedWrapper isOpen={isOpen} onClick={onClose} data-testid="dimmed-testid">
      <div onClick={e => e.stopPropagation()}>
        <section role="dialog">{children}</section>
      </div>
    </DimmedWrapper>,
    document.body,
  );
};
