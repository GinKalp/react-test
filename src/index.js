import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.css'
import CounterProvider from "./exam-tasks/task-8/CounterContext";



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <CounterProvider>
              <App />
          </CounterProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
