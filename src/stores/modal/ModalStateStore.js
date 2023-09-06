import {action, makeObservable, observable} from "mobx";

export default class ModalStateStore {
    open = false
    constructor() {
        makeObservable(this, {
            open: observable,
            toggle: action,
        })
    }
    toggle = (cardId) => {
        console.log(`call toggle ${cardId} && ${this.currentCardId}`)
        if (this.open && this.currentCardId === cardId) {
            this.open = false;
            this.currentCardId = null;
        }
        else {
            this.open = true;
            this.currentCardId = cardId;
        }
    }

}