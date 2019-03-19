import { createStackNavigator } from 'react-navigation';
import Colors from '../style/color';
// Screens
import Profile from '../components/Profile';

const routeConfiguration = {
  Profile: { screen: Profile }
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Profile',
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

const ProfileStack = createStackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);

export default ProfileStack;
