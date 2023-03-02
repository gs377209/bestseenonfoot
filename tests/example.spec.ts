import { expect, test } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About Us' and click on it
  await page.click("text=About Us");
  // The new URL should be "/about-us" (baseURL is used there)
  await expect(page).toHaveURL("/about-us");
  // The new page should contain an h1 with "About Us"
  await expect(page.locator("h1")).toContainText("About Us");
});
