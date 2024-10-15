import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
// import Image from "./Image";
const Info = ({ data }) => {
  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={data.image} />
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            >
              Age: {data.age}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Info;
