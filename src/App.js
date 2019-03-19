import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store/configureStore';
import NavigationService from './utils/NavigationService';
import RootNav from './routes/rootNav';
import Colors from './style/color';
import Loader from './common/Loader';

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader loading/>} persistor={persistor}>
          <SafeAreaView
            style={styles.safeArea}
            forceInset={{ bottom: 'never', top: 'never' }}
          >
            <RootNav
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background
  }
});
