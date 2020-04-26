// these are all the library imports on the top
import React from "react"
import {
  Box,
  Avatar,
  createMuiTheme,
  Typography,
  Container,
} from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
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
        <Toolbar variant='dense' style={{backgroundColor:"grey"}}>
            <Typography style={{marginRight:'20px'}} variant="h4">About</Typography>
            <Typography style={{marginRight:'20px'}} variant="h4">Projects</Typography>
            <Typography style={{marginRight:'20px'}} variant="h4">Blog</Typography>
            <Typography style={{marginRight:'20px'}} variant="h4">Vlog</Typography>
            <Typography style={{marginRight:'20px'}} variant="h4">Contact</Typography>
        </Toolbar>
      </AppBar> 
        <Box style={{ marginTop: "100px"}} display="flex" flexDirection="column" alignItems="center" m={4}>
          <Avatar
            style={{ width: "373px", height: "400px" }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFwih7E9JQp7Q/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=P6HnpeP-xdweIDs-MLJjZ-sIjnY-47ZPddAZbWsQIU0"
            />
          <Typography fontFamily='Roboto' fontSize='52px' style={{ marginTop: "20px"}}variant="h4">Hajra Shahab</Typography>
        </Box>
          <Box style={{ widht: "400px", height: "255px"}} border={1} bgcolor="grey.500" borderColor="grey.500" borderRadius={16} mt={3} alignItems="center" textAlign="center" fontWeight="fontWeightLight" fontFamily="Roboto" lineHeight="normal">  
            <Typography variant="body">Hi, I’m Hajra Shahab, a multidisciplinary researcher with profound interest in data analytics, urban informatics policy, and design. I am a strong advocate of interdiscplinary collaborative approach to unlock unconventional solutions to some of the most pressing urban issues that cities face in the 21st century.</Typography>
            </Box>
        <Box>    
            <Typography textAlign="center" color="secondary">Cities|Tech|Design|Data-driven service delivery</Typography>
            </Box> 
      </Container>
    </ThemeProvider>
  )
}
