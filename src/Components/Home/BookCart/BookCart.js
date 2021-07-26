import React from "react";
import "./BookCart.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
  media: {
    height: 300,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BookCart({ book }) {
  const classes = useStyles();
  const history = useHistory();
  const { _id, imageURL } = book;
  const handleBook = (bookId) => {
    history.push(`/book/${bookId}`);
  };
  return (
    <Card className={classes.root} id="bookItem">
      <CardMedia
        className={classes.media}
        image={imageURL}
        title="Paella dish"
      />
      <img src={`/images/${_id}.png`} alt="" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {book?.AddEvents?.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {book?.AddEvents?.cost}
        </IconButton>
        <Button
          className=" ml-5 pr-5 pl-5"
          onClick={() => handleBook(_id)}
          variant="contained"
          id="vehicleBtn"
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
