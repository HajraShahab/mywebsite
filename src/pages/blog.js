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
  )
}
