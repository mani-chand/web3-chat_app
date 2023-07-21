import React from "react";
import { Typography, Button, Box, Paper } from "@mui/material/";
function Navbar(props) {
  return (
    <>
      <Box>
        <Paper
          elevation={4}
          style={{
            minWidth: "107%",
            paddingRight: "15px",
            padding: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h4" component="h2">
              Messenger
            </Typography>
          </Box>
          <Box>
            <Button size="large" variant="text">
              connect
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Navbar;
