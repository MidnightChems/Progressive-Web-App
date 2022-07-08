import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Synthetic");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Synthetic</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-red-zone-ready-one-part-red-stain-remover-1-quart.html" target="_blank">Bridgepoint Systems™ Red Zone Ready</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>          
            </ul>   
            <strong><u>Info:</u></strong>
            <p>If other spotter have been used then rinse thoroughly.  Rinse to remove staining material if carpet appears to be other than nylon or wool or if factory applied protector is still effective.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Apply Red Zone Ready.</li>
            <li>Place damp cotton towel over the stain.</li>
            <li>Place iron on to towel set on lowest steam setting.</li>
            <li>Allow to sit for 30 seconds and check for stain removal - continue if needed.</li>
            <li>Rinse thoroughly.</li>
            <li>Mist with Spot Stop, and work in with a carpet brush.</li>
            <li>Some stains contain organic dyes.  If stain is not removed by Red Zone Ready, rinse thoroughly and vacuum to almost dry then apply Stain Zone following directions on the label.</li>
            </ol> 
            </div>
        `;
    }
}