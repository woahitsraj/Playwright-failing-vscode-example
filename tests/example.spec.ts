import { test, expect } from "@playwright/test";
import { Example } from "../example";
import { Component, Props } from "../component";

const example: Example = {
  hello: "world",
  props: {
    name: "John",
  },
};

const props: Props = {
  name: "John",
};
console.log(example);
console.log(props);
console.log(Component);
test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
