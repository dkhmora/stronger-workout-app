import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { routes } from "../constants/general";
import { BrowserRouter } from "react-router-dom";

test("renders navbar and navbar buttons", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navbarElement = (navbarText: string) =>
    screen.getByText(new RegExp(navbarText, "i"));

  routes.forEach((navbarItem) =>
    expect(navbarElement(navbarItem.text)).toBeInTheDocument()
  );
});
