import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_DETAILS } from "../graphql/queries";
import { SET_USER_DETAILS, SET_USER_TOKEN } from "../store/general";

export default function useSyncUserCredentials() {
  const userDetails = useSelector((state: any) => state.userDetails);
  const dispatch = useDispatch();
  const variables = userDetails ? { userId: userDetails.id } : {};
  const { data, loading, error } = useQuery(GET_USER_DETAILS, {
    variables,
    skip: !userDetails,
  });

  useEffect(() => {
    if (error) {
      console.log(error);
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
    if (userDetails && data && data.currentUser) {
      // Update user credentials in the Redux store
      dispatch(SET_USER_DETAILS(data.currentUser));
    }

    if (data && data.currentUser === null) {
      dispatch(SET_USER_DETAILS(null));
      dispatch(SET_USER_TOKEN(null));
    }
  }, [data, userDetails, dispatch]);

  return { data, loading, error };
}
