// these are all the library imports on the top
import React from "react"
import {
  Box,
  Avatar,
  Paper,
  createMuiTheme,
  Typography,
  Container,
} from "@material-ui/core"
import { typography } from '@material-ui/system'
import { ThemeProvider } from "@material-ui/styles"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
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
      <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar variant='dense' bgcolor="grey.500">
            <Typography fontWeight="fontWeightlight" align="right" variant="h4">About  Projects    Blog    Vlog    Contact</Typography>
        </Toolbar>
      </AppBar> 
        <Box style={{ marginTop: "100px"}} display="flex" flexDirection="column" alignItems="center" m={4}>
          <Avatar
            style={{ width: "200px", height: "200px" }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFwih7E9JQp7Q/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=P6HnpeP-xdweIDs-MLJjZ-sIjnY-47ZPddAZbWsQIU0"
            />
          <Typography style={{ marginTop: "20px"}}variant="h4">Hajra Shahab</Typography>
          </Box>
          <Box border={1} bgcolor="grey.500" borderColor="grey.500" borderRadius={16} mt={3} alignItems="center" textAlign="center" fontWeight="fontWeightLight" fontFamily="Roboto" lineHeight="normal">  
            <Typography variant="overline">Hi, I’m Hajra Shahab, a multidisciplinary researcher with profound interest in data analytics, urban informatics policy, and design. I am a strong advocate of interdiscplinary collaborative approach to unlock unconventional solutions to some of the most pressing urban issues that cities face in the 21st century.</Typography>
            <Typography color="secondary">Cities    |     Tech       |       Design       |   Data-driven service delivery</Typography>
          </Box> 
        <AppBar position="static">
        <Toolbar>
            <Typography color="secondary">About Projects Blog Vlog Contact</Typography>
        </Toolbar>
        </AppBar> 
      </Container>
    </ThemeProvider>
  )
}
