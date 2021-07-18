import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DigiHealthContextProvider } from "./context/ContextProvider"
import { UserContextProvider } from './context/UserContext';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <DigiHealthContextProvider>
        <App />
      </DigiHealthContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
