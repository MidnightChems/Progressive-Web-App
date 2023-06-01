import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Inks");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Inks</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-p-i-g-paint-ink-grease-remover-1-quart.html" target="_blank">Bridgepoint Systems™ P.I.G.</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint Systems™ All Solv Extreme</a>(Do not use on rayon or acetate fabrics.)</li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Apply Avenge Pro Spotter. Agitate to produce foam. Wipe foam into clean towel. Continue as long as ink is being removed.</li>
            <li>Rinse.</li>
            <li>Apply Spot Stop. Brush into fabric.</li>
            <li>If stain remains, apply P.I.G. to towel and wipe stain. Continue as long as ink is being removed.</li>
            <li>If stain remains, apply All Solv Extreme. Gently agitate. Groom. CAUTION: Do not use All Solv Extreme on rayon or acetate fibers!</li>
            <li>Apply Avenge Pro Spotter. Agitate.</li>
            <li>Rinse and extract with hot water.</li>
            <li>Apply Spot Stop. Work in with fabric brush.</li>
            </ol> 
            </div>
        `;
    }
}