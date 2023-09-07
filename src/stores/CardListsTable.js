import {
  computed,
  action,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { DataTable } from "./DataTable";
import { initialCardListsData } from "./initialData";

export default class CardListsTable extends DataTable {
  constructor() {
    super();
    this.data = initialCardListsData;
    this.currentId = this.data[0].id;
    this.lastId = this.data[this.data.length - 1].id;

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addCardList: action,
      deleteCardList: action,
      editItem: action,
    });
  }

  //нужно создавать CardList или new Card(...)?
  addCardList(name, boardId) {
    console.log("addCardList");
    this.lastId++;
    this.data.push({
      id: this.lastId,
      name: name,
      order: this.data.filter((item) => item.boardId === boardId).length,
      boardId: boardId,
    });
  }
  
  deleteCardList(id) {
    this.data = this.data.filter((cardList) => cardList.id !== id);
  }
}
