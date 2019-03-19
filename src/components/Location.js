import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RS } from '../utils/UtilityFunctions';
import Colors from '../style/color';

export default class Location extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Location'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Location</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '4%',
  },
  headerTitle: {
    fontSize: RS(24),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center'
  }
});
