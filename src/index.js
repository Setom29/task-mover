import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider  } from 'mobx-react'
import { UsersTable } from './stores/UsersTable';
import { BoardsTable } from './stores/BoardsTable';
import { UsersInBoardsTable } from './stores/UsersInBoardsTable';
import CardListsTable from './stores/CardListsTable';
import CardsTable from './stores/CardsTable';

const users = new UsersTable();
const usersInBoards = new UsersInBoardsTable();
const boards = new BoardsTable(usersInBoards);
const cardListsTable = new CardListsTable();
const cardsTable = new CardsTable();

const stores = {users, boards, usersInBoards, cardListsTable, cardsTable}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>

);

