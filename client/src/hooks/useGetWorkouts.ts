import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_WORKOUTS } from "../graphql/queries";
import { SET_WORKOUTS } from "../store/general";

export default function useGetWorkouts() {
  const userDetails = useSelector((state: any) => state.userDetails);
  const dispatch = useDispatch();
  const variables = userDetails ? { userId: userDetails.id } : {};
  const { data, loading, error } = useQuery(GET_WORKOUTS, {
    variables,
    skip: !userDetails,
  });

  useEffect(() => {
    if (error) {
      // Check if the error message indicates token expiry
      if (error.message === "Token expired") {
        // Handle token expiry here, e.g., log out the user or refresh token
        console.log("Token expired. Please log in again.");
      } else {
        // Handle other errors
        console.error("GraphQL error:", error);
      }
    }
  }, [error]);

  useEffect(() => {
    if (userDetails && data?.currentUser?.workouts) {
      // Update user credentials in the Redux store
      dispatch(SET_WORKOUTS(data.currentUser.workouts));
    }
  }, [data, userDetails, dispatch]);

  return { data, loading, error };
}
