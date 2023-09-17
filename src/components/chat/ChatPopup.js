import Close from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { Box, IconButton, Toolbar, TextField, Tooltip } from "@mui/material";
import ChatUI from "./ChatUI";
import { useState } from "react";

export default function ChatPopup(props) {

  const handleClose = () => props.setOpenPopup(false);
  /*
   * change api key value state
   */
  const handleChange = (e) => {
    props.setApiKeysData({ ...props.apiKeysData, key: e.target.value });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        width: "400px",
        height: " fit-content",
        bottom: 20,
        right: 20,
        backgroundColor: "shades.main",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "green.main",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <TextField
            id="gpt-api-key-input"
            label=" OpenAI API Key:"
            type="password"
            autoComplete="current-password"
            size="small"
            color="shades"
            onChange={handleChange}
            value={props.apiKeysData.key}
            disabled={props.apiKeysData.isEntered}
          />
          {props.apiKeysData.isEntered ? (
            <Tooltip title="Edit">
              <IconButton
                onClick={() =>
                  props.setApiKeysData({ ...props.apiKeysData, isEntered: false })
                }
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Done">
              <IconButton
                onClick={() => {
                  props.setApiKeysData({ ...props.apiKeysData, isEntered: true });
                }}
              >
                <DoneIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Toolbar>
      <ChatUI
        messages={props.messages}
        setMessages={props.setMessages}
        apiKeysData={props.apiKeysData}
      />
    </Box>
  );
}
