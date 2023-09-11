import Close from "@mui/icons-material/Close";
import { Box, IconButton, Popover, Toolbar, Typography } from "@mui/material";
import ChatUI from "./ChatUI";

export default function ChatPopup(props) {
  const handleClose = () => props.setOpenPopup(false);
  return (
    <Box
      sx={{
        position: "fixed",
        width: "300px",
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
          justifyContent: "right",
          backgroundColor: "green.main",
        }}
      >
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Toolbar>
      <ChatUI />
    </Box>
  );
}
