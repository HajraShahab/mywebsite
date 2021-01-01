import React from "react"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
  Paper,
} from "@material-ui/core"
import "./app.css"
import ProjectTile from "./ProjectTile.js"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
export default () => {
  const myTheme = {
    palette: {
      type: "dark",
      primary: {
        main: "#FFB300", // update color
      },
      secondary: {
        main: "#343434",
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
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Courier New",
              color: "#FFB300",
              marginLeft: "900px"
            }}
            variant="h6"
          >
            Projects
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Courier New",
              color: "#FFB300",
              marginLeft: "auto"
            }}
            variant="h6"
          >
            Blog
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Courier New",
              color: "#FFB300",
              marginLeft: "auto"
            }}
            variant="h6"
          >
            About
          </Typography>
          <Typography
            style={{
              href:
                "https://fonts.googleapis.com/css2?family=Lora&display=swap",
              rel: "stylesheet",
              fontFamily: "Courier New",
              color: "#FFB300",
              marginLeft: "auto"
            }}
            variant="h6"
          >
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          background: "transparent",
        }}
      >
        <Container maxWidth="md">
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
              style={{
                width: "200px",
                height: "200px",
              }}
              src="https://mobility21.cmu.edu/wp-content/uploads/2020/04/2020-2022-Women-in-Transportation-Fello-Hajra-Shahab-768x576.jpg"
            />
            <Typography
              style={{
                fontFamily: "Roboto, sans-serif",
                marginTop: "24px",
                textAlign: "center",
                fontFamily: "Courier New",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "50px",
                lineHeight: "61px",
                textAlign: "center",
                color: "#FFB300",
              }}
              variant="h2"
            >
              Hajra Shahab
            </Typography>
          </Box>

          <Box
            style={{
              maxWidth: "1000px",
              background: "#333333",
              opacity: "0.8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px",
              background: "rgb(60, 60, 60, 0.4)",
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              style={{
                maxWidth: "1000px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "light",
                fontSize: "20px",
                lineHeight: "26px",

                display: "flex",
                alignItems: "center",
                letterSpacing: "0.15px",
                color: "#FFFFFF",
              }}
            >
              Hi, I am a multidisciplinary researcher currently pursuing a
              Master of Science in Public Policy and Management (MSPPM) at
              Carnegie Mellon University- Heinz College of Information Systems
              and Public Policy with a specialization in Smart Communities.
            </Typography>

            <Typography
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "18px",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "Courier New",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                letterSpacing: "4.5px",
                textTransform: "uppercase",
                color: "#FFB300",
              }}
              variant="overline"
            >
              CITIES | TECH | DESIGN | DATA-DRIVEN POLICYMAKING
            </Typography>
          </Box>
        </Container>
      </Paper>

      {/* Project Tile section, this wil become bigger as we add project Tiles */}
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          background: "#171717",
          paddingTop: "40px",
          paddingBottom: "40px",
          borderRadius: 0,
          marginTop: "40px",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            style={{
              color: "#FFB300",
              textAlign: "center",
              fontFamily: "Courier New",
            }}
          >
            Projects
          </Typography>
          <ProjectTile
            title="SimpSymps"
            bodyText="A health symptom checker that allows users to self-diagnose health problems, learn about possible treatments, and find nearby hospitals and pharmacies if required."
            link="https://github.com/HajraShahab"
            image="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          />
          <ProjectTile
            title="How transportation systems have evolved in Pakistan"
            bodyText="It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War "
            // src='' // src for image
            comingSoon={true}
          />
        </Container>
      </Paper>
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          background: "#171717",
          paddingTop: "40px",
          paddingBottom: "40px",
          borderRadius: 0,
          marginTop: "40px",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            style={{
              color: "#FFB300",
              textAlign: "center",
              fontFamily: "Courier New",
            }}
          >
            Blog
          </Typography>
          <ProjectTile
            title="Karachi’s Urban Planning: An Abysmal State"
            bodyText="A health symptom checker that allows users to self-diagnose health problems, learn about possible treatments, and find nearby hospitals and pharmacies if required."
            link="https://medium.com/@hajrashahab/about"
            image="https://static.pakwheels.com/2020/06/53b466e674bfd.jpg"
          />
          <ProjectTile
            title="How transportation systems have evolved in Pakistan"
            bodyText="It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War "
            // src='' // src for image
            comingSoon={true}
          />
        </Container>
      </Paper>

      {/* Footer */}
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          background: "#828282",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderRadius: 0,
        }}
      >
        <Container maxWidth="xs" style={{ width: "100%" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <a // The <a> tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the <a> element is the href attribute, which indicates the link's destination. By default, links will appear as follows in all browsers: An unvisited link is underlined and blue.
              target="__blank" // this tells the browser to open this link in a new tab
              href="https://www.linkedin.com/in/hajrashahab/" //  The href attribute specifies the URL of the page the link goes to. Tip: You can use href="#top" or href="#" to link to the top of the current page
            >
              <img // standard img tag in HTML (this is used internally by Avatar in material ui)
                src="LinkedInLogo.svg"
                style={{ width: "40px", height: "40px" }}
              />
            </a>

            <a target="__blank" href="mailto:hajrashahab05@gmail.com">
              <img
                src="EmailLogo2.svg"
                style={{ width: "40px", height: "40px" }}
              />
            </a>

            <a target="__blank" href="https://twitter.com/HajraShahab">
              <img
                src="twitterLogo.svg"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
            <a target="__blank" href="https://github.com/HajraShahab">
              <img
                src="githubLogo.svg"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
            <a target="__blank" href="https://medium.com/@hajrashahab">
              <img
                src="MediumLogo.svg"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  )
}
