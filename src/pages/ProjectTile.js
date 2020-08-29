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
    maxWidth: 345,
  },
  media: {
    height: 140,
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
            width: "400px",
            height: "200px",
          }}
          image="https://pbs.twimg.com/profile_images/1268930034330488840/E4l_gP_c_400x400.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a placehoder for the body prop of Project Tile
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
