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
import { ThemeProvider } from "@material-ui/styles"

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
        <Box display="flex" flexDirection="column" alignItems="center" m={4}>
          <Avatar
            style={{ width: "200px", height: "200px" }}
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGCbYImgB7q2g/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=jcIRT-aXkLQCvV5t5SsYFhdCzA4GTJsVK_wtpVNGpr0"
          />
          <Box mt={3} alignItems="center">
            <Typography variant="h4">Hajra Shahab</Typography>
            <Typography variant="overline">'Researcher consulting public sector to resolve socio-economic issues'</Typography>
            <Typography color="secondary">Hajra Shahab</Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
