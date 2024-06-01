import { SidebarHeader, SidebarNav, SidebarNavItem, SidebarWrapper } from '@/lib/components/Sidebar/styled';
import { SidebarProps } from '@/lib/components/Sidebar/types';
import { useState } from 'react';
import X from '@/assets/x_icon.svg';
import { Link } from 'react-router-dom';

export const Sidebar = ({ links, onXBtnClick, headerHeight = 0, isOpen, right = false }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  return (
    <SidebarWrapper isOpen={isOpen} headerHeight={headerHeight} right={right}>
      <SidebarHeader>
        <button onClick={onXBtnClick}>
          <img src={X} alt="X" />
        </button>
      </SidebarHeader>
      <SidebarNav>
        <ul>
          {links.map((link, i) => (
            <SidebarNavItem key={i} isSelected={selectedItem === i} onClick={() => setSelectedItem(i)}>
              {link.isExternal ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ) : (
                <Link to={link.href}>{link.name}</Link>
              )}
            </SidebarNavItem>
          ))}
        </ul>
      </SidebarNav>
    </SidebarWrapper>
  );
};
