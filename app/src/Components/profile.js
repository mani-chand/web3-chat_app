import React, { useEffect, useState } from "react";
import ABI from "./../Asserts/ABI.json";
import { Card, CardContent, Typography, Box, Tabs } from "@mui/material";

function Profile(props) {
  const address = "0x6da6e08D08393165656479F49D509e0FF65298cE";
  const { ethers } = require("ethers");
  const [users, setUsers] = useState(null);
  useEffect(() => {
    async function handleSubmit() {
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
        let result = await create.getAllUsers();
        setUsers(result);
        //console.log(JSON.stringify(result));
      } catch (error) {
        console.log(error);
      }
    }
    handleSubmit();
  }, [ethers]);
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 500,
        maxWidth: 230,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        style={{ width: "250px" }}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {users
          ? users.map((user) => {
              return (
                <Card
                  onClick={() => {
                    console.log(user);
                  }}
                  style={{ marginTop: "5px" }}
                >
                  <CardContent>
                    <Typography variant="h5">{user}</Typography>
                  </CardContent>
                </Card>
              );
            })
          : ""}
      </Tabs>
    </Box>
  );
}
export default Profile;
