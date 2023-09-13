export const initialUsersData = [
    {
        id: 1,
        name: "Alice",
        surname: "Smith",
        email: "alice.smith@example.com",
        password: "securePassword",
    },
    {
        id: 2,
        name: "Bob",
        surname: "Johnson",
        email: "bob.johnson@example.com",
        password: "strongPassword",
    },
    {
        id: 3,
        name: "Eve",
        surname: "Davis",
        email: "eve.davis@example.com",
        password: "evesPassword",
    },
];

export const initialUsersInBoardsData = [
    {id: 1, userId: 1, boardId: 1},
    {id: 2, userId: 2, boardId: 1},
    {id: 3, userId: 3, boardId: 1}, // all users see Board 1
    {id: 4, userId: 2, boardId: 2},
    {id: 5, userId: 3, boardId: 2}, // users 2 and 3 see Board 2
    {id: 6, userId: 3, boardId: 3}, // only user3 sees Board 3
];

export const initialBoardsData = [
    //не name, а title
    {id: 1, name: "Board 1", createdBy: 1},
    {id: 2, name: "Board 2", createdBy: 2},
    {id: 3, name: "Board 3", createdBy: 3},
];

export const initialCardListsData = [
    //name это status
    {id: 1, name: "To Do", order: 0, boardId: 1},
    {id: 2, name: "In Progress", order: 1, boardId: 1},
    {id: 3, name: "In Review", order: 2, boardId: 1},
    {id: 4, name: "Done", order: 3, boardId: 1},
    {id: 5, name: "To Do", order: 0, boardId: 2},
    {id: 6, name: "In Progress", order: 1, boardId: 2},
    {id: 7, name: "In Review", order: 2, boardId: 2},
    {id: 8, name: "Done", order: 3, boardId: 2},
    {id: 9, name: "To Do", order: 0, boardId: 3},
    {id: 10, name: "In Progress", order: 1, boardId: 3},
    {id: 11, name: "In Review", order: 2, boardId: 3},
    {id: 12, name: "Done", order: 3, boardId: 3},
];
export const initialCardsData = [
    {
        //не name, а task
        id: 1,
        name: "task1",
        description: "d1",
        cardListId: 1,
        order: 0,
        createdAt: "",
        createdBy: 1,
        dueTo: "",
        assignee: 3,
    },
    {
        id: 2,
        name: "task2",
        description: "d2",
        cardListId: 1,
        order: 1,
        createdAt: "",
        createdBy: 1,
        dueTo: "",
        assignee: 2,
    },
    {
        id: 3,
        name: "task3",
        description: "d3",
        cardListId: 2,
        order: 0,
        createdAt: "",
        createdBy: 2,
        dueTo: "",
        assignee: 1,
    },
    {
        id: 4,
        name: "task4",
        description: "d4",
        cardListId: 3,
        order: 0,
        createdAt: "",
        createdBy: 3,
        dueTo: "",
        assignee: 2,
    },
    {
        id: 5,
        name: "task5",
        description: "d5",
        cardListId: 4,
        order: 0,
        createdAt: "",
        createdBy: 1,
        dueTo: "",
        assignee: 3,
    },
    {
        id: 6,
        name: "task6",
        description: "d6",
        cardListId: 4,
        order: 1,
        createdAt: "",
        createdBy: 2,
        dueTo: "",
        assignee: 1,
    },
    {
        id: 7,
        name: "task7",
        description: "d7",
        cardListId: 4,
        order: 2,
        createdAt: "",
        createdBy: 2,
        dueTo: "",
        assignee: 2,
    },
    {
        id: 8,
        name: "task8",
        description: "d8",
        cardListId: 5,
        order: 0,
        createdAt: "",
        createdBy: 2,
        dueTo: "",
        assignee: 2,
    },
    {
        id: 9,
        name: "task9",
        description: "d9",
        cardListId: 7,
        order: 0,
        createdAt: "",
        createdBy: 3,
        dueTo: "",
        assignee: 2,
    },
];

export const initialComments = [
    {
        id: 1,
        text: "Comment",
        created_at: "",
        user_id: 1,
        card_id: 1

    },
    {
        id: 2,
        text: "Comment",
        created_at: "",
        user_id: 2,
        card_id: 1

    }
]
