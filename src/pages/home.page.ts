import {Page, expect} from '@playwright/test';

export class HomePage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators

    get headerText(){
        return this.page.getByText('To Do List');
    }

    get whatNeedsToBeDoneInputBox(){
        return this.page.locator(`//input[@placeholder="What need's to be done?"]`);
    }

    get clearButton(){
        return this.page.getByRole('button', { name: "Clear" });
    }


    // Helpers

    async addToDoItem(item: string){
        await this.whatNeedsToBeDoneInputBox.fill(item);
    }

    async clearList(){
        await this.clearButton.click();
    }

    // Asserts

    async assertListItemVisibility(text: string, isPresent: boolean){
        const listItemLocator =  this.page.locator(`//label[text()='${text}']`);
        
        if(isPresent){
            await expect(listItemLocator).toBeVisible();
        }
        else {
            await expect(listItemLocator).not.toBeVisible();
        }
    }
    
}

