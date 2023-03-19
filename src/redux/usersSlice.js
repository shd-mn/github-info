import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   searchUser: "yasinelbuz",
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setSearchUser: function (state, action) {
         state.searchUser = action.payload;
      }
   },
})

// Action creators are generated for each case reducer function
export const { setSearchUser } = usersSlice.actions

export default usersSlice.reducer