import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Table, Rows, Row } from 'react-native-table-component';

class Dashboard extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Dashboard'
  };

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['id', 'name', 'age', 'gender', 'email', 'phone'],
      employeeData: []
    };
  }

  componentDidMount() {
    const employeeData = [];
    const { employeeList } = this.props;
    console.log(this.props);
    employeeList.forEach(element => {
      employeeData.push(Object.values(element));
    });
    this.setState({ employeeData });
  }

  render() {
    const { tableHead, employeeData } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>USER DETAILS</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows
            data={employeeData}
            textStyle={styles.text}
          />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 10
  }
});

const mapStateToProps = state => ({
  employeeList: state.auth.employeeList.user
});

export default connect(mapStateToProps)(Dashboard);
