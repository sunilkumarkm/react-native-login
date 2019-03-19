import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { RS } from '../utils/UtilityFunctions';
import Colors from '../style/color';

const HzButton = props => {
  return (
    <Button
      backgroundColor={props.bgColor || Colors.primary}
      textStyle={styles.btnTitle}
      borderRadius={2}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  btnTitle: {
    fontSize: RS(16),
    fontWeight: 'bold'
  }
});

export default HzButton;