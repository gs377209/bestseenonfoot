import Intro from "@/components/intro";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
  const { container } = render(<Intro />);
  expect(container).toMatchSnapshot();
});
