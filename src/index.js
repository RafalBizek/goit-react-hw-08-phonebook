import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { App } from './components/App';

// import { store } from 'redux/store';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
