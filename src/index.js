import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import { UsersTable } from './stores/store';
import { BoardsTable } from './stores/boards';
import { UsersInBoardsTable } from './stores/usersInBoards';

const users = new UsersTable();
const usersInBoards = new UsersInBoardsTable();
const boards = new BoardsTable(usersInBoards);

const stores = {users, boards, usersInBoards}; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>

);

