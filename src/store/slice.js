import { createSlice } from '@reduxjs/toolkit'

const initialState={
    isLoggedIn:false,
    accessToken:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    setUser: (state,action) => {
      state.accessToken=action.payload.accessToken,
      state.isLoggedIn=true
    }, 
    removeUser:(state)=>{
        state.accessToken=null,
        state.isLoggedIn=false
    }
  },
})

// Action creators are generated for each case reducer function
export const { removeUser,setUser } = userSlice.actions

export default userSlice.reducer