import { Bars, Nav, NavIcon, NavLink } from './NavBar.style';

export interface NavBarProps {
  toggle: () => void;
}

const NavBar = ({ toggle }: NavBarProps) => {
  return (
    <Nav>
      <NavLink to='/'>Books</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

export default NavBar;
