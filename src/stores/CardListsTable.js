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
      editCardList: action,
      deleteCardList: action,
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

  editCardList(cardListId, field, value) {
    console.log("editCardList");
    let tempCardList = this.getItemById(cardListId);
    if (field === "name") {
      tempCardList.name = value;
    } else if (field === "order") {
      console.log("ToDo");
    } else {
      console.error("Invalid field");
    }
  }
  deleteCardList(id) {
    this.data = this.data.filter((cardList) => cardList.id !== id);
  }
}
