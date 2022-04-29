import { configureStore } from '@reduxjs/toolkit';

import itemSliceReducer from '../features/itemSlice';

const store = configureStore({
    reducer: {
        items: itemSliceReducer,
    }
});

export default store;