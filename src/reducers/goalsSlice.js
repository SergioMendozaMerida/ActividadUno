import { createSlice } from "@reduxjs/toolkit";
export const goalsSlice = createSlice({
    name:'goals',
    initialState:{
        value: [
            {
                'name':'Correr',
                'description':'Salir a correr por la tarde',
                'dueDate':'24-4-24'
            }
        ]
    },
    reducers:{
        addGoal:(state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addGoal} = goalsSlice.actions;
export default goalsSlice.reducer;