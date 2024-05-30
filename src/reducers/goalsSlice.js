import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name:'goals',
    initialState:{
        value: []
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/goals/addGoals",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    "Authorization":"123456"
                },
                body: JSON.stringify(action.payload)
            }).catch(err=>{
                console.log(err)
            })
        },
        initAddGoal:(state, action) => {
            state.value.push(action.payload);            
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter(goals => goals.id !== action.payload);
            fetch("http://localhost:3001/goals/removeGoals/"+action.payload, {
                method: "DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"123456"
                },
            }).catch(err=>{
                console.log(err);
            })
        }
    }
})

export const {addGoal, initAddGoal, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;