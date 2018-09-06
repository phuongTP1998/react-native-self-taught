import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import RootNavigator from './navigators'

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
    state = {}

    render() {
        return (
            <Provider store={store}>
                <RootNavigator/>
            </Provider>
        )
    }
}

export default App;
