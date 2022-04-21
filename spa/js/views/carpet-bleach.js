import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Bleach Neutralization");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Bleach Neutralization</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-red-zone-ready-one-part-red-stain-remover-1-quart.html" target="_blank">Bridgepoint Red Zone Ready™</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Note: The products in this stain class often contain bleach. When they come in contact with fibers (natural or synthetic) they may remove color from the fiber. Because of other ingredients in the staining material that attract soil, the stain will often look dark and the bleaching effect will not be apparent until the surface soil is removed.
            </p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Apply RedZONE Ready. Spray on generously.</li>
            <li>Agitate to assure penetration. Allow 10 minutes dwell time. Rinse thoroughly. Make dry passes.</li>
            <li>If stain remains, apply more RedZONE Ready. Use damp white towel and steam iron or a steamer to provide heat. Check after 20 to 30 seconds.</li>
            <li>Repeat if necessary.</li>
            <li>Spray on Spot Stop. Work in with a carpet brush.</li>
            <li>This will remove and neutralize contamination but will not replace lost color. Color repair or a bonded insert using Kool Glide should be considered.</li>
            </ol> 
            </div>
        `;
    }
}