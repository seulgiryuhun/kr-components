export interface SidebarProps {
  onXBtnClick: () => void;
  links: JSX.Element[];
  right?: boolean;
  headerHeight?: number;
  isOpen: boolean;
}
