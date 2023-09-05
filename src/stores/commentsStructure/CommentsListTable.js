import {DataTable} from "../DataTable";
import {initialCommentsList} from "../initialData";
import {action, computed, makeObservable, observable} from "mobx";
import {renderHook} from "@testing-library/react";

export default class CommentsListTable extends DataTable {
    constructor() {
        super();
        this.data = initialCommentsList;
        this.currentId = this.data[0].id;
        this.lastId = this.data[this.data.length - 1].id;

        makeObservable(this, {
            data: observable,
            currentId: observable,
            changeCurrentItemId: action,
            currentItem: computed,
            addComment: action,
            editComment: action,
            deleteComment: action,
        })

    }

    addCommentList(cardId) {
        this.lastId++
        this.data.push({
                listId: this.lastId,
                card_id: cardId,
                commentsListLength: 0
            }
        )
    }

    deleteCommentList(commentsList) {
        this.data = this.data.filter((commentList) => commentList.id !== id);
    }
}