import React from "react";
import { Paper, TextField, Typography, Box, Button } from "@mui/material/";
import Navbar from "../Components/navbar";
export default function createUser() {
  return (
    <div>
      <Navbar></Navbar>
      <Paper style={{ margin: "50px 50px" }} elevation={3}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4">signup</Typography>
        </Box>
        <Box style={{ padding: "10px" }}>
          <TextField fullWidth label="username" variant="outlined" />
          <TextField
            fullWidth
            style={{ margin: "5px 0px" }}
            label="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            type="password"
            style={{ margin: "5px 0px" }}
            label="password"
            variant="outlined"
          />
          <Button
            style={{ margin: "0px 550px" }}
            size="large"
            variant="outlined"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
