import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - pH Dependent Stains");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - pH Dependent Stains</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-extraction-rinse-fab-set-1-gallon.html" target="_blank">Bridgepoint Systems™ Fab-Set</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-oxybuff-cotton-shampoo-8-lbs.html" target="_blank">Bridgepoint Systems™ OxyBuff Cotton Shampoo</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-fabric-shampoo-1-gallon.html" target="_blank">Bridgepoint Systems™ Fabric Shampoo</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-coffee-stain-remover-2-lbs.html" target="_blank">Bridgepoint Systems™ Coffee Stain Remover</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>   
            <strong><u>Info:</u></strong>
            <p>Yellowing may result from several factors or a combination of factors. Safer and simpler solutions are listed first. Test to see what process is safe and effective for each situation. Yellowing from age and/or exposure to sunlight will have weakened fabric. Proceed with caution.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Mix Fab-Set with warm water at 1:20. Spray a heavy mist onto the fabric. Work in with horse hair brush. Allow up to 10 minutes to determine if this corrects the yellowing.</li>
            <li>If yellowing remains, mix 4 oz. Oxybuff Cotton Shampoo with 1 gallon hot water. Whip into foam. Apply using horse hair brush. Allow up to 20 minutes dwell time. For white or near-white fabrics, cleaning in direct sunlight will increase the effectiveness of this treatment.</li>
            <li>Rinse. Make additional dry passes.</li>
            <li>Apply heavy mist of Spot Stop. Work in with fabric brush.</li>
            <li>If yellowing remains, create your own Haitian Cotton Shampoo by mixing Fabric Shampoo 1:16 with warm water. Add 1 oz. Coffee Stain Remover per gallon of ready-to-use solution. Whip into foam. Use horsehair brush to apply the foam and work it into the fabric. Allow 5 minutes to 20 minutes dwell time. For white or near-white fabrics, cleaning in direct sunlight will increase the effectiveness of this treatment.</li>
            <li>Rinse. Make additional dry passes.</li>          
            <li>Apply heavy mist of Spot Stop. Work in with fabric brush.</li> 
            </ol> 
            </div>
        `;
    }
}