import React from 'react';
import { Provider } from 'react-redux'
import styles from './App.module.scss';
import {Employee} from "./containers/empoyees";
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
    <div className={styles.page}>
          <Employee></Employee>
    </div>
    </Provider>
  );
}

export default App;
