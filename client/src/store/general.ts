import { configureStore } from "@reduxjs/toolkit";

// Define the initial state of the store
const initialState = {
  isMobile: false, // Set the initial value of isMobile to false
};

// Define a reducer function to handle state changes
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
}

// Create the Redux store using the reducer
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
