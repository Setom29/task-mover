import {observable, computed, action, makeObservable} from 'mobx'
import {DataTable} from "./store"

const dummyUsersInBoards = [
    {id: 1, userId: 1, boardId: 1},
    {id: 2, userId: 2, boardId: 1},
    {id: 3, userId: 3, boardId: 1}, // all users see Board 1
    {id: 4, userId: 2, boardId: 2},
    {id: 5, userId: 3, boardId: 2},  // users 2 and 3 see Board 2
    {id: 6, userId: 3, boardId: 3} // only user3 sees Board 3
]


export class UsersInBoardsTable extends DataTable {
    constructor() {
        super();

        this.data = dummyUsersInBoards;
        this.currentId = this.data[0].id;
        this.lastId = this.data[this.data.length-1].id;

        makeObservable(this, {
            data: observable,
            currentId: observable,
            changeCurrentItemId: action,
            currentItem: computed
        })
    }

    addUserInBoard(userId, boardId) {
        this.lastId++;
        this.data.push({
            id: this.lastId,
            userId: userId, 
            boardId: boardId
        })
        console.log("addUserInBoard")
    }

    isUserInBoard(userId, boardId) {
        return (this.data.findIndex(item => (item.userId === userId) && (item.boardId === boardId) ) !== -1);
    }

}