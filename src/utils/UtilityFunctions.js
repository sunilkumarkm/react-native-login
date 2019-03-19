import {
  Dimensions,
  Platform,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
/**
 * Get Responsive width, height based on device size
 *
 * @param {number} size
 * @returns {number}
 */

// Base sizes are based on standard ~5" screen mobile device
const BASE_WIDTH = 350;
const BASE_HEIGHT = 680;
const { width, height } = Dimensions.get('window');

// Responsive width, height and size
const RW = size => (width / BASE_WIDTH) * size;
const RH = size => (height / BASE_HEIGHT) * size;
const RS = (size, factor = 0.5) => size + (RW(size) - size) * factor;

export { RW, RH, RS };

// Platform specific touchable element
export const TouchableNative =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

// Error alert
export const NotificationAlert = (title, msg) => {
  const alertTimeout = Platform.OS === 'ios' ? 200 : 0;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Alert.alert(
        title,
        msg,
        [
          {
            text: 'OK',
            onPress: () => {
              resolve('OK');
            }
          }
        ],
        { cancelable: false }
      );
    }, alertTimeout);
  });
};
