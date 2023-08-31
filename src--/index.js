// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { App } from './components/App';
// import { store } from './redux/store';
// import { fetchContacts } from './redux/contactsSlice';
// import { loginUser } from './redux/userActions';
// import { setCurrentUser } from './redux/userSlice';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // Pobierz bieżącego użytkownika, jeśli już jest zalogowany
// const token = localStorage.getItem('token');
// if (token) {
//   store
//     .dispatch(loginUser(token))
//     .then(user => {
//       store.dispatch(setCurrentUser(user));
//       store.dispatch(fetchContacts());
//     })
//     .catch(error => {
//       console.error('Błąd logowania:', error);
//       localStorage.removeItem('token');
//     });
// } else {
//   store.dispatch(fetchContacts());
// }

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
