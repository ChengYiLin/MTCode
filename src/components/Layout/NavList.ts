interface INavItem {
  title: string;
  path: string;
}

const NavMenu: INavItem[] = [
  { title: '首頁', path: '/' },
  { title: '部落格', path: '/Blog' },
];

export default NavMenu;
