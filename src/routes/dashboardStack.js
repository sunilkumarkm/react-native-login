import { createStackNavigator } from 'react-navigation';
import Colors from '../style/color';
// Screens
import Dashboard from '../components/Dashboard';

const routeConfiguration = {
  Dashboard: { screen: Dashboard }
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Dashboard',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: '#F5F5F5',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center'
    }
  }
};

const DashboardStack = createStackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);

export default DashboardStack;
