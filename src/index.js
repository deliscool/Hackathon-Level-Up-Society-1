import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DigiHealthContextProvider } from "./context/ContextProvider"
import { UserContextProvider } from './context/UserContext';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <DigiHealthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </DigiHealthContextProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

