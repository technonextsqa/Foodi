class LoginPage {
  constructor(page) {
    this.page1 = page;
  }

  async navigate() {
    await this.page1.goto("https://cms-dev.foodibd.com/auth/login"); // Replace with your actual login page URL
  }

  async setUsername(email) {
    await this.page1.fill('//input[@id=":r0:"]', email);
  }

  async setPassword(password) {
    await this.page1.fill('//input[@id=":r1:"]', password);
  }

  async clickLoginButton() {
    await this.page1.click('//button[@type="submit"]');
  }

  async login(email, password) {
    await this.setUsername(email);
    await this.setPassword(password);
    await this.clickLoginButton();
    // Optionally, you can return a new page object representing the next page after login
    // return new DashboardPage(this.page);
  }
}

module.exports = LoginPage;
