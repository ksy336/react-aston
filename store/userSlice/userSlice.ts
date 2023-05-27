import { createSlice } from '@reduxjs/toolkit';
import { StateUser } from './userSlice-type';

const initialState: StateUser = {
  login: ""
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload;
    }
  }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;