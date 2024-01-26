import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home.page'

test.describe('A passing test', () => {
  test('Should add an item successfully', async ({ page }) => {

    const home = new HomePage(page);
    
    await page.goto('/');
    await expect(home.headerText).toBeVisible(); 

    await home.addToDoItem("Fail my test");
    await page.keyboard.press('Enter');
    await home.assertListItemVisibility("Fail my test", true);

  });  
});

