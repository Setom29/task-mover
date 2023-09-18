import { observable, computed, action, makeObservable } from "mobx";
import { initialUsersData } from "./initialData";
import { DataTable } from "./DataTable";
import { getMaxObjectInArray } from "../utils/arrays";

export class UsersTable extends DataTable {
  constructor() {
    super();
    this.data = initialUsersData;
    // it doesn't use dynamic data from Users.js -> play with index [0-1-2]
    if (this.data.length > 0) {
      this.currentId = this.data[0].id;
      this.lastId = getMaxObjectInArray(this.data, "id").id;
    }

    makeObservable(this, {
      data: observable,
      currentId: observable,
      changeCurrentItemId: action,
      currentItem: computed,
      addUser: action,
      editItem: action,
      updateData: action
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
