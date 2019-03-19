import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, getAuthState } from '../../reducers/login';
import LoginForm from './LoginForm';
import { RS } from '../../utils/UtilityFunctions';
import Colors from '../../style/color';
import Loader from '../../common/Loader';
import { api } from '../../api/apiService';

const { width } = Dimensions.get('window');

class Login extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Login'
  };

  constructor() {
    super();
    this.state = {
      loading: false,
      initValues: {
        username: 'User1',
        password: 'use@lib'
      }
    };
  }

  async componentDidMount() {
    const { token } = this.props.auth;
    console.log('is Logged', token);
    if (token) {
      api.setHeader('Authorization', `Bearer ${token}`);
      this.props.navigation.navigate('App');
    }
  }

  loginUser = values => {
    this.props.login(values);
  };

  render() {
    const { isLoading } = this.props.auth;
    return (
      <View style={styles.container}>
       {/*  <Image
          style={{
            width: width,
            height: 60,
            padding: 10,
            resizeMode: 'contain'
          }}
          source={require('./img/logo.jpg')}
        /> */}
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
  }
});

const mapStateToProps = state => ({
  auth: getAuthState(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
