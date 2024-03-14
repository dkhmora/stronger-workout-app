import {
  AnyAction,
  Dispatch,
  Middleware,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import { routes } from "../constants/general";
import { loginRoutes } from "../constants/general";

// Define the initial state of the store
const initialState = {
  isMobile: false, // Set the initial value of isMobile to false
  currentWorkout: null,
  userCredentials: null,
  currentRoutes: [],
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
    SET_CURRENT_ROUTES: (state, { payload }) => ({
      ...state,
      currentRoutes: payload,
    }),
  },
});

// Extract the reducer and action creators
const { reducer, actions } = generalSlice;

// Define the routes middleware
const routesMiddleware: Middleware =
  (store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    if (action.type === "SET_USER_CREDENTIALS") {
      // If the user logs in, set the current routes to the default routes
      if (action.payload !== null) {
        store.dispatch({
          type: "SET_CURRENT_ROUTES",
          payload: routes,
        });
      } else {
        store.dispatch({
          type: "SET_CURRENT_ROUTES",
          payload: loginRoutes,
        });
      }
    }

    return next(action);
  };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the reducer and action creators
export const {
  SET_IS_MOBILE,
  SET_USER_CREDENTIALS,
  SET_CURRENT_ROUTES,
  SET_CURRENT_WORKOUT,
} = actions;

export default store;
