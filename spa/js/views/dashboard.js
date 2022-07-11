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

        <div id="searchDash" data-link onclick="location.href='/search'">
            <div class="cat"><img src ="./images/placeholder_search.png" width="335" height="44" alt="search page link"></div>
        </div>
        
        <div class="storeLink-menu">
        <span><h3>Links &#9776</h3><span>
            <div class="storeLink">
                <p><a href="https://interlinksupply.com/aboutus" target="_blank">About Us</a></p>
            </div>            
            <div class="storeLink">
                <p><a href="https://interlinksupply.com/terms-conditions" target="_blank">Terms & Conditions</a></p>
            </div>
            <div class="storeLink">
                <p><a href="https://interlinksupply.com/" target="_blank">interlinksupply.com</a></p>
            </div>            
        </div>
        `;
    }
}