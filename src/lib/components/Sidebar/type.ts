export interface SidebarProps {
  onXBtnClick: () => void;
  links: { isExternal: boolean; name: string; href: string }[];
  right?: boolean;
  headerHeight?: number;
  isOpen: boolean;
}
