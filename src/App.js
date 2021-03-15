import React from 'react';
import { Provider } from 'react-redux';

import configStore from 'redux/store';
import './App.css';

import Counter from 'components/Counter';
function App() {
  return (
    <Provider store={configStore()}>
      <Counter />;
    </Provider>
  );
}

export default App;
