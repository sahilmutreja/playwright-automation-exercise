import { HomePage } from './HomePage.js';

export class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(page);
    }

    async getHomePage() {
        return this.homePage;
    }
}