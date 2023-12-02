import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const bolajonGet = createAsyncThunk(
  'bolajonlar/bolajonGet',
  async (_, thunkAPI) => {
   try {
    const res = await axios.get(
      'https://638b219281df38ab34622b2b.mockapi.io/boaljon',
    );
    return res.data;
   } catch ( err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err)
   }
  },
);

export const bolajonPost = createAsyncThunk(
  'bolajonlar/bolajonPost',
  async (x) => {
    await axios.put(
      `https://638b219281df38ab34622b2b.mockapi.io/boaljon/${x.id}`,
      x.data,
    );
  },
);

const BolajonSlice = createSlice({
  name: 'bolajon',
  initialState: {
    data: 'isim',
    bolajonlar: [],
    redirect: false,
  },
  reducers: {},
  extraReducers: {
    [bolajonGet.pending]: (state) => {
      state.data = 'loading';
    },
    [bolajonGet.fulfilled]: (state, action) => {
      state.bolajonlar = action.payload;
      state.data = 'pk';
    },
    [bolajonGet.rejected]: (state) => {
      state.data = 'err';
    },
    [bolajonPost.pending]: (state) => {
      state.data = 'loading';
    },
    [bolajonPost.fulfilled]: (state) => {
      state.redirect = !state.redirect;
      state.data = 'pk';
    },
    [bolajonPost.rejected]: (state) => {
      state.data = 'err';
    },
  },
});

export const BolajonActions = BolajonSlice.actions;

export default BolajonSlice.reducer;
