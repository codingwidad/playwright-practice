import { Page, Locator, expect } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title')
    }
    async verifyInventoryPage(){
        await expect(this.pageTitle).toHaveText('Products')
    }
}