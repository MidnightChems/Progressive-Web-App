import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Spot & Stain Guide PWA");
    }

    async getHtml() {
        return `
        <h2>Select a Surface</h2>
        <ul class="nav">
        <li><a href="/" class="nav__link" data-link>Carpet</a></li>
        <li><a href="/upholstery" class="nav__link" data-link>Upholstery</a></li>
        <li><a href="/settings" class="nav__link" data-link>Hard Surfaces</a></li>         
        </ul> 
        
        `;
    }
}