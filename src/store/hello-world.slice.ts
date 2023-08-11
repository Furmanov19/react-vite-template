import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HelloWorldState {
  text: string;
}

const initialState: HelloWorldState = {
  text: "",
};

export const helloWorldSlice = createSlice({
  name: "helloWorld",
  initialState,
  reducers: {
    sayHello: (state) => {
      state.text = "Hello World";
    },
    sayHelloWithPayload: (state, action: PayloadAction<string>) => {
      state.text = `Hello World, ${action.payload}`;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sayHello, sayHelloWithPayload } = helloWorldSlice.actions;

export default helloWorldSlice.reducer;
