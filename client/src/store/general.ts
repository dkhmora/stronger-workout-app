import { configureStore, createSlice } from "@reduxjs/toolkit";
import { defaultWorkout } from "../constants/general";

// Define the initial state of the store
const initialState = {
  isMobile: false, // Set the initial value of isMobile to false
  currentWorkout: null,
  userCredentials: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    SET_IS_MOBILE: (state, { payload }) => ({
      ...state,
      isMobile: payload,
    }),
    SET_USER_CREDENTIALS: (state, { payload }) => ({
      ...state,
      userCredentials: payload,
    }),
    SET_CURRENT_WORKOUT: (state, { payload }) => ({
      ...state,
      currentWorkout: payload,
    }),
  },
});

// Extract the reducer and action creators
const { reducer, actions } = generalSlice;

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the reducer and action creators
export const { SET_IS_MOBILE, SET_USER_CREDENTIALS, SET_CURRENT_WORKOUT } =
  actions;
export default store;
