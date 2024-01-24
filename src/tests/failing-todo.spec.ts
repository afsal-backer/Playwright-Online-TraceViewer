import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home.page'

test.describe('Generate trace file', () => {
  test('Should fail to clear an added item and generate trace viewer file', async ({ page }) => {

    const home = new HomePage(page);
    
    await page.goto('/');
    await expect(home.headerText).toBeVisible(); 

    await home.addToDoItem("Fail my test");
    await page.keyboard.press('Enter');
    await home.assertListItemVisibility("Fail my test", true);

    await home.clearList();
    await home.assertListItemVisibility("Fail my test", false);

  });  
});

