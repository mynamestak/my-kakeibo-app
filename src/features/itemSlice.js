import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action){
            console.log(state)
            const newItem = {
                itemText: action.payload.itemInputText,
                itemNum: action.payload.itemInputNum,
                id: action.payload.itemCount,
                itemMonth: action.payload.itemInputMonth,
                itemDay: action.payload.itemInputDay,
                inputType: action.payload.inputType,
            };
            state.items.push(newItem);
        },

        deleteItem(state, action){
            const deleteItemId = action.payload;
            // state.items = state.items.filter((item) => item.id !== deleteItemId);
            state.items.splice(deleteItemId - 1, 1);
        }
    }
})


export const itemActions = itemSlice.actions;

export const selectItems = (state) => state.items.items;

export default itemSlice.reducer;
