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
      <AppBar position="static">
        <Toolbar variant='dense' style={{backgroundColor:"#fafafa"}}>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">EN</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'auto', color: "#CBA01C"}} variant="h5">JP</Typography> 
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">About</Typography> 
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">Projects</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">Blog</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">Vlog</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">Contact</Typography>
        </Toolbar>
      </AppBar> 
      <Container maxWidth="sm">
        <Box style={{ marginTop: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px'}}>
          <Avatar
            style={{ width: "200px", height: "200px" }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFwih7E9JQp7Q/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=P6HnpeP-xdweIDs-MLJjZ-sIjnY-47ZPddAZbWsQIU0"
            />
          <Typography style={{href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap", rel: "stylesheet", fontFamily: "'Roboto', sansSerif", fontSize:"52px", marginTop:"20px"}} variant="h4">Hajra Shahab</Typography>
        </Box>
          <Box style={{href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap", rel: "stylesheet", fontFamily: "'Roboto', sansSerif", maxWidth: "700px", height: "100px", border: '2px solid lightgrey', marginTop: '40px', alignItems: 'center', textAlign: 'center'}}>  
            <Typography variant="body">Hi, I’m Hajra Shahab, a multidisciplinary researcher with profound interest in data analytics, urban informatics policy, and design. I am a strong advocate of interdiscplinary collaborative approach to unlock unconventional solutions to some of the most pressing urban issues that cities face in the 21st century.</Typography>
            </Box>
        <Box>    
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', fontWeight: "400px", marginRight:'20px', color: "#CBA01C", textAlign: 'center', marginTop: '10px'}}>Data Analytics   | Public Policy   | Cities  | Transportation and Mobility</Typography>
            </Box> 
      </Container>
    </ThemeProvider>
  )
}
