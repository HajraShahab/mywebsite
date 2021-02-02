import React from "react"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
  Paper,
  Link,
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
    marginTop: "40px",
    margin: 32,
    flex: 1,
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
    buttonColor = "default"
    buttonText = "Read More"
  }

  return (
    <Card className={classes.root} elevation={0}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          style={{
            height: "320px",
          }}
          image={imagelink}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            style={{
              fontSize: "24px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            {bodyText}
          </Typography>
          <Link
            href={link}
            style={{ marginTop: "32px" }}
            target="_blank"
            color="default"
          >
            <Typography>
              {buttonText}{" "}
              <svg
                width="17"
                height="8"
                viewBox="0 0 17 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 4H16" stroke="black" stroke-width="0.5" />
                <path d="M12 1L16 4L12 7" stroke="black" stroke-width="0.5" />
              </svg>
            </Typography>
          </Link>
        </CardContent>
      </Box>
    </Card>
  )
}
