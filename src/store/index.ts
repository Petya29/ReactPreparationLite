import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts/postSlice";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({
    post: postSlice,
    user: userSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];