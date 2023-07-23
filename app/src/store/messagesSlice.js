import ABI from "./../Asserts/ABI.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const address = "0x6da6e08D08393165656479F49D509e0FF65298cE";
const { ethers } = require("ethers");
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
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
    let result = await create.getAllMessages();
    return result;
  }
);
export const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
});
export default messageSlice.reducer