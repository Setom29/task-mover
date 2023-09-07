import {
  computed,
  action,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { DataTable } from "./DataTable";
import { initialCardsData } from "./initialData";

export default class CardsTable extends DataTable {
  constructor() {
    super();
    this.data = initialCardsData;
    this.currentId = this.data[0].id;
    this.lastId = this.data[this.data.length - 1].id;

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addCard: action,
      deleteCard: action,
      editItem: action,
    });
  }

  addCard(name, cardListId, userId, dueTo = null) {
    console.log("addCard");
    this.lastId++;
    this.data.push({
      id: this.lastId,
      name: name,
      description: "",
      cardListId: cardListId,
      order: this.data.filter((item) => item.cardListId === cardListId).length,
      createdAt: new Date().getTime(),
      createdBy: userId,
      dueTo: dueTo,
      assignee: null,
    });
  }

  deleteCard(id) {
    this.data = this.data.filter((card) => card.id !== id);
  }
}
