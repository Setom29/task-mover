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
import CommentTable from "./stores/commentsStructure/CommentTable";
import ModalStateStore from "./stores/modal/ModalStateStore";

const usersTable = new UsersTable();
const usersInBoardsTable = new UsersInBoardsTable();
const boardsTable = new BoardsTable(usersInBoardsTable);
const cardListsTable = new CardListsTable();
const cardsTable = new CardsTable();
const commentsTable = new CommentTable()
const modalStateStore = new ModalStateStore()

const stores = {usersTable, boardsTable, usersInBoardsTable, cardListsTable, cardsTable, commentsTable, modalStateStore};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>

);

