import { test, expect } from "../fixtures/base.fixture";

test.describe('Sauce demo - Login', () => {
    test('should login successfully and display the products page', async ({ loginPage, inventoryPage }) => {
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(inventoryPage.pageTitle).toHaveText('Products');
    });
});
