import { computed, action, makeAutoObservable, makeObservable, observable } from 'mobx'
import {arr} from './dummy'

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
        console.log("currentItem ", this.currentId)
        return this.data.find(item => item.id === this.currentId);
    }

    getItemById(id) {
        console.log("getItemById ", id)
        return this.data.find(item => item.id === id);
    }

    changeCurrentItemId(id) {
        this.currentId = id;
        console.log("changeCurrentItemId ", id)
    }
}

export class Users extends DataTable {
    constructor() {
        super();
        this.data = arr;
        this.currentId = this.data[0].id;
        this.lastId = this.data[this.data.length-1].id;

        makeObservable(this, {
            data: observable,
            currentId: observable,
            changeCurrentItemId: action,
            currentItem: computed
        })
    }

    addUser(name, surname, email, password) {
        this.lastId++;
        this.data.push({
            id: this.lastId,
            name: name,
            surname: surname,
            email: email,
            password: password
        })
        console.log("addUser")

    }

}