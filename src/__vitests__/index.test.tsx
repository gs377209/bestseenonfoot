import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Intro from "../components/intro";

test("Intro renders a heading", () => {
  render(<Intro />);

  const heading = screen.getByRole("heading", {
    name: /Best Seen On Foot/i,
  });

  expect(heading).toBeDefined();
});
