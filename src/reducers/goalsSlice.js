import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name:'goals',
    initialState:{
        value: [
            {
                'id': Math.random() * Math.random(),
                'name':'Correr',
                'description':'Salir a correr por la tarde',
                'dueDate':'24-4-24'
            },
        ]
    },
    reducers:{
        addGoal:(state, action) => {
            state.value.push(action.payload);            
        },
        deleteGoal:(state, action) => {
            state.value = state.value.filter(goals => goals.id !== action.payload);
        }
    }
})

export const {addGoal, deleteGoal} = goalsSlice.actions;
export default goalsSlice.reducer;