import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../reducers/login';
import LoginForm from './LoginForm';
import { RS } from '../../utils/UtilityFunctions';
import Colors from '../../style/color';
import Loader from '../../common/Loader';
import { NotificationAlert } from '../../utils/UtilityFunctions';

class Login extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Login'
  };

  constructor() {
    super();
    this.state = {
      loading: false,
      initValues: {
        username: 'hruday@gmail.com',
        password: 'hruday123'
      },
      data: {
        username: 'hruday@gmail.com',
        password: 'hruday123'
      }
    };
  }

  loginUser = values => {
    const { data } = this.state;
    if (values.username.toLowerCase() === data.username && data.password === data.password) {
      this.props.navigation.navigate('App')
    } else {
      const errorMsg = "Invalid username or password";
      NotificationAlert('Login Error', errorMsg);
    }
  };

  render() {
    const { isLoading } = this.props.auth;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>

        <LoginForm
          title="LOGIN"
          onSubmit={this.loginUser}
          initialValues={this.state.initValues}
        />
        {!!isLoading && <Loader loading={isLoading} modal />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
    paddingTop: '20%'
  },
  headerTitle: {
    fontSize: RS(24),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center'
  },
  title: { textAlign: 'center', fontSize: 32, fontWeight: 'bold', color: Colors.primary, padding: 10 }

});

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
