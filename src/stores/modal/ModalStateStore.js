import {action, makeObservable, observable} from "mobx";

export default class ModalStateStore {
    constructor() {
        this.open = false;
        this.currentCardId = null;

        makeObservable(this, {
            open: observable,
            currentCardId: observable,
            toggle: action,
        })
    }

    toggle = (cardId) => {
        console.log(`call toggle ${cardId} && ${this.currentCardId}`)
        if (this.open && this.currentCardId === cardId) {
            this.open = false;
            this.currentCardId = null;
        } else {
            this.open = true;
            this.currentCardId = cardId;
            console.log(`toggleCardID ${this.currentCardId}`)
        }
    }
}
