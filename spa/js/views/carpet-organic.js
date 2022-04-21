import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Organic Based");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Organic Based</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-red-zone-ready-one-part-red-stain-remover-1-quart.html" target="_blank">Bridgepoint RedZONE Ready™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Stain Zone™ </a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>            
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>If other spotters appeared to have been used then rinse thoroughly.  Rinse to remove stain material if carpet appears to be other than nylon or wool or if the factory applied protector is still effective.</li>
            <li>Apply Avenge Pro.</li>
            <li>Agitate lightly.</li>
            <li>Rinse thoroughly.</li>
            <p>If no color remains:</p>
            <li>Mist with Spot Stop, and work in with a carpet brush.</li>
            <p>If color remains:</p>
            <li>Leave as dry as possible, even blotting with a towel.</li>
            <li>Apply Stain Zone and allow to dry. Stain will gradually disappear.</li>  
            <li>Some stains contain synthetic dyes. If stain is not removed by Stain Zone, rinse thoroughly and vacuum to almost dry then apply Red Zone Ready following directions on the label.</li>             
            </ol> 
            </div>
        `;
    }
}