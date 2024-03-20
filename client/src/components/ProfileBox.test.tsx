import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileBox from "./ProfileBox";

test("renders profile box", () => {
  render(<ProfileBox userName="Jane Doe" numberOfWorkouts={4} />);

  const userName = screen.getByTestId("user-name");
  const userAvatar = screen.getByTestId("user-avatar");
  const numberOfWorkouts = screen.getByText(/[0-9]+ WORKOUTS/i);

  expect(userName).toBeInTheDocument();
  expect(userAvatar).toBeInTheDocument();
  expect(numberOfWorkouts).toBeInTheDocument();
});
