import React, { useEffect, useState, useRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';

import {
  Box,
  TextField,
  IconButton,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeRequest } from "../../requests/makeRequest";

const ChatUI = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const handleSend = (e) => {
    console.log(input);
    if (input.trim() !== "") {
      setLoadingStatus(true)
      props.setMessages([
        ...props.messages,
        { id: new Date().getTime(), text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    if (props.messages[props.messages.length - 1].sender === "user") {
      makeRequest(props.apiKeysData.key, props.messages, props.setMessages);
    }
  }, [props.messages]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    setLoadingStatus(false)
  }, [props.messages]);

  return (
    <Box
      sx={{
        height: "400px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "shades.main",
        position: "relative",
      }}
    >
      <Box
        sx={{ flexGrow: 1, overflow: "auto", p: 2 }}
        className="no-scrollbar"
      >
        {props.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <Box ref={messagesEndRef} style={{ float: "left", clear: "both" }} />
      </Box>
      <Box sx={{ p: 2, backgroundColor: "green.light" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
              color="shades"
            />
          </Grid>
          <Grid item xs={2}>
            {loadingStatus ? <CircularProgress  size="2.5rem"/> :
              <IconButton color="shades" onClick={handleSend} disabled={input.trim() === "" || props.apiKeysData.isEntered === false}>
                <SendIcon />
              </IconButton>}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          backgroundColor: isBot ? "green.light" : "brown.light",
          borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
        }}
      >
        <Typography variant="p" sx={{ overflowWrap: "anywhere" }}>
          {message.text}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ChatUI;
