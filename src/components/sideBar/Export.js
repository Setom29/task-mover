import { Button } from "@mui/material";
import { downloadObjectAsJson } from "../../utils/files";
import { observer, inject } from "mobx-react";

const arrAllTables = [
    "usersTable",
    "usersInBoardsTable",
    "boardsTable",
    "cardListsTable",
    "cardsTable",
    "commentsTable"
];

const Export = inject(...arrAllTables)(
    observer((props) => {

    const saveToFile = function() {
        const arrToExport = arrAllTables.map(table => {
            return {table: table, data: props[table].data}
        });
        downloadObjectAsJson(arrToExport, "export"+new Date().toJSON().replaceAll(":","-"))
    }

    return ( 
        <Button variant="contained" color="transparent" onClick={saveToFile} sx={{width: "100%", borderRadius: "0"}}>Export data</Button>
     );
    }));

export default Export;