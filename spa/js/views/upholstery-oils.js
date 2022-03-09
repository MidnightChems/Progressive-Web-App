import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Oil Based");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Oil Based</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-avenge-fabric-prespray-1-gallon.html" target="_blank">Bridgepoint Fabric Pre-spray™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-avenge-heavy-duty-fabric-prespray-1-gallon.html" target="_blank">Bridgepoint Heavy Duty Fabric Pre-spray™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gum-break-adhesive-remover-1-quart.html" target="_blank">Bridgepoint Gum Break™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gel-break-adhesive-remover-1-pint.html" target="_blank">Bridgepoint Gel Break™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Blot with dry towel any of the staining material that can be removed with light agitation using spatula edge. </li>
            <li>Clean upholstery as normal with use of Avenge Fabric Prespray for natural fibers and Avenge Heavy Duty Fabric Pre-spray for synthetics.</li>
            <li>If oil remains, apply Gum Break (Gel Break in states not regulated by low VOC laws) to towel and lightly blot the area.  Allow several minutes dwell time.</li>
            <li>Extract with hot water.</li>
            <li>Apply Spot Stop. Work in with fabric brush.</li>            
            </ol> 
            </div>
        `;
    }
}