import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ContextProvider } from '../store/context/context';
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>

);
