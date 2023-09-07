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
    console.log("getItemById ", id);
    console.log(this)
    return this.data.find((item) => item.id === id);
  }

  changeCurrentItemId(id) {
    this.currentId = id;
    console.log("changeCurrentItemId ", id);
  }
}
