import AbstractView from "/spa/js/views/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surfaces");
    }

    async getHtml() {
        return `
        <div class="topNav"> 
        <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>
        <div class="topNavText"><h2>Hard Surfaces</h2></div>         
        <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
        </div>
        
        <h3>Select a Surface</h3>  
        
        <div class="nav" data-link onclick="location.href='/hardsurface-adhesives'">
            <div class="cat">Adhesives</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-curry'">
            <div class="cat">Disperse Dye - Curry</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-oils'">
            <div class="cat">Oil Based</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-organic'">
            <div class="cat">Organic</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-rust'">
            <div class="cat">Rust</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-efflorescence'">
            <div class="cat">Surface Adhesion – Efflorescence</div>
        </div>
          <div class="nav" data-link onclick="location.href='/hardsurface-scum'">
            <div class="cat">Surface Adhesion – Minerals & Soap Scum</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-etching'">
            <div class="cat">Surface Etching</div>
        </div>
        <div class="nav" data-link onclick="location.href='/hardsurface-dye'">
            <div class="cat">Dye</div>
        </div>
        `;
    }
}