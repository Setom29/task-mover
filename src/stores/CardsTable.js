import {
  computed,
  action,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { DataTable } from "./DataTable";
import { initialCardsData } from "./initialData";
import {getMaxObjectInArray} from "../utils/arrays"

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
      moveCard: action
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

  getPrevCardIdInCardList(cardId) {
    const cardToUse = this.getItemById(cardId);
    const arrFilteredCardList = this.data.filter(card => card.cardListId === cardToUse.cardListId && 
                                                card.order < cardToUse.order);
    if (arrFilteredCardList.length === 0) {
      return null;
    } else 
    {
      const prevCard = getMaxObjectInArray(arrFilteredCardList, "order");
      return prevCard.id;
    }
  }

  moveCard(cardId, newCardListId, insertAfterCardId) {
    // move card id to card list cardListId, inserting it after card insertAfterCardId; 
    // update orders of later cards belonging to card list cardListId  
    // if insertAfterCardId is null, insert the card as the first card in the card list cardListId
    const cardToMove = this.getItemById(cardId);
    const oldCardListId = cardToMove.cardListId; 
    if (oldCardListId === newCardListId) {
      if (insertAfterCardId === null) {
        cardToMove.order = Math.min(...this.data
                          .filter(card => card.cardListId === oldCardListId)
                          .map(card => card.order)) - 1;
        console.log("same list, insert in beginning")
      } else {
        const newOrder = this.getItemById(insertAfterCardId).order + 1;
        this.data.filter(card => card.cardListId === oldCardListId && 
                                 card.order >= newOrder && 
                                 card.order < cardToMove.order)
                  .forEach(card => card.order++);
        cardToMove.order = newOrder;
        console.log("same list, insert in middle")
      }
    } else {
      if (insertAfterCardId === null) {
        cardToMove.order = Math.min(...this.data
                          .filter(card => card.cardListId === newCardListId)
                          .map(card => card.order)) - 1;
        console.log("diff list, insert in beginning")
      } else {
        const newOrder = this.getItemById(insertAfterCardId).order + 1;
        this.data.filter(card => card.cardListId === newCardListId && 
                                  card.order >= newOrder)
                  .forEach(card => card.order++);
        cardToMove.order = newOrder;
        console.log("diff list, insert in middle")
        }
      cardToMove.cardListId = newCardListId;
    }
  }
}
