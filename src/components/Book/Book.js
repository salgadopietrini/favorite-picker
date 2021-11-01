import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function Book(props) {
  const selectBook = () => {
    props.handleSelect(props.info);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 180, height: 350 }}>
        <CardHeader
          titleTypographyProps={{ variant: "body1", height: 50, fontSize: 12 }}
          title={
            props.info.title && props.info.title.length > 50
              ? props.info.title.slice(0, 50) + "..."
              : props.info.title
          }
          subheader={props.info.publishedDate && props.info.publishedDate}
        />

        <CardMedia
          component="img"
          width="150"
          height="180"
          image={props.info.imageLinks.thumbnail}
          alt="Book Cover"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={selectBook}>
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://twitter.com/intent/tweet?text=" +
                  "My favorite book is " +
                  `${props.info.title && props.info.title}` +
                  "!! <3333",
                "_blank"
              );
            }}
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
