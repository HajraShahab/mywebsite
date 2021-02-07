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

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
export default () => {
  // this is where all the code of the main page goes
  return (
    <>
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
            left: "583px",
            top: "166px",
            letterSpacing: "-2px",
          }}
        >
          Meet Hajra!
        </Typography>
        <Box
          style={{
            background: "rgb(51, 51, 51)",
            position: "absolute",
            width: "629px",
            height: "343px",
            left: "85px",
            top: "425px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              alignItems: "left",
              fontSize: "16px",
              width: "136.09px",
              height: "24px",
              marginTop: "10px",
              color: "#FFFFFF",
              padding: "0px 0px 10px 10px",
              position: "absolute",
              lineHeight: "24px",
              letterSpacing: "0.5px",
              display: "flex",
            }}
          >
            ROLE
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              fontWeight: "normal",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "30px",
              letterSpacing: "0.15px",
              alignContent: "flexStart",
              marginTop: "10px",
              top: "597px",
              width: "216px",
              height: "48px",
              color: "#FFFFFF",
              position: "absolute",
              padding: "0 0 0 10px",
              lineHeight: "24px",
              letterSpacing: "0.15px",
            }}
            flexContainer={{
              display: "inline-flex",
              alignContent: "flex-start",
              order: "1",
            }}
          >
            Women in Transportation Fellow
          </Typography>
          <Typography
            style={{
              position: "absolute",
              width: "243.78px",
              height: "76.78px",
              left: "395.97px",
              marginTop: "10px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "60px",
              letterSpacing: "0.25px",
              color: "#FFFFFF",
              padding: "30px 0 10px 0",
            }}
          >
            WORK
          </Typography>
          <Typography
            style={{
              fontFamily: "Lora, serif",
              position: "absolute",
              fontsize: "20px",
              height: "31px",
              left: "395.97px",
              top: "593px",
              width: "304.08px",
              height: "31px",
              fontWeight: "normal",
              marginTop: "40px",
              color: "#FFFFFF",
              padding: "0 0 0 0",
              display: "flex",
              letterSpacing: "0.15px",
            }}
          >
            Coordinating the Smart Mobility Connections (SMC) seminar series,
          </Typography>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              position: "absolute",
              width: "136.09px",
              height: "76.78",
              left: "86.91px",
              top: "750.79px",
              fontWeight: "bold",
              fontStyle: "normal",
              lineHeight: "60px",
              fontSize: "40px",
              color: "#FFFFFF",
              padding: "10px 10px 10px 10px",
            }}
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
            position: "absolute",
            width: "701px",
            height: "517px",
            left: "758px",
            top: "372px",
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
        </Box>
      </Box>
    </>
  )
}
