import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Routes } from './routes';
import Header from 'features/Header';



function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <Routes />
        </main>
      </div >
    </Provider>
  );
}

export default App;
