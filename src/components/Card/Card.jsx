import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Card.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card
      className={`${classes.root} cardding`}
      variant="outlined"
      style={{ maxWidth: "400px", margin: "auto"}}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.CountryCode}
        </Typography>
        <Typography variant="h5" component="h2" style={{ padding: "10px 0" }}>
          {props.Country}
        </Typography>

        <Typography variant="body2" component="p">
          CountryCode: {props.CountryCode}
          <br />
          Slug: {props.Slug}
          <br />
          NewConfirmed: {props.NewConfirmed}
          <br />
          TotalConfirmed: {props.TotalConfirmed}
          <br />
          NewDeaths: {props.NewDeaths}
          <br />
          TotalDeaths: {props.TotalDeaths}
          <br />
          NewRecovered: {props.NewRecovered}
          <br />
          TotalRecovered: {props.TotalRecovered}
          <br />
          Date: {props.Date}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
