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
export default () => {
  // this is where all the code of the main page goes
  return (
    <Box>
      <Typography
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "fontWeightLight",
          fontSize: "50px",
          marginTop: "20px",
          color: "#FFFFFF",
        }}
        variant="h4"
      >
        Hajra Shahab
      </Typography>
      <Link to="/">Go back to the homepage</Link>
    </Box>
  )
}
