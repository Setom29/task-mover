import {
  computed,
  action,
  makeAutoObservable,
  makeObservable,
  observable,
} from "mobx";
import { DataTable } from "./DataTable";
import { initialCardListsData } from "./initialData";
import { getMaxObjectInArray } from "../utils/arrays";

export default class CardListsTable extends DataTable {
  constructor() {
    super();
    this.data = initialCardListsData;
    this.currentId = this.data[0].id;
    this.lastId = getMaxObjectInArray(this.data, "id");

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addCardList: action,
      deleteCardList: action,
      editItem: action,
      moveCardList: action,
      updateData: action
    });
  }

  //нужно создавать CardList или new Card(...)?
  addCardList(name, boardId) {
    console.log("addCardList");
    this.lastId++;
    this.data.push({
      id: this.lastId,
      name: name,
      order: this.getLastCardListOrderInBoard(boardId) + 1,
      boardId: boardId,
    });
  }
  
  deleteCardList(id) {
    this.data = this.data.filter((cardList) => cardList.id !== id);
  }

  getPrevCardListIdInSameBoard(cardListId) {
    const cardListToUse = this.getItemById(cardListId);
    const arrFiltered = this.data.filter(cardList => cardList.boardId === cardListToUse.boardId && 
                                                cardList.order < cardListToUse.order);
    if (arrFiltered.length === 0) {
      return null;
    } else 
    {
      const cardListToReturn = getMaxObjectInArray(arrFiltered, "order");
      return cardListToReturn.id;
    }
  }

  getLastCardListIdInBoard(boardId) {
    const arrFiltered = this.data.filter(cardList => cardList.boardId === boardId);
    if (arrFiltered.length === 0) {
      return null;
    } else 
    {
      const cardListToReturn = getMaxObjectInArray(arrFiltered, "order");
      return cardListToReturn.id;
    }
  }

  getLastCardListOrderInBoard(boardId) {
    const arrFiltered = this.data.filter(cardList => cardList.boardId === boardId);
    if (arrFiltered.length === 0) {
      return -1;
    } else 
    {
      const cardListToReturn = getMaxObjectInArray(arrFiltered, "order");
      return cardListToReturn.order;
    }
  }


  moveCardList(cardListId, insertAfterCardListId) {
    // move cardList (specified by id) to the position after insertAfterCardListId; 
    // update orders of later cardLists  
    // if insertAfterCardListId is null, insert the cardList as the first cardList in the current board

    if (cardListId === insertAfterCardListId) {
      throw Error("There was a try to insert card list with existing ID");
    }

    const cardListToMove = this.getItemById(cardListId);
      if (insertAfterCardListId === null) {
        cardListToMove.order = Math.min(...this.data
                          .filter(cardList => cardList.boardId === cardListToMove.boardId)
                          .map(card => card.order)) - 1;
        console.log("insert cardList in beginning")
      } else {
        const moveForward = (this.getItemById(insertAfterCardListId).order > cardListToMove.order);
        let newOrder;
        if (moveForward) {
          newOrder = this.getItemById(insertAfterCardListId).order;
          this.data.filter(cardList => cardList.boardId === cardListToMove.boardId && 
            cardList.order <= newOrder && 
            cardList.order > cardListToMove.order)
                    .forEach(cardList => cardList.order--);
          console.log("same board, insert in middle, move forward")
        } else {
          newOrder = this.getItemById(insertAfterCardListId).order + 1;
          this.data.filter(cardList => cardList.boardId === cardListToMove.boardId && 
            cardList.order >= newOrder && 
            cardList.order < cardListToMove.order)
                    .forEach(cardList => cardList.order++);
          console.log("same board, insert in middle, move backward")
        }
        cardListToMove.order = newOrder;
      }
  }

}
