import { Box, Button, InputLabel, TextField } from "@mui/material";
import { downloadObjectAsJson } from "../../utils/files";
import { observer, inject } from "mobx-react";
import { useState } from "react";

const arrAllTables = [
    "usersTable",
    "usersInBoardsTable",
    "boardsTable",
    "cardListsTable",
    "cardsTable",
    "commentsTable"
];

const Import = inject(...arrAllTables)(

    observer((props) => {

        const [isInputVisible, setIsInputVisible] = useState(false);

        const handleFileChange = function(e) {
            setIsInputVisible(false);
            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();
        
                reader.onload = (event) => {
                const fileContents = event.target.result;
        
                try {
                    const jsonData = JSON.parse(fileContents);

                    jsonData.forEach(item => {
                        props[item.table].updateData(item.data);
                    })
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
                };
        
                reader.readAsText(file);
            }
        }

        const handleKeyDown = function (event) {
            if (event.key === 'Escape') {
                setIsInputVisible(false);
              }
        }

        return (
        <Box>
            <TextField 
                accept=".json,application/json"
                id="input-file"
                type="file"
                sx={{display: isInputVisible ? "block" : "none"}}
                onChange={handleFileChange}
                onKeyDown={handleKeyDown}
            />
            <InputLabel htmlFor="input-file">
                <Button variant="outlined" 
                        sx={{width: "100%", 
                        borderRadius: "0", 
                        display: isInputVisible ? "none" : "block"}}
                        onClick={() => setIsInputVisible(true)}>
                    Import from JSON
                </Button>
            </InputLabel> 
        </Box>);
    }));

export default Import;