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
            fontWeight: "200px",
            fontSize: "80px",
            fontStyle: "normal",
            marginTop: "40px",
            color: "#FFFFFF",
            position: "absolute",
            width: "415px",
            height: "94px",
            lineHeight: "92px",
            left: "487px",
            top: "175px",
            letterSpacing: "-2px",
          }}
        >
          Meet Hajra!
        </Typography>
        <Box
          style={{
            background: "rgb(51, 51, 51)",
            position: "absolute",
            width: "1146px",
            height: "478px",
            left: "121px",
            top: "329px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              alignItems: "left",
              textAlign: "left",
              marginTop: "10px",
              fontSize: "40px",
              width: "105px",
              height: "24.96px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 10px",
              position: "absolute",
              lineHeight: "47px",
              letterSpacing: "0.06em",
            }}
          >
            ROLE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: "31px",
              lineHeight: "40px",
              letterSpacing: "0.06em",
              width: "428px",
              height: "19px",
              color: "#FFFFFF",
              position: "absolute",
              padding: "0 0 0 10px",
              left: "211px",
              top: "441px",
            }}
          >
            Women in Transportation Fellow
          </Typography>
          <Typography
            style={{
              position: "absolute",
              width: "121px",
              height: "24.96px",
              left: "759px",
              top: "376.8px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "47px",
              letterSpacing: "0.06em",
              color: "#FFFFFF",
              padding: "30px 0 10px 0",
              verticalAlign: "top",
            }}
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
            background: "#C0C0C0",
            padding: "10",
            marginTop: "20px",
            position: "absolute",
            width: "1440px",
            height: "67px",
            left: "0px",
            top: "3559px",
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
