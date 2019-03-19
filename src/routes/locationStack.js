import { createStackNavigator } from 'react-navigation';
import Colors from '../style/color';
// Screens
import Location from '../components/Location';

const routeConfiguration = {
  Location: { screen: Location }
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRouteName: 'Location',
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

const LocationStack = createStackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);

export default LocationStack;
