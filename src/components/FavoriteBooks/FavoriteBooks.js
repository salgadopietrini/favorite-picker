import React from "react";
import FavoriteBookPreview from "../FavoriteBookPreview/FavoriteBookPreview";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FavoriteBooks(props) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Stack direction="row" spacing={2}>
        {props.list.map((elem) => (
          <Item>
            <FavoriteBookPreview
              info={elem}
              key={Math.floor(Math.random() * 100000000)}
              handleDelete={props.handleDelete}
            />
          </Item>
        ))}
      </Stack>
    </div>
  );
}
