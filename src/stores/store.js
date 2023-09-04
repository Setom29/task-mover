import { computed, action, makeAutoObservable, makeObservable, observable } from 'mobx'
import {arr} from './dummy'


export class Users {
    constructor() {
        this.lastId = 0;
        this.data = arr;
        this.currentId = this.data[0].id;

        // makeAutoObservable(this);

        makeObservable(this, {
            data: observable,
            currentId: observable,
            changeCurrentUser: action,
            currentUser: computed
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

    }

    get currentUser() {
        return this.data.find(u => u.id === this.currentId);
    }

    getUserById(id) {
        return this.data.find(u => u.id === id);
    }

    changeCurrentUser(id) {
        this.currentId = id;
    }
}