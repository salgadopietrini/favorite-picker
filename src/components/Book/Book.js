import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';




export default function Book(props) {
  

  const selectBook = () => {
    props.handleSelect(props.info);
  };

  
  return (
    <div>
    
      <Card sx={{ maxWidth: 150 }}>
      
      <div>
        <CardHeader
          title={props.info.title}
          subheader={props.info.data}
        />
        <CardMedia
          component="img"
          width="200"
          image={props.info.image}
          alt="Book Cover"
        />
      </div>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={selectBook} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}
