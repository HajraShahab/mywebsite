import React from "react"
import { Link } from "gatsby"
import "./app.css"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
} from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
export default () => {
  const myTheme = {
    palette: {
      type: "dark",
      primary: {
        main: "#343434", // update color
      },
      secondary: {
        main: "#4F8CB3",
      },
    },
  }
  // this is where all the code of the main page goes
  return (
    <ThemeProvider theme={createMuiTheme(myTheme)}>
      <Box // not sure if this is the best way to add background color to the entire page
        style={{
          backgroundColor: "#121212",
          opacity: "1",
          position: "fixed",
          top: "0",
          width: "auto",
          minWidth: "100vw",
          height: "140vh",
          zIndex: "-1",
        }}
      ></Box>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Toolbar variant="dense" style={{ backgroundColor: "transparent" }}>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginRight: "20px",
                color: "#FFB300",
              }}
            >
              EN
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginRight: "auto",
                color: "#FFB300",
              }}
            >
              JP
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginLeft: "30px",
                color: "#FFB300",
              }}
            >
              About
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginLeft: "30px",
                color: "#FFB300",
              }}
            >
              Projects
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginLeft: "30px",
                color: "#FFB300",
              }}
            >
              Blog
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginLeft: "30px",
                color: "#FFB300",
              }}
            >
              Vlog
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora, serif",
                marginLeft: "30px",
                color: "#FFB300",
              }}
            >
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Typography
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "fontWeightLight",
            fontSize: "50px",
            textAlign: "center",
            marginTop: "20px",
            color: "#FFFFFF",
          }}
          variant="h4"
        >
          Meet Hajra!
        </Typography>
        <Box
          style={{
            background: "rgb(51, 51, 51)",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "20px",
              verticalAlign: "top",
            }}
            variant="h6"
          >
            ROLE
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "20px",
            }}
            variant="body"
          >
            Women in Transportation Fellow, 2020-2022
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "20px",
              verticalAlign: "top",
            }}
            variant="h6"
          >
            WORK
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "10px",
            }}
            variant="body"
          >
            Its hands were holograms that altered to match the convolutions of
            the Flatline as a construct.
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "10px",
            }}
            variant="h6"
          >
            DATE
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px",
            }}
            variant="body"
          >
            2020-2022
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
