import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        < LoginForm />
      </Provider>
    );
  }
}

export default App;
