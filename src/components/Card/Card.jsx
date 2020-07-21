import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{maxWidth: "400px"}}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          CountryCode
        </Typography>
        <Typography variant="h5" component="h2" style={{padding: "10px 0"}} >
          CountryName
        </Typography>

        <Typography variant="body2" component="p">
        NewConfirmed: 18
        <br />
        TotalConfirmed: 299
        <br />
        NewDeaths: 1
        <br />
        TotalDeaths: 7
        <br />
        NewRecovered: 0
        <br />
        TotalRecovered: 10
        <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
