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
            <div class="cat">Carpet</div>
        </div>
        <div class="nav" data-link onclick="location.href='/upholstery'">
            <div class="cat">Upholstery</div>
        </div>
        <div class="nav" data-link onclick="location.href='/'">
            <div class="cat">Hard Surfaces</div>
        </div>
        `;
    }
}