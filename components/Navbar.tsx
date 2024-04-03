import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit'>Humanity</p>
      </NavbarBrand>

      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
