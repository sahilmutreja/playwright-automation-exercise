export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url, { timeout: 5000, waitUntil: 'domcontentloaded' });
        const locator = this.page.locator("[aria-label='Consent']");
        await locator.click();
    }
    
}