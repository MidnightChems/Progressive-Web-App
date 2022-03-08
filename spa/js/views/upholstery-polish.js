import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Disperse Dye – Shoe Polish");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Shoe Polish</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint All Solv Extreme™ </a>(Do not use on rayon or acetate fabrics.)</li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Patiently, use Whiz Groom for gentle agitation to break into pieces and vacuum up as much as possible.  Rinse with water if evident other chemicals have been used.</li>
            <li>Apply Avenge Pro Spotter to the affected area. Work into stain producing foam. Foam containing contaminants can be removed using back of edge of Whiz Groom as a squeegee.</li>
            <li>Add All Solv Extreme and continue gentle agitation. Allow 2 or 3 minutes dwell time. CAUTION: Do not use All Solv Extreme on rayon or acetate fibers!   Continue with Avenge Pro instead</li>
            <li>Rinse and extract with hot water. Make several dry passes.</li>
            <li>Repeat steps 2 - 4 as needed.</li>
            <li>Mist on Spot Stop. Work in with fabric brush.</li>
            </ol> 
            </div>
        `;
    }
}