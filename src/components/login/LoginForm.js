import React from 'react';
import { View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import HzButton from '../../common/HzButton'
import { TextField } from 'react-native-material-textfield';
import Colors from '../../style/color';

const trim = value => value && value.trim();

const InputField = (props) => {
  const {
    input,
    label,
    meta: { touched, error },
    ...custom
  } = props;
  return (
    <TextField
      label={label}
      error={touched ? error : ''}
      errorColor={Colors.error}
      tintColor={Colors.secondary}
      labelHeight={28}
      inputContainerPadding={4}
      onEndEditing={input.onBlur}
      {...input}
      {...custom}
    />
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Enter Username';
  }
  if (!values.password) {
    errors.password = 'Enter Password';
  }
  return errors;
};

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <View>
      <View style={{ paddingHorizontal: '4%', paddingVertical: '8%' }}>
        <Field
          name="username"
          label="User Name"
          autoFocus
          returnKeyType="next"
          component={InputField}
          normalize={trim}
        />
        <Field
          name="password"
          label="Password"
          returnKeyType="done"
          secureTextEntry
          component={InputField}
        />
      </View>
      <HzButton
        title="LOGIN"
        onPress={handleSubmit}
        disabled={submitting}
      />
    </View>
  );
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);