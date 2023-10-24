import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Intro from "@/components/intro";

describe("Intro", () => {
  it("renders a heading", () => {
    render(<Intro />);

    const heading = screen.getByRole("heading", {
      name: /Best Seen On Foot/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
