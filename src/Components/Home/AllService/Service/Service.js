import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const Service = ({ service }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 350,
    },
  }));
  const classes = useStyles();
  return (
    <Card className={classes.root} id="bookItem">
      <img
        src={service.imageURL}
        className="card-img-top img-fluid"
        alt="..."
        style={{ height: "300px" }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {service.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {service.price}
        </IconButton>
        <Link to={`/service/${service._id}`} style={{ textDecoration: "none" }}>
          <Button
            className=" ml-5 pr-5 pl-5"
            variant="contained"
            id="vehicleBtn"
          >
            Buy Now
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Service;
