import React from 'react';
import { Provider } from 'react-redux';
import './App.less';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

import Routes from './Routes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
