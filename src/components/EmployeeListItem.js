import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

const EmployeeListItem = (props) => {
    console.log(props);
    const { name } = props.employee;

    return (
      <TouchableWithoutFeedback>
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
