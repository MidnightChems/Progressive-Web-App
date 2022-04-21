import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Adhesives");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Adhesive</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gum-break-adhesive-remover-1-quart.html" target="_blank">Bridgepoint Gum Break &trade;</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Remove as much as you can using a Gum Getter, table knife or other mechanical means. Rinse with water if other chemicals have been used.</li>
            <li>Apply Gum Break (Gel Break in states not regulated by low VOC laws) to contaminated fibers.</li>
            <li>Agitate gently with Gum Getter.</li>
            <li>Allow to dwell for 5 minutes.</li>
            <li>Apply Avenge Pro.</li>
            <li>Agitate to emulsify and suspend contamination.</li>
            <li>Rinse thoroughly.</li>
            <li>Mist with Spot Stop, and brush in with a carpet brush.</li>
            </ol> 
            </div>
        `;
    }
}