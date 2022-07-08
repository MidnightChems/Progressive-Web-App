import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Oil");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Oil</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gum-break-adhesive-remover-1-quart.html" target="_blank">Bridgepoint Systems™ Gum Break™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Blot or scrape any of the staining material that can be removed using spatula edge of Gum Getter.</li>
            <li>Apply Avenge Pro Spotter. Agitate gently. Allow 2 or 3 minutes dwell time.</li>
            <li>Flush with hot water. Include vacuum only passes to help dry.</li>
            <li>Repeat steps 2 and 3 if necessary.</li>
            <li>If oil remains, apply Gum Break (Gel Break in states not regulated by low VOC laws). Work into fibers. Allow several minutes dwell time.</li>
            <li>Extract with hot water.</li>
            <li>Mist with Spot Stop and work in with a carpet brush.</li>
            </ol> 
            </div>
        `;
    }
}