import { RouteNamesEnum } from 'localConstants';
import { Dashboard, Disclaimer, Home } from 'pages';
import Staking from '../pages/Staking/Staking';
import { RouteType } from 'types';

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home
  },
  {
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard
  },
  {
    path: RouteNamesEnum.disclaimer,
    title: 'Disclaimer',
    component: Disclaimer
  },
  {
    path: RouteNamesEnum.staking,
    title: 'Staking',
    component: Staking
  }
];
