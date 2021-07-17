import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DigiHealthContextProvider} from "./contexts/ContextProvider"
import {BrowserRouter as Router} from "react-router-dom"
import { UserContextProvider } from './context/UserContext';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
       <DigiHealthContextProvider>
          <UserContextProvider>
              <App />
          </UserContextProvider>
        <DigiHealthContextProvider>
     </Router>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

