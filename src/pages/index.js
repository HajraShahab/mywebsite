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
        <Box>
          <Avatar variant="square"
          style={{opacity:"0.8", position: 'fixed', top: '0', width: "1500px", height: "700px", zIndex: "-1"}}
          img src="https://images.unsplash.com/photo-1563861141459-8d525c27a88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Shibuya Crossing"/>
        </Box>
      <AppBar position="static">
        <Toolbar variant='dense' style={{backgroundColor: "#FFFFFF"}}>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'20px', color: "#CBA01C"}} variant="h5">EN</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginRight:'auto', color: "#CBA01C"}} variant="h5">JP</Typography> 
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginLeft:'20px', color: "#CBA01C"}} variant="h5">About</Typography> 
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginLeft:'20px', color: "#CBA01C"}} variant="h5">Projects</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginLeft:'20px', color: "#CBA01C"}} variant="h5">Blog</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginLeft:'20px', color: "#CBA01C"}} variant="h5">Vlog</Typography>
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', marginLeft:'20px', color: "#CBA01C"}} variant="h5">Contact</Typography>
        </Toolbar>
      </AppBar> 
      <Container maxWidth="sm">
        <Box style={{ marginTop: "100px", display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px'}}>
          <Avatar
            style={{ width: "200px", height: "200px" }}
            src="https://media-exp1.licdn.com/dms/image/C5603AQF_wD7eIHmZog/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=mwNm37Qxga4rCR90uI-r8YOMmt0lb_JqzPwW_rJJPGI"
            />
          <Typography style={{fontFamily: 'Roboto', fontWeight: 'fontWeightLight' , fontSize:"50px", marginTop:"20px", color: '#fff'}} variant="h4">Hajra Shahab</Typography>
        </Box>
          <Box style={{height: "200px", width: "500px", backgroundColor: "#FFFFFF", marginRight:'20px', opacity:"0.5"}}>
          <div name="viewport" content="width= deviceWidth" initialScale='1'></div>
            </Box>
        <Box style={{fontFamily: 'Roboto', fontWeight: 'fontWeightLight', maxWidth: "700px", height: "100px", marginTop: '-200px', alignItems: 'center', textAlign: 'center', color: '#fff'}}>
        <Typography variant="body">Hi, I’m Hajra Shahab, a multidisciplinary researcher with profound interest in data analytics, urban informatics policy, and design. I am a strong advocate of interdiscplinary collaborative approach to unlock unconventional solutions to some of the most pressing urban issues that cities face in the 21st century.</Typography>
            </Box>
        <Box>    
            <Typography style={{href: "https://fonts.googleapis.com/css2?family=Lora&display=swap", rel: "stylesheet", fontFamily: 'Lora', fontWeight: "400px", marginRight:'20px', color: "#fff", textAlign: 'center', marginTop: '20px'}} variant="h6">Data Analytics   | Public Policy   | Cities  | Transportation and Mobility</Typography>
            </Box>
      </Container>
    </ThemeProvider>
  )
}
