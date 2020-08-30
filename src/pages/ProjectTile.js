import React from "react"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
  Paper,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
  },
  media: {
    height: "500px",
    paddingTop: "56.25%",
  },
})

export default ({
  title,
  // bodyText,
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardMedia
          style={{
            position: "static",
            width: "1000px",
            height: "300px",
          }}
          image="https://pbs.twimg.com/profile_images/1268930034330488840/E4l_gP_c_400x400.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              position: "static",
              width: "400px",
              height: "96px",
              left: "762px",
              top: "1043px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "32px",
              lineHeight: "48px",
              letterSpacing: "0.25px",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              width: "329px",
              height: "77px",
              left: "762px",
              top: "1156px",

              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.15px",
              color: "#FFFFFF",
            }}
          >
            This is a placeholder for the body prop of Project Tile
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          style={{
            position: "static",
            width: "177.42px",
            height: "56px",
            left: "985px",
            background: "#FFB300",
            borderRadius: "4px",

            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "24px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}
