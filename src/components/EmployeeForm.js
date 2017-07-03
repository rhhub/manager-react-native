import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  renderDayPicker() {
    // Kind of ugly. Maybe make new prop??? Picker is the prop tho.. Now on change text is in a function.
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const pickerItems = daysOfWeek.map((day) => { return <Picker.Item key={day} label={day} value={day} />; });

    return (
      <Picker
        //style={{ flex: 1 }}

        selectedValue={this.props.shift}
        onValueChange={(value) => this.props.employeeUpdate({ prop: 'shift', value })}
      >
        { pickerItems }
      </Picker>
    );
  }

  render() {
    return (
      <View>
      <CardSection>
        <Input
          label='Name'
          placeholder='Jane'
          onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          value={this.props.name}
        />
      </CardSection>

      <CardSection>
        <Input
          label='Phone'
          placeholder='555-555-5555'
          onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          value={this.props.phone}
        />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        {this.renderDayPicker()}
      </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
