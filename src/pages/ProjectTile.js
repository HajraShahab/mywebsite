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
    marginTop: "100px",
  },
  media: {
    paddingTop: "56.25%",
    width: "100%",
    height: "100%",
    minHeight: "200px",
    maxHeight: "500px",
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
    <Card className={classes.root} elevation={0}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          // height: "300px",
        }}
      >
        <Container maxWidth="lg">
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              style={{
                fontWeight: "900",
                fontSize: "60px",
                lineHeight: "72px",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "36px",
              }}
            >
              {bodyText}
            </Typography>
            <a href={link} style={{ marginTop: "24px" }} target="_blank">
              <Button
                size="medium"
                color={buttonColor}
                variant="outlined"
                disabled={comingSoon}
              >
                {buttonText}
              </Button>
            </a>
          </CardContent>
        </Container>
        <CardMedia className={classes.media} image={imagelink} />
      </Box>
    </Card>
  )
}
