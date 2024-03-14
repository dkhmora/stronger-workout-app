import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        name
        email
        bodyWeight
        height
      }
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $name: String!
    $email: String!
    $password: String!
    $birthDate: ID!
    $bodyWeight: Float!
    $height: Int!
  ) {
    registerUser(
      name: $name
      email: $email
      password: $password
      birthDate: $birthDate
      bodyWeight: $bodyWeight
      height: $height
    ) {
      id
      name
      birthDate
      email
      bodyWeight
      height
    }
  }
`;
