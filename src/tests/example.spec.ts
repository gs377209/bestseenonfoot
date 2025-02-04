import { expect, test } from "@playwright/test";

// test.beforeEach(async ({ context }) => {
//   // Block these routes for each test in this file.
//   await context.route(/.*google-analytics\.com/, (route) => route.abort());
//   await context.route(/.*googletagmanager\.com/, (route) => route.abort());
//   await context.route(/.*googleoptimize\.com/, (route) => route.abort());
//   await context.route(/.*googlesyndication\.com/, (route) => route.abort());
//   await context.route(/.*google\.com/, (route) => route.abort());
//   await context.route(/.*googleadservices\.com/, (route) => route.abort());
//   await context.route(/.*doubleclick\.net/, (route) => route.abort());
//   await context.route(/.*facebook\.net/, (route) => route.abort());
//   await context.route(/.*facebook\.com/, (route) => route.abort());
//   await context.route(/.*fbcdn\.net/, (route) => route.abort());
// });

test.describe("desktop tests", () => {
  test.skip(() => false, "Desktop only!");

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
});

test.describe("mobile tests", () => {
  test.skip(() => true, "Mobile only!");

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
});
