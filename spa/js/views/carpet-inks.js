import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Inks");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Inks</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Systems™  Stain Zone</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint Systems™ All Solv Extreme</a>(Do not use on rayon or acetate fabrics.)</li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Remove as much as you can by blotting, scraping or other mechanical means. Rinse with water if other chemicals have been used.</li>
            <li>Use Stain Zone to build a wall or barrier around the stain to prevent ink from crossing that barrier.</li>
            <li>Apply Avenge Pro directly to the stain and allow to dwell for 30 seconds. If the fiber is particular delicate as you would find on some upholstery, you may apply Avenge Pro to a towel first and the blot the stain. </li>
            <li>Apply a clean towel with pressure to absorb and remove the colored pigment. Repeat this until the largest part of the colored pigment has been removed.</li>
            <li>Apply Avenge Pro again.</li>
            <li>Agitate mildly into a foam, remove suspended contaminant (color suspended in the foam) and repeat as long as stain is moving into the foam.</li>
            <li>Apply All Solv Extreme and agitate and then Avenge Pro and agitate. Rinse then repeat if necessary.  Rinse thoroughly when finished.</li>
            <li>If any unpleasant odors persist, lightly mist Hydrocide on the spot.</li>
            <li>Mist on Spot Stop and work in with carpet brush.</li>
            </ol> 
            </div>
        `;
    }
}