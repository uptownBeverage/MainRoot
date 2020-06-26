import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import routeProvider from './routeProvider';
import configureStore from './store';
import createRoutes from './routes';
import reducers from './reducers';
import './styles.css';
import axios from 'axios';
window.axios = axios;

const initialState = {};
const store = configureStore(initialState, reducers, reduxThunk);
ReactDOM.render(routeProvider(store, createRoutes()), document.querySelector('#root'));