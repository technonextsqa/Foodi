const RestaurantCreation = require("../pages/restaurantCreation");
const LoginPage = require("../pages/loginPage");
const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");

test("Restaurantclick", async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  const restaurantclick = new RestaurantCreation();
  restaurantclick.clickrestaurantmenu();
  await new Promise(() => {});
});
