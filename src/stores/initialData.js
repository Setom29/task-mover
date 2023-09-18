export const initialUsersData = [
  {
    id: 1,
    name: "John",
    surname: "Smith",
    email: "john.smith@example.com",
    password: "securePassword",
  },
  {
    id: 2,
    name: "Sarah",
    surname: "Rosenzweig",
    email: "sarah@example.com",
    password: "strongPassword",
  },
  {
    id: 3,
    name: "Lisa",
    surname: "Davis",
    email: "lisa.davis@example.com",
    password: "lisaPassword",
  },
  {
    id: 4,
    name: "Tom",
    surname: "Cruz",
    email: "notpenelope@example.com",
    password: "brownie123",
  },
  {
    id: 5,
    name: "Emily",
    surname: "Wilson",
    email: "emily.wilson@example.com",
    password: "emoPass",
  },

  {
    id: 6,
    name: "James",
    surname: "Brown",
    email: "jaymemarron@example.com",
    password: "brownPass",
  },

  {
    id: 7,
    name: "Leo",
    surname: "Rosenzweig",
    email: "iamlittleleo@example.com",
    password: "jjdljEFs3l!slk",
  },
];

export const initialUsersInBoardsData = [
  {
      "id": 1,
      "userId": 1,
      "boardId": 1
  },
  {
      "id": 2,
      "userId": 2,
      "boardId": 1
  },
  {
      "id": 3,
      "userId": 3,
      "boardId": 1
  },
  {
      "id": 4,
      "userId": 4,
      "boardId": 1
  },
  {
      "id": 5,
      "userId": 2,
      "boardId": 2
  },
  {
      "id": 6,
      "userId": 3,
      "boardId": 3
  },
  {
      "id": 7,
      "userId": 2,
      "boardId": 4
  },
  {
      "id": 8,
      "userId": 7,
      "boardId": 4
  },
  {
      "id": 9,
      "userId": 1,
      "boardId": 2
  },
  {
      "id": 10,
      "userId": 3,
      "boardId": 2
  },
  {
      "id": 11,
      "userId": 4,
      "boardId": 2
  },
  {
      "id": 12,
      "userId": 5,
      "boardId": 2
  },
  {
      "id": 13,
      "userId": 6,
      "boardId": 2
  },
  {
      "id": 14,
      "userId": 1,
      "boardId": 3
  },
  {
      "id": 15,
      "userId": 2,
      "boardId": 3
  }
]

export const initialBoardsData = [
  {
      "id": 1,
      "name": "Website Development",
      "createdBy": 1
  },
  {
      "id": 2,
      "name": "Media Content Production",
      "createdBy": 2
  },
  {
      "id": 3,
      "name": "Customer Support and Ticketing",
      "createdBy": 3
  },
  {
      "id": 4,
      "name": "Little Leo's Time-table",
      "createdBy": 2
  }
];

export const initialCardListsData = [
  {
      "id": 1,
      "name": "Backlog",
      "order": 0,
      "boardId": 1
  },
  {
      "id": 2,
      "name": "To Do",
      "order": 1,
      "boardId": 1
  },
  {
      "id": 3,
      "name": "In Progress",
      "order": 2,
      "boardId": 1
  },
  {
      "id": 4,
      "name": "In Review",
      "order": 3,
      "boardId": 1
  },
  {
      "id": 5,
      "name": "Done",
      "order": 4,
      "boardId": 1
  },
  {
      "id": 6,
      "name": "Sunday",
      "order": 0,
      "boardId": 4
  },
  {
      "id": 7,
      "name": "Monday",
      "order": 1,
      "boardId": 4
  },
  {
      "id": 8,
      "name": "Tuesday",
      "order": 2,
      "boardId": 4
  },
  {
      "id": 9,
      "name": "Wednesday",
      "order": 3,
      "boardId": 4
  },
  {
      "id": 10,
      "name": "Thursday",
      "order": 4,
      "boardId": 4
  },
  {
      "id": 11,
      "name": "Friday",
      "order": 5,
      "boardId": 4
  },
  {
      "id": 12,
      "name": "Ideation",
      "order": 0,
      "boardId": 2
  },
  {
      "id": 13,
      "name": "Planning",
      "order": 1,
      "boardId": 2
  },
  {
      "id": 14,
      "name": "In Progress",
      "order": 2,
      "boardId": 2
  },
  {
      "id": 15,
      "name": "Review",
      "order": 3,
      "boardId": 2
  },
  {
      "id": 16,
      "name": "Published",
      "order": 4,
      "boardId": 2
  },
  {
      "id": 17,
      "name": "New Tickets",
      "order": 0,
      "boardId": 3
  },
  {
      "id": 18,
      "name": "Triaged",
      "order": 1,
      "boardId": 3
  },
  {
      "id": 19,
      "name": "In Progress",
      "order": 2,
      "boardId": 3
  },
  {
      "id": 20,
      "name": "Pending Customer ",
      "order": 3,
      "boardId": 3
  },
  {
      "id": 21,
      "name": "Resolved",
      "order": 4,
      "boardId": 3
  }
];

export const initialCardsData = [
  {
      "id": 2,
      "name": "17:00 going to quiz game ",
      "description": "",
      "cardListId": 6,
      "order": 2,
      "createdAt": 1694982286972,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 3,
      "name": "15:00 guitar studies",
      "description": "",
      "cardListId": 8,
      "order": 0,
      "createdAt": 1694982315558,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 4,
      "name": "15:00 guitar studies",
      "description": "",
      "cardListId": 10,
      "order": 0,
      "createdAt": 1694982324457,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 5,
      "name": "16:00 swimming pool",
      "description": "",
      "cardListId": 7,
      "order": 0,
      "createdAt": 1694982351390,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 7,
      "name": "19:00 phone Granny",
      "description": "",
      "cardListId": 9,
      "order": 1,
      "createdAt": 1694982394500,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 8,
      "name": "18:00 Young Pythonist club",
      "description": "",
      "cardListId": 8,
      "order": 1,
      "createdAt": 1694982444652,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 14,
      "name": "Buy hala for Sabbath",
      "description": "",
      "cardListId": 11,
      "order": 1,
      "createdAt": 1694982522377,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 6,
      "name": "16:00 swimming pool",
      "description": "",
      "cardListId": 9,
      "order": 0,
      "createdAt": 1694982361277,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 1,
      "name": "15:00 guitar studies ",
      "description": "",
      "cardListId": 6,
      "order": 0,
      "createdAt": 1694982260692,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 9,
      "name": "Homework",
      "description": "",
      "cardListId": 6,
      "order": 2,
      "createdAt": 1694982479949,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 10,
      "name": "Homework",
      "description": "",
      "cardListId": 7,
      "order": 2,
      "createdAt": 1694982489909,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 11,
      "name": "Homework",
      "description": "",
      "cardListId": 8,
      "order": 2,
      "createdAt": 1694982494966,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 12,
      "name": "Homework",
      "description": "",
      "cardListId": 9,
      "order": 2,
      "createdAt": 1694982499200,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 13,
      "name": "Homework",
      "description": "",
      "cardListId": 10,
      "order": 2,
      "createdAt": 1694982503594,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 17,
      "name": "Blog Section Integration",
      "description": "Integrate the blog section into the website with the latest posts displayed on the homepage",
      "cardListId": 4,
      "order": 0,
      "createdAt": 1694982635856,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 16,
      "name": "Contact Form Enhancement",
      "description": "Enhance the contact form to include new fields and improve validation",
      "cardListId": 3,
      "order": 0,
      "createdAt": 1694982601603,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 15,
      "name": "Homepage Redesign",
      "description": "Redesign the website's homepage to improve user engagement and aesthetics",
      "cardListId": 4,
      "order": 2,
      "createdAt": 1694982558221,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 19,
      "name": "Interview with Local Author",
      "description": "Create a video interview with a local author about their latest book",
      "cardListId": 15,
      "order": 0,
      "createdAt": 1694982723058,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 18,
      "name": "Article: \"10 Tips for Healthy Eating\"",
      "description": "Write an article about healthy eating habits",
      "cardListId": 16,
      "order": 0,
      "createdAt": 1694982705192,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 20,
      "name": "Economic Trends 2023",
      "description": "Design an infographic summarizing key economic trends for the year",
      "cardListId": 15,
      "order": 1,
      "createdAt": 1694982744472,
      "createdBy": {
          "id": 2,
          "name": "Sarah",
          "surname": "Rosenzweig",
          "email": "sarah@example.com",
          "password": "strongPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 23,
      "name": "Technical Issue with Product",
      "description": "Customer reports a technical problem with a product",
      "cardListId": 20,
      "order": 0,
      "createdAt": 1694982858244,
      "createdBy": {
          "id": 3,
          "name": "Lisa",
          "surname": "Davis",
          "email": "lisa.davis@example.com",
          "password": "lisaPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 21,
      "name": "Account Login Issue",
      "description": "Customer can't log in to their account; needs assistance",
      "cardListId": 20,
      "order": 1,
      "createdAt": 1694982828898,
      "createdBy": {
          "id": 3,
          "name": "Lisa",
          "surname": "Davis",
          "email": "lisa.davis@example.com",
          "password": "lisaPassword"
      },
      "dueTo": null,
      "assignee": null
  },
  {
      "id": 22,
      "name": "Billing Inquiry",
      "description": "Customer has a question about their recent invoice",
      "cardListId": 20,
      "order": 2,
      "createdAt": 1694982842550,
      "createdBy": {
          "id": 3,
          "name": "Lisa",
          "surname": "Davis",
          "email": "lisa.davis@example.com",
          "password": "lisaPassword"
      },
      "dueTo": null,
      "assignee": null
  }
];

export const initialComments = [
  {
      "id": 5,
      "text": "Completed coding for new form fields",
      "created_at": 1694984482708,
      "user_id": 3,
      "card_id": 16
  },
  {
      "id": 6,
      "text": "Designing the infographic",
      "created_at": 1694984547481,
      "user_id": 3,
      "card_id": 20
  },
  {
      "id": 7,
      "text": "Investigating the technical issue",
      "created_at": 1694984622231,
      "user_id": 3,
      "card_id": 23
  },
  {
      "id": 8,
      "text": "Identified the issue and working on a solution",
      "created_at": 1694984630794,
      "user_id": 3,
      "card_id": 23
  },
  {
      "id": 9,
      "text": "Technical issue resolved. Awaiting confirmation from the customer",
      "created_at": 1694984640582,
      "user_id": 3,
      "card_id": 23
  },
  {
      "id": 10,
      "text": "Testing the form. Found a minor bug; fixing it",
      "created_at": 1694984800460,
      "user_id": 4,
      "card_id": 16
  },
  {
      "id": 11,
      "text": "Bug fixed and tested. Ready for review",
      "created_at": 1694984825023,
      "user_id": 3,
      "card_id": 16
  },
  {
      "id": 12,
      "text": "Started working on the wireframe",
      "created_at": 1694984848445,
      "user_id": 1,
      "card_id": 15
  },
  {
      "id": 13,
      "text": "I've updated the logo image. Please review",
      "created_at": 1694984874999,
      "user_id": 2,
      "card_id": 15
  },
  {
      "id": 14,
      "text": "Homepage wireframe ready for review",
      "created_at": 1694984891410,
      "user_id": 1,
      "card_id": 15
  },
  {
      "id": 15,
      "text": "Homepage redesign approved. Moving to \"Done.\"",
      "created_at": 1694984906042,
      "user_id": 3,
      "card_id": 15
  },
  {
      "id": 16,
      "text": "Integrated blog section on the homepage",
      "created_at": 1694984942494,
      "user_id": 2,
      "card_id": 17
  },
  {
      "id": 17,
      "text": "Blog posts not loading correctly; investigating",
      "created_at": 1694984990210,
      "user_id": 4,
      "card_id": 17
  },
  {
      "id": 18,
      "text": "Started writing the article",
      "created_at": 1694985013187,
      "user_id": 5,
      "card_id": 18
  },
  {
      "id": 19,
      "text": "Completed the first draft",
      "created_at": 1694985034950,
      "user_id": 6,
      "card_id": 18
  },
  {
      "id": 20,
      "text": "Edited and added images. Ready for review",
      "created_at": 1694985055294,
      "user_id": 2,
      "card_id": 18
  },
  {
      "id": 21,
      "text": "Article approved. Moving to \"Published.\"",
      "created_at": 1694985080049,
      "user_id": 1,
      "card_id": 18
  },
  {
      "id": 22,
      "text": "Conducted the interview",
      "created_at": 1694985118739,
      "user_id": 2,
      "card_id": 19
  },
  {
      "id": 23,
      "text": "Video editing in progress",
      "created_at": 1694985143012,
      "user_id": 3,
      "card_id": 19
  },
  {
      "id": 24,
      "text": "Final editing and adding captions. Almost ready",
      "created_at": 1694985183431,
      "user_id": 4,
      "card_id": 19
  },
  {
      "id": 25,
      "text": "Proofreading and fact-checking",
      "created_at": 1694985263356,
      "user_id": 4,
      "card_id": 20
  },
  {
      "id": 26,
      "text": "Infographic completed and reviewed. Ready for publication",
      "created_at": 1694985289462,
      "user_id": 2,
      "card_id": 20
  },
  {
      "id": 27,
      "text": "Contacted the customer for more details",
      "created_at": 1694985316548,
      "user_id": 2,
      "card_id": 21
  },
  {
      "id": 28,
      "text": "Customer provided the necessary information. Issue identified as a password reset request",
      "created_at": 1694985332988,
      "user_id": 2,
      "card_id": 21
  },
  {
      "id": 29,
      "text": "Password reset completed. Awaiting confirmation from the customer",
      "created_at": 1694985344975,
      "user_id": 2,
      "card_id": 21
  },
  {
      "id": 30,
      "text": "Reviewed the invoice and sent an explanation to the customer",
      "created_at": 1694985375214,
      "user_id": 1,
      "card_id": 22
  },
  {
      "id": 31,
      "text": "My darling, your teacher phoned me - I guess you missed your guitar studies ",
      "created_at": 1694985474782,
      "user_id": 2,
      "card_id": 1
  },
  {
      "id": 32,
      "text": "Maaaaam, I overslept. And I hate music you know",
      "created_at": 1694985529840,
      "user_id": 7,
      "card_id": 1
  },
  {
      "id": 33,
      "text": "We'll talk about it when I come home",
      "created_at": 1694985594707,
      "user_id": 2,
      "card_id": 1
  },
  {
      "id": 34,
      "text": "Maths, English",
      "created_at": 1694985637373,
      "user_id": 2,
      "card_id": 9
  },
  {
      "id": 35,
      "text": "Maths, Hebrew, History",
      "created_at": 1694985650833,
      "user_id": 2,
      "card_id": 10
  },
  {
      "id": 36,
      "text": "Hebrew, Sciences",
      "created_at": 1694985681188,
      "user_id": 2,
      "card_id": 11
  },
  {
      "id": 37,
      "text": "Maths",
      "created_at": 1694985688141,
      "user_id": 2,
      "card_id": 12
  },
  {
      "id": 38,
      "text": "Maths, Sciences",
      "created_at": 1694985700158,
      "user_id": 2,
      "card_id": 13
  }
]