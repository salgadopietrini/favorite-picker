import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { height } from '@mui/system';




export default function Book(props) {
  

  const selectBook = () => {
    props.handleSelect(props.info);
  };

  

  
  return (
    <div>
    
      <Card sx={{ maxWidth: 180 }}>
        <CardHeader
          titleTypographyProps={{variant:'body1' }}
          title={props.info.title}
          subheader={props.info.data}
        />

        <CardMedia
          component="img"
          width="150"
          image={props.info.image}
          alt="Book Cover"
        />
      
      
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <FavoriteIcon onClick={selectBook} />
        </IconButton>
        <IconButton  aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}
