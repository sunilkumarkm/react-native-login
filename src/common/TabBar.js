import React, { PureComponent } from 'react';
import { Keyboard, View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';

class TabBarComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);

    this.state = {
      isVisible: true,
    };
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = () => {
    this.setState({
      isVisible: false,
    });
  }

  keyboardWillHide = () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    return this.state.isVisible ? <BottomTabBar {...this.props} /> : <View />;
  }
}

export default TabBarComponent;
