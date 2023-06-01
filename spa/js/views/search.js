import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Search");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Search</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>


            <input type="text" id="myInput" onkeyup="mySearch()" placeholder="Search for stains.." title="Type in a stain">

           
            
            <div id="searchList">
                        <div class="nav" data-link onclick="location.href='/carpet-adhesives'">
                        <div class="cat"> Carpet - Adhesives</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-bleach'">
                        <div class="cat"> Carpet - Bleach Neutralization</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-compound'">
                        <div class="cat"> Carpet - Compound Emulsification</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-curry'">
                        <div class="cat"> Carpet - Disperse Dye - Curry</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-furniture'">
                        <div class="cat"> Carpet - Disperse Dye - Furniture</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-polish'">
                        <div class="cat"> Carpet - Disperse Dye - Shoe Polish</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-inks'">
                        <div class="cat"> Carpet - Inks</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-oils'">
                        <div class="cat"> Carpet - Oil Based</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-organic'">
                        <div class="cat"> Carpet - Organic</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-paint'">
                        <div class="cat"> Carpet - Paint</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-ph'">
                        <div class="cat"> Carpet - pH Dependent Stains</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-protein'">
                        <div class="cat"> Carpet - Protein Stains</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-rust'">
                        <div class="cat"> Carpet - Rust</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-salt'">
                        <div class="cat"> Carpet - Salt</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-synthetic'">
                        <div class="cat"> Carpet - Synthetic</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-filtration'">
                        <div class="cat"> Carpet - Unusual Soils - Filtration</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-clay'">
                        <div class="cat"> Carpet - Unusual Soils - Red Clay</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/carpet-toner'">
                    <div class="cat"> Carpet - Unusual Soils - Toner</div>
                </div>
                    <div class="nav" data-link onclick="location.href='/carpet-urine'">
                        <div class="cat"> Carpet - Urine</div>
                    </div> 
                    
                                <div class="nav" data-link onclick="location.href='/hardsurface-adhesives'">
                        <div class="cat"> Hard Surface - Adhesives</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-curry'">
                        <div class="cat"> Hard Surface - Disperse Dye - Curry</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-oils'">
                        <div class="cat"> Hard Surface - Oil Based</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-organic'">
                        <div class="cat"> Hard Surface - Organic</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-rust'">
                        <div class="cat"> Hard Surface - Rust</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-efflorescence'">
                        <div class="cat"> Hard Surface - Surface Adhesion – Efflorescence</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-scum'">
                        <div class="cat"> Hard Surface - Surface Adhesion – Minerals & Soap Scum</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-etching'">
                        <div class="cat"> Hard Surface - Surface Etching</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/hardsurface-dye'">
                        <div class="cat"> Hard Surface - Dye</div>
                    </div>

                                <div class="nav" data-link onclick="location.href='/upholstery-adhesives'">
                        <div class="cat"> Upholstery - Adhesives</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-bleach'">
                        <div class="cat"> Upholstery - Bleach Neutralization</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-compound'">
                        <div class="cat"> Upholstery - Compound Emulsification</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-curry'">
                        <div class="cat"> Upholstery - Disperse Dye - Curry</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-polish'">
                        <div class="cat"> Upholstery - Disperse Dye - Shoe Polish</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-inks'">
                        <div class="cat"> Upholstery - Inks</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-oils'">
                        <div class="cat"> Upholstery - Oil Based</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-organic'">
                        <div class="cat"> Upholstery - Organic</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-paint'">
                        <div class="cat"> Upholstery - Paint</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-ph'">
                        <div class="cat"> Upholstery - pH Dependent Stains</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-synthetic'">
                        <div class="cat"> Upholstery - Synthetic</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-soils'">
                        <div class="cat"> Upholstery - Unusual Soils</div>
                    </div>
                    <div class="nav" data-link onclick="location.href='/upholstery-urine'">
                        <div class="cat"> Upholstery - Urine</div>
                    </div>

            </div>

            
           
        `;
    }
}