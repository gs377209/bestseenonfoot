import Intro from "@/components/intro";
import { render, screen } from "@testing-library/react";

describe("Intro", () => {
  it("renders a heading", () => {
    render(<Intro />);

    const heading = screen.getByRole("heading", {
      name: /Best Seen On Foot/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
