import ABI from "./../Asserts/ABI.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  allUsers: [],
  isLoading: false,
  error: null,
};
const address = "0x28CaDE23ADe86018Af03c48A54293F5720C9437D";
const { ethers } = require("ethers");
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
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
    return result;
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.allUsers = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
});
export default userSlice.reducer