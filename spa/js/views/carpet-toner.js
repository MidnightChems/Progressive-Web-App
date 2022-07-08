import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Unusual Soils – Toner");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Unusual Soils – Toner</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint Systems™ All Solv Extreme</a></li>          
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>          
            </ul>   
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Thoroughly dry vacuum toner residue.</li>
            <li>Apply Avenge Pro.</li>
            <li>Agitate to develop foam and suspend toner.</li>
            <li>Rinse thoroughly.</li>
            <li>Repeat steps 2 and 3 as long as progress is being made.</li>
            <li>If no stain remains, mist with Spot Stop, and work in with a carpet brush.</li>
            <P>If stain remains:</P>
            <li>Apply All Solv Extreme.</li>
            <li>Agitate lightly.</li>
            <li>Apply Avenge Pro.</li>
            <li>Agitate lightly.</li>
            <li>Rinse thoroughly.</li>
            <li>Mist with Spot Stop, and work in with a carpet brush.</li>
            </ol> 
            </div>
        `;
    }
}