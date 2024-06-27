// @ts-check
const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");

const LoginPage = require("../pages/loginPage");

test("login", async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("sysuser@gmail.com", "Pass@123");
  await new Promise(() => {});
});
