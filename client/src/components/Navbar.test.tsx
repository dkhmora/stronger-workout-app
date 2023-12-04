import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { desktopNavbarItems } from "../constants/general";
import { BrowserRouter } from "react-router-dom";

test("renders navbar and navbar buttons", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navbarElement = (navbarText: string) =>
    screen.getByText(new RegExp(navbarText, "i"));

  desktopNavbarItems.forEach((navbarItem) =>
    expect(navbarElement(navbarItem.text)).toBeInTheDocument()
  );
});
