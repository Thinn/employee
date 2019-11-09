import React from 'react';
import { Provider } from 'react-redux'
import styles from './App.module.scss';
import {Employee} from "./containers/empoyees";
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
    <div className={styles.page}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
      </header> */}
          <Employee></Employee>
    </div>
    </Provider>
  );
}

export default App;
