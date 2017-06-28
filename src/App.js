import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCRt7TJqTkrvy0XCd3JtbP0DxvANQ8zd4Y',
      authDomain: 'manager-4c194.firebaseapp.com',
      databaseURL: 'https://manager-4c194.firebaseio.com',
      projectId: 'manager-4c194',
      storageBucket: '',
      messagingSenderId: '388814394241'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
