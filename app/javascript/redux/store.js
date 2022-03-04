import { configureStore, compose } from '@reduxjs/toolkit'
import partneredUpdate from "./partneredUpdate";
import crsStore from "./crsStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore({
        reducer: {
            partnered: partneredUpdate,
            crsStore: crsStore
        }
    },composeEnhancers()
)