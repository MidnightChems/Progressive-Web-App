import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Spot & Stain Guide PWA");
    }

    async getHtml() {
        return `
        <h3>Select a Surface</h3>
        <ul class="nav">
        <li><a href="/" class="nav__link" data-link>Dashboard</a></li>
        <li><a href="/posts" class="nav__link" data-link>Posts</a></li>
        <li><a href="/settings" class="nav__link" data-link>Settings</a></li>         
        </ul> 
        
        `;
    }
}