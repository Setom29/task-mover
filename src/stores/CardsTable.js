import {
  computed,
  action,
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
    if (this.data.length > 0) {
      this.currentId = this.data[0].id;
      this.lastId = getMaxObjectInArray(this.data, "id").id;
    }

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addCard: action,
      deleteCard: action,
      editItem: action,
      moveCard: action,
      updateData: action,
      changeStatusIcon: action
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
      order: this.getLastCardOrderInCardList(cardListId) + 1,
      createdAt: new Date().getTime(),
      createdBy: userId,
      dueTo: dueTo,
      assignee: null,
      status: 0,
    });
  }

  changeStatusIcon(cardId) {
    const card = this.data.find(card => card.id === cardId);
    console.log(card)
    if (card) {
      if (card.status === -1) {
        card.status = 0;
      } else if (card.status === 1) {
        card.status = -1;
      } else {
        card.status = 1;
      }
    }
  }

  deleteCard(id) {
    this.data = this.data.filter((card) => card.id !== id);
  }

  getPrevCardIdInSameCardList(cardId) {
    const cardToUse = this.getItemById(cardId);
    const arrFilteredCardList = this.data.filter(card => card.cardListId === cardToUse.cardListId && 
                                                card.order < cardToUse.order);
    if (arrFilteredCardList.length === 0) {
      return null;
    } else 
    {
      const cardToReturn = getMaxObjectInArray(arrFilteredCardList, "order");
      return cardToReturn.id;
    }
  }

  getLastCardIdInCardList(cardListId) {
    const arrFilteredCardList = this.data.filter(card => card.cardListId === cardListId);
    if (arrFilteredCardList.length === 0) {
      return null;
    } else 
    {
      const cardToReturn = getMaxObjectInArray(arrFilteredCardList, "order");
      return cardToReturn.id;
    }
  }

  getLastCardOrderInCardList(cardListId) {
    const arrFilteredCardList = this.data.filter(card => card.cardListId === cardListId);
    if (arrFilteredCardList.length === 0) {
      return -1;
    } else 
    {
      const cardToReturn = getMaxObjectInArray(arrFilteredCardList, "order");
      return cardToReturn.order;
    }
  }


  moveCard(cardId, newCardListId, insertAfterCardId) {
    // move card id to card list cardListId, inserting it after card insertAfterCardId; 
    // update orders of later cards belonging to card list cardListId  
    // if insertAfterCardId is null, insert the card as the first card in the card list cardListId
    if (cardId === insertAfterCardId) {
      throw Error("There was a try to insert card with existing ID");
    }

    const cardToMove = this.getItemById(cardId);
    const oldCardListId = cardToMove.cardListId; 
    if (oldCardListId === newCardListId) {
      if (insertAfterCardId === null) {
        cardToMove.order = Math.min(...this.data
                          .filter(card => card.cardListId === oldCardListId)
                          .map(card => card.order)) - 1;
        console.log("same list, insert in beginning")
      } else {
        const moveForward = (this.getItemById(insertAfterCardId).order > cardToMove.order);
        let newOrder;
        if (moveForward) {
          newOrder = this.getItemById(insertAfterCardId).order;
          this.data.filter(card => card.cardListId === oldCardListId && 
            card.order <= newOrder && 
            card.order > cardToMove.order)
                    .forEach(card => card.order--);
          console.log("same list, insert in middle, move forward")
        } else {
          newOrder = this.getItemById(insertAfterCardId).order + 1;
          this.data.filter(card => card.cardListId === oldCardListId && 
            card.order >= newOrder && 
            card.order < cardToMove.order)
                    .forEach(card => card.order++);
          console.log("same list, insert in middle, move backward")
        }
        cardToMove.order = newOrder;
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
