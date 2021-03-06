import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//import { createStore } from 'redux';
//import rootReducer from './store/modules';


import App from './App';
import * as serviceWorker from './serviceWorker';

//const store = createStore(rootReducer);
//console.log(store.getState());

const Root = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
