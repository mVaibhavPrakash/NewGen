import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../redux/store'
import {AuthContextProvider } from '../hooks/AuthContext'
import App from './App';
import '../css/index.css'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(

  <Provider store={store}>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </Provider>
);
