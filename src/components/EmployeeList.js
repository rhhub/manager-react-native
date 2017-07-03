import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StyleSheet } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  keyExtractor = (item) => item.uid;

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.employees}
                renderItem={({ item }) => <EmployeeListItem employee={item} />}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // {shift: 'Monday', name:'Nick', phone: 5558443930, id: '12jf2l3'}
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
