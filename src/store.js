import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice";
import todoReducer from "./reducers/todoSlice";

export default configureStore({
    reducer:{
        goals:goalsReducer,
        option:optionReducer,
        todo:todoReducer
    }
})