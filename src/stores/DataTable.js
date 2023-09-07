import { observable, computed, action, makeObservable } from "mobx";

export class DataTable {
  constructor() {
    this.lastId = 0;
    this.data = [];
    this.currentId = 0;

    // maybe also in parent class but so far - in each class its own
    // makeObservable(this, {
    //     data: observable,
    //     currentId: observable,
    //     changeCurrentUser: action,
    //     currentUser: computed
    // })
  }

  get currentItem() {
    console.log("currentItem ", this.currentId);
    return this.data.find((item) => item.id === this.currentId);
  }

  getItemById(id) {
    return this.data.find((item) => item.id === id);
  }

  changeCurrentItemId(id) {
    this.currentId = id;
    console.log("changeCurrentItemId ", id);
  }

  // editItem(newItem) {
  //   const itemIndex = this.data.findIndex((item) => item.id === newItem.id)
  //   for (let field in this.data[itemIndex]) {
  //     console.log(field)
  //     this.data[itemIndex][field] = newItem[field]
  //   }
  // }

  editItem(newItem) {
    this.data = this.data.filter((item) => item.id !== newItem.id);
    this.data.push(newItem)
  }
}
