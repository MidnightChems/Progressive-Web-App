import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Unusual Soils – Fingerprint Powder, Printer Toner");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Unusual Soils – Fingerprint Powder, Printer Toner</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint Systems™ All Solv Extreme</a>(Do not use on rayon or acetate fabrics.)</li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-red-zone-ready-one-part-red-stain-remover-1-quart.html" target="_blank">Bridgepoint Systems™ Red Zone Ready</a></li>          
            </ul>   
            <strong><u>Caution!:</u></strong>
            <p>Rayon or acetate fibers can be dissolved by this procedure. Cotton and some other natural fibers can be weakened. Use this method for salvage only after standard cleaning procedures have failed. It is suggested that you get informed consent from the client.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Start the clean-up as soon as possible. Wear gloves so the powder doesn't react with oils on your hands. Shut off HVAC, fans, close windows, etc. Powders can be spread by even small air currents.</li>
            <li>Vacuum thoroughly. Use HEPA vacuum or extraction unit equipped with a Dust-Downer. Avoid redistributing the fine powders into the air. Gently use fabric brush while vacuuming to dislodge powder. Remove as much as possible in dry state.</li>
            <li>Apply Avenge Pro Spotter. Agitate to produce foam and suspend particles. Extract or use towel to wipe up foam.</li>
            <li>Repeat step 3 as long as staining material is being removed.</li>
            <li>Extract with hot water. Make vacuum only passes for maximum dryness.</li>
            <li>If necessary, apply All Solv Extreme. Agitate, rinse and extract. Caution: Do not apply All Solv Extreme to rayon or acetate fibers.</li>
            <li>Repeat steps 3 - 6 as long as progress is being made.</li>
            <li>CAUTION: This step can weaken some natural fibers. Proceed with client's informed consent. If color remains, Apply Red Zone Ready. Allow up to 20 minutes dwell time. Rinse and extract with hot water.</li>
            <li>Mist on Spot Stop. Work in with fabric brush.</li>
            </ol> 
            </div>
        `;
    }
}