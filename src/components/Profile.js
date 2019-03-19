import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RS } from '../utils/UtilityFunctions';
import Colors from '../style/color';
import HzButton from '../common/HzButton';
import { actions, getAuthState } from '../reducers/login';

class Profile extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Profile'
  };

  logout = () => {
    Alert.alert(
      'Log out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Log out',
          onPress: () => {
            this.props.logout();
            this.props.navigation.navigate('Login');
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { user } = this.props.profile;
    return (
      <Card title="User Details" containerStyle={styles.container}>
        <View style={styles.textHolder}>
          <Text style={styles.item}>Name</Text>
          <Text style={styles.item}>{user.name}</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.item}>Email</Text>
          <Text style={styles.item}>{user.email}</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.item}>Role</Text>
          <Text style={styles.item}>{user.role}</Text>
        </View>
        <View style={{ paddingVertical: 25 }}>
          <HzButton title="LOG OUT" onPress={this.logout} />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: '4%'
  },
  headerTitle: {
    fontSize: RS(24),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center'
  },
  textHolder: {
    display: 'flex',
    flexDirection: 'row'
  },
  item: {
    width: '50%',
    paddingVertical: RS(5),
    fontSize: RS(15)
  }
});

const mapStateToProps = state => ({
  profile: getAuthState(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
