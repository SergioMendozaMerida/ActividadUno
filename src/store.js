import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice";

export default configureStore({
    reducer:{
        goals:goalsReducer,
        option:optionReducer

    }
})