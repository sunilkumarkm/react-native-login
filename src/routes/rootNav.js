import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../components/login/Login';
import AppStack from './appStack';

const MainNav = createSwitchNavigator(
  {
    Login,
    App: AppStack
  },
  {
    initialRouteName: 'Login'
  }
);

const RootNav = createAppContainer(MainNav);
export default RootNav;
