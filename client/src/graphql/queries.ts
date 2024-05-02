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

export const GET_WORKOUTS = gql`
  query GetWorkouts($userId: ID!) {
    currentUser(id: $userId) {
      workouts {
        id
        name
        start
        duration
        totalWeight
        numberOfPRs
        exercises {
          id
          sets {
            id
            reps
            weight
            setNumber
          }
          exercise {
            id
            name
            description
            category
            bodyPart
          }
        }
      }
    }
  }
`;
