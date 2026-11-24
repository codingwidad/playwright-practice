import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test ('Open home page', async({ page}) =>{
 const loginPage = new LoginPage(page);

 await loginPage.navigate();
 await expect(loginPage.logo).toHaveText('Swag Labs')
});