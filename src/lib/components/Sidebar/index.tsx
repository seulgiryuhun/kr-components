import { SidebarHeader, SidebarNav, SidebarNavItem, SidebarWrapper } from '@/lib/components/Sidebar/styled';
import { SidebarProps } from '@/lib/components/Sidebar/types';
import { useState } from 'react';
import X from '@/assets/svg/X.svg';

export const Sidebar = ({ links }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <SidebarWrapper>
      <SidebarHeader>
        {/*  IconBtn으로 대체 */}
        <img src={X} alt="X" />
      </SidebarHeader>
      <SidebarNav>
        <ul>
          {links.map((link, i) => (
            <SidebarNavItem key={i} isSelected={selectedItem === i} onClick={() => setSelectedItem(i)}>
              {link}
            </SidebarNavItem>
          ))}
        </ul>
      </SidebarNav>
    </SidebarWrapper>
  );
};
