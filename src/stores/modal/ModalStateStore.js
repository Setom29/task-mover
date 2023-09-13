import {action, makeObservable, observable} from "mobx";

export default class ModalStateStore {
    constructor() {
        this.open = false;
        this.currentCardId = null;
        this.currentCommentsId = null
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
            this.currentCommentsId = cardId
        }
    }
}
