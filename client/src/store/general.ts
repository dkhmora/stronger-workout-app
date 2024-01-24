import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the initial state of the store
const initialState = {
  isMobile: false, // Set the initial value of isMobile to false
  currentWorkout: null,
  runningWorkoutBottomSheetOpen: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    SET_IS_MOBILE: (state, { payload }) => ({
      ...state,
      isMobile: payload,
    }),
    SET_CURRENT_WORKOUT: (state, { payload }) => ({
      ...state,
      currentWorkout: payload,
    }),
    SET_RUNNING_WORKOUT_BOTTOM_SHEET_OPEN: (state, { payload }) => ({
      ...state,
      runningWorkoutBottomSheetOpen: payload,
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
export const {
  SET_IS_MOBILE,
  SET_CURRENT_WORKOUT,
  SET_RUNNING_WORKOUT_BOTTOM_SHEET_OPEN,
} = actions;
export default store;
