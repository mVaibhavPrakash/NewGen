import {createSlice} from '@reduxjs/toolkit'

const editSlice = createSlice({
    name :'edit',
    initialState : {
        isEdit : false
    },
    reducers :{
        setEdit : (state) =>{
            state.isEdit=!isEdit
        }
    }
})

export const {setEdit} = editSlice.actions

export default editSlice.reducer