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
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Toolbar variant="dense" style={{ backgroundColor: "transparent" }}>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginRight: "20px",
              color: "#FFB300",
            }}
            variant="h5"
          >
            EN
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginRight: "auto",
              color: "#FFB300",
            }}
            variant="h5"
          >
            JP
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginLeft: "30px",
              color: "#FFB300",
            }}
            variant="h5"
          >
            About
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginLeft: "30px",
              color: "#FFB300",
            }}
            variant="h5"
          >
            Projects
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginLeft: "30px",
              color: "#FFB300",
            }}
            variant="h5"
          >
            Blog
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginLeft: "30px",
              color: "#FFB300",
            }}
            variant="h5"
          >
            Vlog
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              marginLeft: "30px",
              color: "#FFB300",
            }}
            variant="h5"
          >
            Contact
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
            color: "#323232",
          }}
          variant="h4"
        >
          Meet Hajra!
        </Typography>
        <Box style={{ background: "rgb(51, 51, 51)", padding: "50px" }}>
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
            ROLE
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
            DATE
          </Typography>
        </Box>
        <Box
          style={{
            fontFamily: "Lora, serif",
            fontWeight: "100px",
            alignItems: "center",
            textAlign: "center",
            marginTop: "40px",
            padding: "40px",
            color: "#FFFFFF",
            background: "rgb(51, 51, 51)",
          }}
        >
          <Typography variant="body">Role</Typography>

          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              fontWeight: "400px",
              textAlign: "center",
              marginTop: "20px",
              color: "#FFFFFF",
            }}
            variant="h6"
          >
            Karachi | Lahore | Tokyo | Pittsburgh
          </Typography>
        </Box>
        <Box
          style={{
            fontFamily: "Lora, serif",
            fontWeight: "100px",
            alignItems: "center",
            textAlign: "center",
            marginTop: "40px",
            padding: "40px",
            color: "#FFFFFF",
            background: "rgb(51, 51, 51)",
          }}
        >
          <Typography variant="body">Role</Typography>

          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora, serif",
              fontWeight: "400px",
              textAlign: "center",
              marginTop: "20px",
              color: "#FFFFFF",
            }}
            variant="h6"
          >
            Karachi | Lahore | Tokyo | Pittsburgh
          </Typography>
        </Box>
        <Link to="/">Go back to the homepage</Link>
      </Box>
    </ThemeProvider>
  )
}
