import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarLink } from './SideBar.style';

export interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideBar = ({ isOpen, toggle }: SideBarProps) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to='/'>Books</SideBarLink>
        <SideBarLink to='/add-book'>Add Book</SideBarLink>
        <SideBarLink to='/about'>About App</SideBarLink>
      </SideBarMenu>
    </SideBarContainer>
  );
};

export default SideBar;
