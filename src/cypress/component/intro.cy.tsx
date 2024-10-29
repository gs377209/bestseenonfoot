import Intro from "@/components/intro";

describe("<Intro />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for <Intro />
    cy.mount(<Intro />);

    // The new component should contain an h1 with "Best Seen On Foot"
    cy.get("h1").contains("Best Seen On Foot");

    // Validate that an h2 is present
    cy.get("h2").should("be.visible");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
