import { createSlice } from "@reduxjs/toolkit";

const initialState = Array.from({ length: 20 }, () => ({
  tableId: null,
  customerName: null,
  customerContact: null,
  orders: [],
}));

const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    // ?Parameters: Accepts tableIndex (which table to add to) and menuItem (the item to add).
    // ?Behavior:
    // ?If the item already exists, it increments its quantity.
    // ?Otherwise, it adds a new item with an initial quantity of 1.

    addToOrder(state, action) {
      const { tableIndex, menuItem } = action.payload;
      const table = state[tableIndex];
      
      // !CHAT GPT SOLUTION
      const existingItem = table.orders.find(
        (item) => item.name === menuItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        table.orders.push({ ...menuItem, quantity: 1 });
      }
    },

    removeFromOrder(state, action) {
      const { tableIndex, menuItem } = action.payload;
      const table = state[tableIndex];

      // !CHAT GPT SOLUTION
      const existingItem = table.orders.find(
        (item) => item.name === menuItem.name
      );

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          table.orders = table.orders.filter(
            (item) => item.name !== menuItem.name
          );
        }
      }
    },

    resetOrder(state, action) {
      const  {tableIndex}  = action.payload;
      state[tableIndex].orders = [];
      state[tableIndex].customerName = null;
      state[tableIndex].customerContact = null;
      state[tableIndex].tableId = null;
    },

    addCustomerDetails(state, action) {
      const { tableIndex, customerName, customerContact } = action.payload;
      state[tableIndex].customerName = customerName;
      state[tableIndex].customerContact = customerContact;
      state[tableIndex].tableId = tableIndex;
    },
  },
});

export const { addToOrder, removeFromOrder, resetOrder, addCustomerDetails } =
  tableSlice.actions;

export default tableSlice.reducer;
