import React, { useState } from "react";
import { Paper, TextField, Typography, Box, Button } from "@mui/material/";
import Navbar from "../Components/navbar";
import ABI from "./../Asserts/ABI.json";
export default function CreateUser() {
  const address = "0x6da6e08D08393165656479F49D509e0FF65298cE";
  const { ethers } = require("ethers");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let signer = null;
      let provider;
      if (window.ethereum == null) {
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
      }
      const create = new ethers.Contract(address, ABI, signer);
      let result = await create.createUser(
        user.username,
        user.email,
        user.password
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <Paper
        style={{ margin: "50px 50px", borderRadius: "30px solid red" }}
        elevation={3}
      >
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4">signup</Typography>
        </Box>
        <Box style={{ padding: "10px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              fullWidth
              label="username"
              variant="outlined"
            />
            <TextField
              fullWidth
              style={{ margin: "5px 0px" }}
              type="email"
              label="email"
              variant="outlined"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              fullWidth
              type="password"
              style={{ margin: "5px 0px" }}
              label="password"
              variant="outlined"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button
              style={{ margin: "0px 550px" }}
              size="large"
              variant="outlined"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Paper>
    </div>
  );
}
