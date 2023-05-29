import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ContextProvider } from '../store/context/context';
import { Provider } from 'react-redux';
import store from '../store/store';
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>
);
