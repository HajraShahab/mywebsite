import React from "react"
import "./app.css"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
  Paper,
} from "@material-ui/core"
import { Helmet } from "react-helmet"
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
  return (
    <ThemeProvider theme={createMuiTheme(myTheme)}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HShahab</title>
      </Helmet>
      <img
        style={{
          opacity: "1",
          position: "fixed",
          top: "0",
          width: "auto",
          minWidth: "100vw",
          height: "140vh",
          zIndex: "-1",
        }}
        src="https://images.unsplash.com/photo-1563861141459-8d525c27a88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="Shibuya Crossing"
      />
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Toolbar variant="dense" style={{ backgroundColor: "transparent" }}>
          {/* <Typography
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
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Paper
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          background: "transparent",
        }}
      >
        <Container maxWidth="sm">
          <Box
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "32px",
            }}
          >
            <Avatar
              style={{ width: "240px", height: "240px" }}
              src="https://pbs.twimg.com/profile_images/1268930034330488840/E4l_gP_c_400x400.jpg"
            />
            <Typography
              style={{
                fontFamily: "Roboto, sans-serif",
                marginTop: "24px",
                textAlign: "center",
              }}
              variant="h2"
            >
              Hajra Shahab
            </Typography>
          </Box>

          <Box
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "center",
              textAlign: "center",
              padding: "10px",
              background: "rgb(60, 60, 60, 0.4)",
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              style={{
                fontSize: "18px",
              }}
            >
              Hi, I’m Hajra Shahab, a multidisciplinary researcher with profound
              interest in data analytics, urban informatics policy, and design.
              I am a strong advocate of interdiscplinary collaborative approach
              to unlock unconventional solutions to some of the most pressing
              urban issues that cities face in the 21st century.
            </Typography>

            <Typography
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "18px",
              }}
              variant="body1"
            >
              Karachi | Lahore | Tokyo | Pittsburgh
            </Typography>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  )
}
