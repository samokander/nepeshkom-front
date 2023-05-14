import {
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";
// смена картинок на страничке автомобиля
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {},
    decremented: (state) => {},
  },
});

export const { incremented, decremented } =
  counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
