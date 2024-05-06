import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        value:[
            {
                'name':'Tarea 1',
                'description':'Realizar la tarea 1',
                'dueDate':'24-4-24'
            }
        ]
    },
    reducers:{
        addTodo:(state,action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;