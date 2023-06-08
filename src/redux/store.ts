import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger';
import mainReducer from "./main.reducer";

const logger = createLogger({
    collapsed: true
})

const store = configureStore({
    reducer: {
        main: mainReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>