import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const onRowPress = (employee) => {
  Actions.employeeEdit({ employee });
};

const EmployeeListItem = (props) => {
    console.log(props);
    const { name } = props.employee;

    return (
      <TouchableWithoutFeedback onPress={() => onRowPress(props.employee)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeListItem;
