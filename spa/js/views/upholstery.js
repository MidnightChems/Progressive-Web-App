import AbstractView from "/spa/js/views/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery");
    }

    async getHtml() {
        return `
        <div class="topNav"> 
        <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>
        <div class="topNavText"><h2>Upholstery</h2></div>         
        <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
        </div>
        
        <h3>Select a Surface</h3>
        <ul class="nav">
        <li><a href="/upholstery-adhesives" class="nav__link" data-link>Adhesives</a></li>
        <li><a href="/upholstery-bleach" class="nav__link" data-link>Bleach Neutralization</a></li>
        <li><a href="/upholstery-compound" class="nav__link" data-link>Compound Emulsification</a></li>
        <li><a href="/upholstery-curry" class="nav__link" data-link>Disperse Dye - Curry</a></li>
        <li><a href="/upholstery-polish" class="nav__link" data-link>Disperse Dye - Shoe Polish</a></li>        
        <li><a href="/upholstery-inks" class="nav__link" data-link>Inks</a></li>           
        <li><a href="/upholstery-oils" class="nav__link" data-link>Oil Based</a></li>      
        <li><a href="/upholstery-organic" class="nav__link" data-link>Organic</a></li>       
        <li><a href="/upholstery-paint" class="nav__link" data-link>Paint</a></li>
        <li><a href="/upholstery-ph" class="nav__link" data-link>pH Dependent Stains</a></li>
        <li><a href="/upholstery-protein" class="nav__link" data-link>Protein Stains</a></li>
        <li><a href="/upholstery-rust" class="nav__link" data-link>Rust</a></li>
        <li><a href="/upholstery-synthetic" class="nav__link" data-link>Synthetic</a></li>
        <li><a href="/upholstery-soils" class="nav__link" data-link>Unusual Soils</a></li>
        <li><a href="/upholstery-urine" class="nav__link" data-link>Urine</a></li>             
        </ul> 
        
        `;
    }
}