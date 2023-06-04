import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ContextProvider } from '../store/context/context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store/store';
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </PersistGate>
  </Provider>
);
