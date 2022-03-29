import AbstractView from "/spa/js/views/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet");
    }

    async getHtml() {
        return `
        <div class="topNav"> 
        <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>
        <div class="topNavText"><h2>Carpet</h2></div>         
        <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
        </div>
        
        <h3>Select a Surface</h3>  
        
        <div class="nav" data-link onclick="location.href='/carpet-adhesives'">
            <div class="cat">Adhesives</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-bleach'">
            <div class="cat">Bleach Neutralization</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-compound'">
            <div class="cat">Compound Emulsification</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-curry'">
            <div class="cat">Disperse Dye - Curry</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-furniture'">
            <div class="cat">Disperse Dye - Furniture</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-polish'">
            <div class="cat">Disperse Dye - Shoe Polish</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-inks'">
            <div class="cat">Inks</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-oils'">
            <div class="cat">Oil Based</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-organic'">
            <div class="cat">Organic</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-paint'">
            <div class="cat">Paint</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-ph'">
            <div class="cat">pH Dependent Stains</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-protein'">
            <div class="cat">Protein Stains</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-rust'">
            <div class="cat">Rust</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-salt'">
            <div class="cat">Salt</div>
        </div>
          <div class="nav" data-link onclick="location.href='/carpet-synthetic'">
            <div class="cat">Synthetic</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-filtration'">
            <div class="cat">Unusual Soils - Filtration</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-clay'">
            <div class="cat">Unusual Soils - Red Clay</div>
        </div>
        <div class="nav" data-link onclick="location.href='/carpet-toner'">
        <div class="cat">Unusual Soils - Toner</div>
    </div>
        <div class="nav" data-link onclick="location.href='/carpet-urine'">
            <div class="cat">Urine</div>
        </div>

        `;
    }
}