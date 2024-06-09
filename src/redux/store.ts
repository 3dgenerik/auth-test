import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "../saga/rootSaga";

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer:{
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(saga)
})

saga.run(rootSaga);

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;