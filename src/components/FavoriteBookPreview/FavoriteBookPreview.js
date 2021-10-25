import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function FavoriteBookPreview(props) {
  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <img alt="Book Cover" src={props.info.image} width="100px"></img>
        <Fab size="small" color="primary" aria-label="delete">
          <HighlightOffIcon />
        </Fab>
      </Box>
    </div>
  );
}
