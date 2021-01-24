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
    marginTop: "40px",
    margin: 32,
  },
  media: {
    height: "500px",
    paddingTop: "56.25%",
  },
})

export default ({ title, bodyText, link, imagelink, comingSoon }) => {
  const classes = useStyles()

  let buttonColor
  let buttonText

  if (comingSoon) {
    buttonColor = "secondary"
    buttonText = "Coming Soon"
  } else {
    buttonColor = "primary"
    buttonText = "Read More"
  }

  return (
    <Card className={classes.root}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          background: "#333333",
        }}
      >
        <CardMedia
          style={{
            position: "static",
            width: "50%",
            height: "100%",
          }}
          src={imagelink}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            padding: "40px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              fontFamily: "Roboto",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "0.15px",
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
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "24px",
              letterSpacing: "0.15px",
              color: "#FFFFFF",
            }}
          >
            {bodyText}
          </Typography>
          <a
            href={link}
            style={{ marginLeft: "auto", marginTop: "auto" }}
            target="_blank"
          >
            <Button
              size="medium"
              color={buttonColor}
              variant="contained"
              disabled={comingSoon}
            >
              {buttonText}
            </Button>
          </a>
        </CardContent>
      </Box>
    </Card>
  )
}
