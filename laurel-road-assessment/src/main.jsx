import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // wrapping app in Browser router to include React Router / Provider to allow for use of Redux store
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
