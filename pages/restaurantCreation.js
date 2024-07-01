class RestaurantCreation {
  async clickrestaurantmenu() {
    return await this.page
      .locator('//button[normalize-space()="Restaurant Menu Management"]')
      .click();
  }
}
module.exports = RestaurantCreation;
