import {observable, computed, action, makeObservable} from 'mobx'
import {DataTable} from "./store"

const dummyBoards = [
    {id: 1, name: "Board 1", createdBy: 1},
    {id: 2, name: "Board 2", createdBy: 2},
    {id: 3, name: "Board 3", createdBy: 3},
]

export class BoardsTable extends DataTable {
    constructor(usersInBoards) {
        super();
        this.data = dummyBoards;
        this.currentId = this.data[0].id;
        this.lastId = this.data[this.data.length-1].id;
        this.usersInBoards = usersInBoards;

        makeObservable(this, {
            data: observable,
            currentId: observable,
            changeCurrentItemId: action,
            currentItem: computed
        })
    }

    addBoard(name, createdBy) {
        this.lastId++;
        this.data.push({
            id: this.lastId,
            name: name,
            createdBy: createdBy
        })
        this.usersInBoards.addUserInBoard(createdBy, this.lastId); // user that creates board should be on it
        console.log("addBoard")
    }



}