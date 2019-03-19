import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Picker
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

class FormPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  render() {
    if (Platform.OS === 'android') {
      return (
        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
          <Picker
            selectedValue={this.props.value}
            onValueChange={this.props.onChange}
          >
            <Picker.Item key="select" label={this.props.label} value="" />
            {this.props.items.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
          </Picker>
        </View>
      );
    }
    return (
      <RNPickerSelect
        placeholder={{
          label: this.props.label,
          value: '',
          color: '#9EA0A4'
        }}
        items={this.props.items}
        onValueChange={this.props.onChange}
        style={{ ...pickerSelectStyles }}
        selectedValue={this.props.value}
      />
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black'
  },
  inputAndroid: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black'
  },
  viewContainer: {
    paddingBottom: 4
  }
});

export default FormPicker;
