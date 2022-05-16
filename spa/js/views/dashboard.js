import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Spot & Stain Guide - Alpha");
    }

    async getHtml() {
        return `
        <h2>Select a Surface</h2>
        <div class="nav" data-link onclick="location.href='/carpet'">
            <div class="cat">Carpet</div>
        </div>
        <div class="nav" data-link onclick="location.href='/upholstery'">
            <div class="cat">Upholstery</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface'">
            <div class="cat">Hard Surfaces</div>
        </div>
        <br>
        <br>
        <div class="storeLink">
            <p>Visit our online store: <a href="https://interlinksupply.com/" target="_blank">interlinksupply.com</a></p>
        </div>
        <div class="storeLink">
            <p><a href="https://www.aramsco.com/terms-conditions" target="_blank">Terms & Conditions</a></p>
        </div>
        `;
    }
}