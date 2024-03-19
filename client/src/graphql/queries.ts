import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query GetUserDetails($userId: ID!) {
    currentUser(id: $userId) {
      id
      name
      email
      bodyWeight
      height
      numberOfWorkouts
    }
  }
`;
