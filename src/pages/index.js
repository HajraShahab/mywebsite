import React from "react"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
  Paper,
  Button,
} from "@material-ui/core"
import "./app.css"
import ProjectTile from "./ProjectTile"
import BlogTile from "./blogTile"

import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

const Lato = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Lato'),
    local('Lato-Regular'),
    url(./fonts/Lato/Lato-Regular.ttf) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}
console.log(Lato)

export default () => {
  const myTheme = createMuiTheme({
    typography: {
      fontFamily: "Lato, serif",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [Lato],
        },
      },
    },
  })

  return (
    <ThemeProvider theme={myTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hajra Shahab</title>
      </Helmet>
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          background: "#f8f7f7",
        }}
      >
        <Container>
          <AppBar
            position="static"
            elevation={0}
            style={{
              backgroundColor: "#f8f7f7",
              paddingTop: 80,
              marginBottom: 100,
            }}
          >
            <Toolbar style={{ color: "#636363" }}>
              <Typography variant="h6" mr="auto">
                Hajra Shahab
              </Typography>
              <Typography
                style={{
                  marginLeft: "auto",
                }}
                variant="h6"
              >
                Projects
              </Typography>
              <Typography
                style={{
                  marginLeft: 44,
                }}
                variant="h6"
              >
                Blog
              </Typography>
              <Typography
                style={{
                  marginLeft: "44px",
                }}
                variant="h6"
              >
                About
              </Typography>
              <Typography
                style={{
                  marginLeft: "44px",
                }}
                variant="h6"
              >
                Contact
              </Typography>
            </Toolbar>
          </AppBar>

          <Typography
            variant="body1"
            gutterBottom
            style={{
              maxWidth: "1000px",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "51.2px",
              marginLeft: 24,
              marginBottom: 300,
            }}
          >
            Hi, I am an aspiring data scientist currently pursuing a Master of
            Science in Public Policy and Management (MSPPM) at Carnegie Mellon
            University- Heinz College of Information Systems and Public Policy.
            I have a profound interest in data analytics, machine learning,
            urban informatics, and public interest technologies.
          </Typography>

          <Button
            style={{
              marginLeft: 24,
              marginBottom: 90,
            }}
            startIcon={
              <svg
                width="4"
                height="33"
                viewBox="0 0 4 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.82322 32.1768C1.92086 32.2744 2.07915 32.2744 2.17678 32.1768L3.76777 30.5858C3.8654 30.4882 3.8654 30.3299 3.76777 30.2322C3.67014 30.1346 3.51185 30.1346 3.41421 30.2322L2 31.6464L0.585788 30.2322C0.488157 30.1346 0.329865 30.1346 0.232234 30.2322C0.134603 30.3299 0.134603 30.4882 0.232234 30.5858L1.82322 32.1768ZM1.75 1.09279e-08L1.75 32L2.25 32L2.25 -1.09279e-08L1.75 1.09279e-08Z"
                  fill="black"
                />
              </svg>
            }
          >
            See Projects
          </Button>
        </Container>
      </Paper>

      {/* Project Tile section, this wil become bigger as we add project Tiles */}
      <Paper
        elevation={0}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          flex: "1 0 auto",
          paddingTop: "40px",
          paddingBottom: "40px",
          borderRadius: 0,
          marginTop: "40px",
        }}
      >
        <ProjectTile
          title="SimpSymps"
          bodyText="A health symptom checker that allows users to self-diagnose health problems, learn about possible treatments, and find nearby hospitals and pharmacies if required."
          link="https://github.com/HajraShahab"
          imagelink="https://images.unsplash.com/photo-1540663108393-2067a006e515?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
        />
        <ProjectTile
          title="Understanding sex-related differences in income using NLSY97 (National Longitudinal Survey of Youth, 1997 cohort) data set"
          bodyText="Is there a significant difference in income between men and women? Does the difference vary depending on other factors(e.g., education, marital status, criminal history, drug use, childhood household factors, profession, etc.)"
          imagelink="https://images.unsplash.com/photo-1596410466756-2ef5ca9f6c81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        />
      </Paper>
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
          paddingTop: "40px",
          paddingBottom: "40px",
          borderRadius: 0,
          marginTop: "40px",
        }}
      >
        <Container maxWidth="md" display="flex">
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
            }}
          >
            Blog
          </Typography>
          <Box display="flex">
            <BlogTile
              title="Karachi’s Urban Planning: An Abysmal State"
              bodyText="Karachi — the third-largest city in the world with a population of 16 million is on the brink of irreversible urban decay."
              link="https://medium.com/@hajrashahab/about"
              image="https://static.pakwheels.com/2020/06/53b466e674bfd.jpg"
            />
            <BlogTile
              title="How transportation systems have evolved in Pakistan"
              bodyText="It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War "
              // src='' // src for image
              comingSoon={true}
            />
          </Box>
        </Container>
      </Paper>

      {/* Footer */}
      <Paper
        elevation={0}
        style={{
          display: "flex",
          height: "auto",
          flex: "1 0 auto",
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
