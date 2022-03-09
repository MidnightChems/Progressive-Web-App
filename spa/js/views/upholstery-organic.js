import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Organic Based");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Organic Based</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-oxybuff-cotton-shampoo-8-lbs.html" target="_blank">Bridgepoint OxyBuff Cotton Shampoo™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Stain Zone™ </a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>            
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Blot with dry towel any of the staining material that can be removed with light agitation. Rinse with water if other chemicals have been used.</li>
            <li>If stain remains, clean entire piece with OxyBuff Cotton Shampoo.</li>
            <li>Apply Avenge Pro Spotter to the affected area. Agitate gently to produce foam. Extract with warm water or wipe with white towel. Continue as long as progress is being made.</li>
            <li>Rinse and extract including several dry passes.</li>
            <li>As a last resort, if stain remains, then apply lightly Stain Zone diluted with equal amount of distilled water.  Allow 15 minute dwell time, then rinse thoroughly.  Repeat entire procedure if necessary.</li>
            <li>Mist on Spot Stop. Work in with fabric brush.</li>           
            </ol> 
            </div>
        `;
    }
}