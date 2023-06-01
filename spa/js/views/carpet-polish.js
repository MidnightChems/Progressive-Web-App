import AbstractView from "/spa/js/views/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Disperse Dye – Shoe Polish");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Shoe Polish</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint Systems™ All Solv Extreme</a>(Do not use on rayon or acetate fabrics.)</li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>If stain is still damp, blot up as much as possible. If stain is dry, Use agitation to break into pieces and vacuum up as much as possible.</li>
            <li>Apply Avenge Pro to the affected area. Agitate to produce foam. Staining material will be visible in foam.</li>
            <li>Use back edge of Gum Getter to scrape foam and staining material into towel.</li>
            <li>Repeat as long as progress is being made.</li>
            <li>Rinse and extract with hot water. Make additional vacuum passes to get carpet reasonably dry.</li>
            <li>Apply All Solv Xtreme to white towel and thoroughly wipe affected area.</li>
            <li>Mist on Spot Stop, and work in with carpet brush.</li>
            </ol> 
            </div>
        `;
    }
}