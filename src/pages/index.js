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
        <Box style={{ marginTop: "100px"}} display="flex" flexDirection="column" alignItems="center" m={4}>
          <Avatar
            style={{ width: "200px", height: "200px" }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFwih7E9JQp7Q/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=P6HnpeP-xdweIDs-MLJjZ-sIjnY-47ZPddAZbWsQIU0"
            />
          <Typography style={{ marginTop: "20px"}}variant="h4">Hajra Shahab</Typography>
          </Box>
          <Box mt={3} alignItems="center">
            <Typography variant="overline">'Researcher consulting public sector to resolve socio-economic issues'</Typography>
            <Typography color="secondary">Hajra Shahab</Typography>
          </Box>
          
      </Container>
    </ThemeProvider>
  )
}
