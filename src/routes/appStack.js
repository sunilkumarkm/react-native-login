
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Colors from '../style/color';
import { RS } from '../utils/UtilityFunctions';
import TabBarComponent from '../common/TabBar';
import LocationStack from './locationStack';
import ProfileStack from './profileStack';

const isAndroid = Platform.OS === 'android';

const routeConfiguration = {
  Location: { screen: LocationStack },
  Profile: { screen: ProfileStack },
};

const tabBarConfiguration = {
  tabBarComponent: TabBarComponent,
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarVisible: !(navigation.state.index > 0),
    tabBarIcon: ({ focused, tintColor }) => {
      const focus = Platform.OS === 'ios' ? focused : true;
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Complaints') {
        iconName = isAndroid ? 'md-document' : `ios-document${focus ? '' : '-outline'}`;
      } if (routeName === 'Profile') {
        iconName = isAndroid ? 'md-person' : `ios-person${focus ? '' : '-outline'}`;
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'rgba(255,255,255,0.7)',
    activeBackgroundColor: Colors.primary,
    labelStyle: {
      fontSize: RS(12),
    },
    style: {
      backgroundColor: Colors.primary,
    }
  },
};

const AppStack = createBottomTabNavigator(
  routeConfiguration,
  tabBarConfiguration,
);

export default AppStack;