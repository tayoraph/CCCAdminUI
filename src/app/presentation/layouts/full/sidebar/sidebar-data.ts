import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: 'app/dashboard',
  },
  {
    navCap: 'Doctrine',
  },
  {
    displayName: 'Dap',
    iconName: 'layout-dashboard',
    route: 'app/dap/dapAudio',
  },
  // {
  //   navCap: 'Ui Components',
  // },
  // {
  //   displayName: 'Badge',
  //   iconName: 'rosette',
  //   route: 'app/ui-components/badge',
  // },
  // {
  //   displayName: 'Chips',
  //   iconName: 'poker-chip',
  //   route: 'app/ui-components/chips',
  // },
  // {
  //   displayName: 'Lists',
  //   iconName: 'list',
  //   route: 'app/ui-components/lists',
  // },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   route: 'app/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: 'app/ui-components/tooltips',
  // },
  // {
  //   navCap: 'Auth',
  // },
  // {
  //   displayName: 'Login',
  //   iconName: 'lock',
  //   route: '/authentication/login',
  // },
  // {
  //   displayName: 'Register',
  //   iconName: 'user-plus',
  //   route: '/authentication/register',
  // },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: 'app/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: 'app/extra/sample-page',
  // },
];

export const navItemsOpen: NavItem[] = [
  {
    navCap: 'Doctrine',
  },
  {
    displayName: 'Dap',
    iconName: 'layout-dashboard',
    route: 'app/dap/dapAudio',
  }
];