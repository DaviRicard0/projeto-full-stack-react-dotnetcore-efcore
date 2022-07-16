import React from 'react';
//import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <Menu/>
    <div className='container'>
      <App/>
    </div>
  </BrowserRouter>,
  root
);
