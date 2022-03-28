import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Spot & Stain Guide PWA");
    }

    async getHtml() {
        return `
        <h2>Select a Surface</h2>
        <div class="nav" data-link onclick="location.href='/'">
            <div class="test">Carpet</div>
        </div>
        <div class="nav" data-link onclick="location.href='/upholstery'">
            <div class="test">Upholstery</div>
        </div>
        <div class="nav" data-link onclick="location.href='/'">
            <div class="test">Hard Surfaces</div>
        </div>
        `;
    }
}