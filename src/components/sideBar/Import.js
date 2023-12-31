import { Box, Button, InputLabel, TextField } from "@mui/material";
import { downloadObjectAsJson } from "../../utils/files";
import { observer, inject } from "mobx-react";
import { useState } from "react";
import { VisuallyHiddenInput } from "../../utils/styledComponents";

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

        const handleFileChange = function (e) {
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
            // <Box>
            //     <TextField 
            //         accept=".json,application/json"
            //         id="input-file"
            //         type="file"
            //         sx={{display: isInputVisible ? "block" : "none"}}
            // onChange={handleFileChange}
            // onKeyDown={handleKeyDown}
            //     />
            //     <InputLabel htmlFor="input-file">
            //         <Button variant="outlined"
            //         color="shades" 
            //                 sx={{width: "100%", 
            //                 borderRadius: "0", 
            //                 display: isInputVisible ? "none" : "block", 
            //                 whiteSpace: "normal "}}
            //                 onClick={() => setIsInputVisible(true)}>
            //             Import data
            //         </Button>
            //     </InputLabel> 
            // </Box>
            <Button component="label" variant="contained" color="transparent">
                Import data
                <VisuallyHiddenInput type="file"
                    onChange={handleFileChange}
                    onKeyDown={handleKeyDown} />
            </Button>
        );


    }));

export default Import;