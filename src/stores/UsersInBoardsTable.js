import { observable, computed, action, makeObservable } from "mobx";
import { DataTable } from "./DataTable";
import { initialUsersInBoardsData } from "./initialData";

export class UsersInBoardsTable extends DataTable {
  constructor() {
    super();

    this.data = initialUsersInBoardsData;
    this.currentId = this.data[0].id;
    this.lastId = this.data[this.data.length - 1].id;

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addUserInBoard: action,
      editItem: action,
    });
  }

  addUserInBoard(userId, boardId) {
    this.lastId++;
    this.data.push({
      id: this.lastId,
      userId: userId,
      boardId: boardId,
    });
    console.log("addUserInBoard");
  }

  isUserInBoard(userId, boardId) {
    return (
      this.data.findIndex(
        (item) => item.userId === userId && item.boardId === boardId
      ) !== -1
    );
  }

  getUserIdsByBoardId(boardId) {
    return this.data
      .filter((item) => item.boardId === boardId)
      .map((item) => item.userId);
  }

  getBoardIdsByUserId(userId) {
    return this.data
      .filter((item) => item.userId === userId)
      .map((item) => item.boardId);
  }
}
