import {
  computed,
  action,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { DataTable } from "./store";
import { initialCardsData } from "./dummy";

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
      editCard: action,
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

  editCard(id, field, value, order = null) {
    console.log("editCard ", id);
    let tempCard = this.getItemById(id);
    if (field === "name") {
      tempCard.name = value;
    } else if (field === "description") {
      tempCard.description = value;
    } else if (field === "cardListId" && order !== null) {
      tempCard.cardListId = value;
    } else if (field === "order") {
      console.log("ToDo");
    } else if (field === "dueTo") {
      tempCard.dueTo = value;
    } else if (field === "assignee") {
      tempCard.assignee = value;
    } else {
      console.error("Invalid field");
    }
  }
}
