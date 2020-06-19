// these are all the library imports on the top
import React from "react"
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
  return (
    // this is where all the code of the main page goes
    <ThemeProvider theme={createMuiTheme(myTheme)}>
      <img
        style={{
          opacity: "0.8",
          position: "fixed",
          top: "0",
          width: "auto",
          minWidth: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
        src="https://images.unsplash.com/photo-1563861141459-8d525c27a88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="Shibuya Crossing"
      />
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense" style={{ backgroundColor: "#FFFFFF" }}>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Lora",
              marginRight: "20px",
              color: "#CBA01C",
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
              fontFamily: "Lora",
              marginRight: "auto",
              color: "#CBA01C",
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
              fontFamily: "Lora",
              marginLeft: "20px",
              color: "#CBA01C",
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
              fontFamily: "Lora",
              marginLeft: "20px",
              color: "#CBA01C",
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
              fontFamily: "Lora",
              marginLeft: "20px",
              color: "#CBA01C",
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
              fontFamily: "Lora",
              marginLeft: "20px",
              color: "#CBA01C",
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
              fontFamily: "Lora",
              marginLeft: "20px",
              color: "#CBA01C",
            }}
            variant="h5"
          >
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
      <Box style={{ display: "flex", height: "auto", flex: "1 0 auto" }}>
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
              style={{ width: "200px", height: "200px" }}
              src="https://media-exp1.licdn.com/dms/image/C5603AQF_wD7eIHmZog/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=mwNm37Qxga4rCR90uI-r8YOMmt0lb_JqzPwW_rJJPGI"
            />
            <Typography
              style={{
                fontFamily: "Roboto",
                fontWeight: "fontWeightLight",
                fontSize: "50px",
                marginTop: "20px",
                color: "#fff",
              }}
              variant="h4"
            >
              Hajra Shahab
            </Typography>
          </Box>

          <Box
            style={{
              fontFamily: "Roboto",
              fontWeight: "fontWeightLight",
              alignItems: "center",
              textAlign: "center",
              padding: "10px",
              color: "#fff",
              background: "rgb(255, 255, 255, 0.5)",
            }}
          >
            <Typography variant="body">
              Hi, I’m Hajra Shahab, a multidisciplinary researcher with profound
              interest in data analytics, urban informatics policy, and design.
              I am a strong advocate of interdiscplinary collaborative approach
              to unlock unconventional solutions to some of the most pressing
              urban issues that cities face in the 21st century.
            </Typography>

            <Typography
              style={{
                href:
                  "https://fonts.googleapis.com/css2?family=Lora&display=swap",
                rel: "stylesheet",
                fontFamily: "Lora",
                fontWeight: "400px",
                textAlign: "center",
                marginTop: "20px",
              }}
              variant="h6"
            >
              Data Analytics | Public Policy | Cities | Transportation and
              Mobility
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
