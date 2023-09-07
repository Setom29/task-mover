import {action, computed, makeObservable, observable} from "mobx";
import {initialComments} from "../initialData";
import {DataTable} from "../DataTable";

export default class CommentTable extends DataTable {
    constructor() {
        super();
        this.data = initialComments;
        this.currentId = this.data[0].id;
        this.lastId = this.data[this.data.length - 1].id;

        makeObservable(this, {
            data: observable,
            currentId: observable,
            changeCurrentItemId: action,
            currentItem: computed,
            addComment: action,
            // editComment: action,
            deleteComment: action,
            editItem: action,
        })

    }

    addComment(text, user_id, card_id) {
        console.log("addComment")
        this.lastId++
        this.data.push({
            id: this.lastId,
            text: text,
            created_at: new Date().getTime(),
            user_id: user_id,
            card_id: card_id
        })
    }

    // //,user_id, card_id, нужно добавить в параметры в дальнейшем при расширении на множество таблиц.
    // editComment(id, text) {
    //     console.log("editeComment")
    //     this.currentItem.text = text
    // }

    deleteComment(id) {
        this.data = this.data.filter((comment) => comment.id !== id);
    }
}