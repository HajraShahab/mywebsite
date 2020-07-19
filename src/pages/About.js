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
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
                marginLeft: "970px", // I never had to use these px for index page. There seems to be a problem
                color: "#FFB300",
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
                textDecoration: "none",
              }}
              visited={{ color: "#FFB300" }}
              hover={{ color: "#FFB300", textDecoration: "underline" }} // hove and active text decoration not working
              active={{ textDecoration: "underline" }}
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
            marginTop: "40px",
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
              padding: "0px 0px 10px 10px",
            }}
            variant="h6"
          >
            ROLE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 10px",
            }}
            variant="body"
          >
            Women in Transportation Fellow
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "Left",
              textAlign: "Left",
              marginTop: "-90px", //I need to come back to this. I feel there is a better way to align these items
              marginLeft: "700px",
              color: "#FFFFFF",
              padding: "30px 0 10px 0",
              verticalAlign: "top",
            }}
            variant="h6"
          >
            WORK
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 0",
              marginLeft: "700px",
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
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px 10px 10px 10px",
            }}
            variant="h6"
          >
            DATE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px 30px 30px 10px",
            }}
            variant="body"
          >
            2020-2022
          </Typography>
          <img
            style={{
              opacity: "1",
              position: "absolute",
              top: "280px",
              width: "auto",
              minWidth: "8vw",
              height: "8vh",
              marginLeft: "800px",
              clip: "rect(350px)", //work with clip style again
            }}
            src="https://traffic21.heinz.cmu.edu/wp-content/uploads/sites/23/2019/08/cropped-Traffic-21-Anniversary-top.jpg"
            alt="Traffic21"
          />
        </Box>
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
              padding: "0px 0px 10px 10px",
            }}
            variant="h6"
          >
            ROLE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 10px",
            }}
            variant="body"
          >
            Project Manager
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "Left",
              textAlign: "Left",
              marginTop: "-90px", //I need to come back to this. I feel there is a better way to align these items
              marginLeft: "700px",
              color: "#FFFFFF",
              padding: "30px 0 10px 0",
              verticalAlign: "top",
            }}
            variant="h6"
          >
            WORK
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 0",
              marginLeft: "700px",
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
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px 10px 10px 10px",
            }}
            variant="h6"
          >
            DATE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px 30px 30px 10px",
            }}
            variant="body"
          >
            2019-2020
          </Typography>
          <img
            style={{
              opacity: "1",
              position: "absolute",
              top: "450px",
              width: "auto",
              minWidth: "5vw",
              height: "10vh",
              marginLeft: "800px",
            }}
            src="https://sbasse.lums.edu.pk/sites/default/files/styles/medium/public/cs3.png?itok=whPxCULM"
            alt="TPI"
          />
        </Box>
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
              padding: "0px 0px 10px 10px",
            }}
            variant="h6"
          >
            ROLE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 10px",
            }}
            variant="body"
          >
            Management Trainee
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "Left",
              textAlign: "Left",
              marginTop: "-90px", //I need to come back to this. I feel there is a better way to align these items
              marginLeft: "700px",
              color: "#FFFFFF",
              padding: "30px 0 10px 0",
              verticalAlign: "top",
            }}
            variant="h6"
          >
            WORK
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 0",
              marginLeft: "700px",
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
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px 10px 10px 10px",
            }}
            variant="h6"
          >
            DATE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "10px 30px 30px 10px",
            }}
            variant="body"
          >
            2018-2019
          </Typography>
          <img
            style={{
              opacity: "1",
              position: "absolute",
              top: "640px",
              width: "auto",
              minWidth: "8vw",
              height: "15vh",
              marginLeft: "800px",
            }}
            src="https://avpn.asia/wp-content/uploads/2014/11/mitsubishi.jpg"
            alt="Mitsubishi Corporation"
          />
        </Box>
        <Box>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 10px",
            }}
            variant="h6"
          >
            Toolkit
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 40px",
            }}
            variant="h6"
          >
            Technical
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 40px",
            }}
            variant="body"
          >
            ArcGIS, HTML, CSS, SQL, STATA, R, Python
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "Left",
              textAlign: "Left",
              marginTop: "-90px", //I need to come back to this. I feel there is a better way to align these items
              marginLeft: "700px",
              color: "#FFFFFF",
              padding: "30px 0 10px 0",
              verticalAlign: "top",
            }}
            variant="h6"
          >
            Design
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "right",
              textAlign: "right",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 0",
              marginLeft: "700px",
            }}
            variant="body"
          >
            Figma, Illustrator, Photoshop, Premier, Invision, InDesign, XD
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 10px",
            }}
            variant="h6"
          >
            Education
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "5px",
              color: "#FFFFFF",
              padding: "0 0 0 40px",
            }}
            variant="body"
          >
            Carnegie Mellon University 2020-2022- Master’s in Public Policy and
            Management (MSPPM)
          </Typography>
          <img
            style={{
              opacity: "1",
              position: "absolute",
              top: "850px",
              width: "auto",
              minWidth: "8vw",
              height: "15vh",
              marginLeft: "0px",
            }}
            src="https://www.cmu.edu/brand/brand-guidelines/images/wordmarksquare-red-600x600.png"
            alt="Carnegie Mellon University"
          />
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 40px",
            }}
            variant="body"
          >
            Lahore University of Management Sciences 2014-2018- BSc (Honors)
            Economics
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 10px",
            }}
            variant="h6"
          >
            What they say about me
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 0px 10px",
            }}
            variant="h1"
          >
            "
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "20px",
              color: "#FFFFFF",
              padding: "0px 0px 0px 10px",
            }}
            variant="h1"
          >
            "
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#121212",
            }}
            variant="h1"
          >
            Reading
          </Typography>
        </Box>
        <Box
          style={{
            background: "#C0C0C0",
            padding: "10",
            marginTop: "20px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "0",
              color: "#18171D",
              padding: "0px 0px 0px 0px",
              textAlign: "center",
            }}
            variant="h6"
          >
            Stay Connected!
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "100px",
              alignItems: "left",
              textAlign: "left",
              marginTop: "0",
              color: "#18171D",
              padding: "0",
              textAlign: "center",
            }}
            variant="h6"
          >
            Email: hajrashahab05@gmail.com
          </Typography>
          <img
            style={{
              opacity: "1",
              position: "absolute",
              top: "925px",
              width: "auto",
              minWidth: "2vw",
              height: "5vh",
              marginLeft: "570px",
            }}
            src="https://image.flaticon.com/icons/png/512/61/61109.png"
            alt="Linkedin"
          />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
