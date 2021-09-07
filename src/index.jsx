import React from 'react';
import ReactDOM from 'react-dom';

//Reponsável por fornecer acesso a todos os componentes que ele envolve
import { Provider } from 'react-redux';
import store from './store';

//Responsável por persistir os dados no localStore
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import App from './App';

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
