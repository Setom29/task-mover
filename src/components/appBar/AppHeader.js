import { observer, inject } from "mobx-react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import BoardsSelect from "./BoardsSelect";
import AddBoardComponent from "./AddBoardComponent";
import imgLogo from "../../assets/logo-small-yellow-light.png";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AppHeader = inject("usersTable")( 
  observer((props) => {
    return (
      <AppBar position="static" color="shades">
        <Toolbar
          sx={{
            display: "flex",
            py: "10px",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "50%",
              display: "grid",
              gridTemplateColumns: "auto 1fr 1fr",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={imgLogo}
              alt="Logo"
              sx={{ borderRadius: "10px", objectFit: "cover" }}
            />
            <BoardsSelect />
            <AddBoardComponent />
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Typography variant="h6" component="div" color={"transparent.contrastText"}>
              {props.usersTable.currentItem.name}{" "}
              {props.usersTable.currentItem.surname}
            </Typography>
            <Link to="/">
              <IconButton>
                <AccountCircle  sx={{color: "transparent.contrastText"}}/>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    );
  })
);

export default AppHeader;
