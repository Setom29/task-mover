import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider  } from 'mobx-react'
import { Users } from './stores/store';
import CardListsTable from './stores/CardListsTable';
import CardsTable from './stores/CardsTable';

const users = new Users();
const cardListsTable = new CardListsTable();
const cardsTable = new CardsTable();

const stores = {users, cardListsTable, cardsTable}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>

);

