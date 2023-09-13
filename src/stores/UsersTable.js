import { observable, computed, action, makeObservable } from "mobx";
import { initialUsersData } from "./initialData";
import { DataTable } from "./DataTable";

export class UsersTable extends DataTable {
  constructor() {
    super();
    this.data = initialUsersData;
    this.currentId = this.data[0].id; // it doesn't use dynamic data from Users.js -> play with index [0-1-2]
    this.lastId = this.data[this.data.length - 1].id;

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addUser: action,
      editItem: action,
    });
  }

  addUser(name, surname, email, password) {
    this.lastId++;
    this.data.push({
      id: this.lastId,
      name: name,
      surname: surname,
      email: email,
      password: password,
    });
    console.log("addUser");
  }

  get userIds() {
    return this.data.map(user => user.id);
  }
}
