import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Synthetic");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Synthetic</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-coffee-stain-remover-2-lbs.html" target="_blank">Bridgepoint Systems™ Coffee Stain Remover</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-fabric-shampoo-1-gallon.html" target="_blank">Bridgepoint Systems™ Fabric Shampoo</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-red-zone-ready-one-part-red-stain-remover-1-quart.html" target="_blank">Bridgepoint Systems™ Red Zone Ready</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>          
            </ul>   
            <strong><u>Info:</u></strong>
            <p>Use this process only after standard cleaning process - using warm water - has been tried. Reducing agents can weaken some natural fabrics.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Rinse any chemical residues from the fabric.</li>
            <li>Clean entire piece by creating your own Haitian Cotton Shampoo by mixing Fabric Shampoo 1 to 16 with warm water.  Add 1 oz. Coffee Stain Remover per gallon of ready to use solution.  Whip into foam.  Use horsehair brush to apply foam and work into fabric.  Focus attention on stained areas.  For white or near white fabrics, cleaning in direct sunlight will increase the effectiveness of this treatment.</li>
            <li>Allow up to 20 minutes dwell time. Rinse and extract thoroughly.</li>
            <li>If stain persists, apply Red Zone Ready diluted 1 to 1 to the stain only, use cotton swab. Gently work into the fabric. Allow dwell time.</li>
            <li>When stain is gone or after 15 minutes, rinse and extract with hot water. Use extra dry vacuum passes.</li>
            <li>Mist on Spot Stop. Work in with fabric brush.</li> 
            </ol> 
            </div>
        `;
    }
}