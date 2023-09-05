import { observable, computed, action, makeObservable } from "mobx";
import { DataTable } from "./DataTable";

import { initialBoardsData } from "./initialData";

export class BoardsTable extends DataTable {
  constructor(usersInBoards) {
    super();
    this.data = initialBoardsData;
    this.currentId = this.data[0].id;
    this.lastId = this.data[this.data.length - 1].id;
    this.usersInBoards = usersInBoards;

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addBoard: action,
    });
  }

  addBoard(name, createdBy) {
    this.lastId++;
    this.data.push({
      id: this.lastId,
      name: name,
      createdBy: createdBy,
    });
    this.usersInBoards.addUserInBoard(createdBy, this.lastId); // user that creates board should be on it
    console.log("addBoard");
  }
}