import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '@/app/endPoints'
import axios from 'axios'

const initialState = {
    user: [],
    load: false,
    error: false
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(userAdd.fulfilled, (state, action) => {
                state.user.push(action.payload)
                state.load = false
            }).addCase(userUpdate.fulfilled, (state, action) => {
                let user = state.user.find((e) => e._id == action.payload._id)
                user.name = action.payload.name
                user.email = action.payload.email
                state.load = false
            }).addCase(userDelete.fulfilled, (state, action) => {
                state.user = state.user.filter((e) => e._id !== action.payload)
                state.load = false
            }).addCase(userGet.fulfilled, (state, action) => {
                state.user = action.payload
                state.load = false
            }).addCase(userAdd.pending, (state, action) => {
                state.load = true
            }).addCase(userUpdate.pending, (state, action) => {
                state.load = true
            }).addCase(userDelete.pending, (state, action) => {
                state.load = true
            }).addCase(userGet.pending, (state) => {
                state.load = true
            })
    },
})

export const userAdd = createAsyncThunk(
    'user/adduser',
    async (thunkAPI) => {
        console.log(thunkAPI)
        console.log('API', API)

        const data = await axios.post(API.users, thunkAPI)
        console.log(data)
        return thunkAPI
    }
)
export const userUpdate = createAsyncThunk(
    'user/updateuser',
    async (thunkAPI) => {
        console.log(thunkAPI)

        const data = await axios.put(`${API.users}/${thunkAPI._id}`, thunkAPI)
        console.log(data)
        return thunkAPI
    }
)
export const userDelete = createAsyncThunk(
    'user/deleteuser',
    async (thunkAPI) => {
        console.log(thunkAPI)
        const data = await axios.delete(`${API.users}/${thunkAPI}`)
        console.log(data)
        return thunkAPI
    }
)
export const userGet = createAsyncThunk(
    'user/getuser',
    async (thunkAPI) => {
        console.log(thunkAPI)
        const data = await axios.get(API.users)
        console.log(data)
        return data.data
    }
)


// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer