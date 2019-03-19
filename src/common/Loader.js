import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Platform,
  ActivityIndicator
} from 'react-native';
import Colors from '../style/color';
import { RS } from '../utils/UtilityFunctions';

const Loader = props => {
  const { loading, modal } = props;
  return (
    <View style={styles.loader}>
      {modal ? (
        <Modal
          transparent
          animationType="none"
          visible={loading}
          onRequestClose={() => {
            console.log('close modal');
          }}
        >
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator
                animating={loading}
                color={Colors.primary}
                size={Platform.OS === 'ios' ? 'large' : RS(50)}
              />
            </View>
          </View>
        </Modal>
      ) : (
        <ActivityIndicator
          animating={loading}
          size={Platform.OS === 'ios' ? 'large' : RS(50)}
          color={Colors.primary}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  activityIndicatorWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;
