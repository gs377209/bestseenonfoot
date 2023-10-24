import Avatar from "@/components/avatar";

describe("<Avatar />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Avatar
    cy.mount(
      <Avatar
        name="Test Test"
        picture="/assets/authors/gerrod.jpg"
        priority={false}
      />,
    );

    // The new component should contain a div with "Test Test"
    cy.get("div").contains("Test");

    // Validate that an image with the expected alt is present
    cy.get('img[alt="Test Test"]').should("be.visible");
  });
});
