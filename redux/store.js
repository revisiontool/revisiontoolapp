
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from "./reducers/reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



// middleware
const middleware = [thunk];


// redux perist configuration below
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
})

export const persistor = persistStore(store)
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);