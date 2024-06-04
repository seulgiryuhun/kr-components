import { PropsWithChildren } from 'react';

export interface DimmedProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
}
