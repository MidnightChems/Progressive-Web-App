import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - pH Dependent Stains");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - pH Dependent Stains</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Stain Zone™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-extraction-rinse-fab-set-1-gallon.html" target="_blank">Bridgepoint Fab-Set™</a></li>
            </ul>   
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Apply Stain Zone.</li>
            <li>Lightly agitate.</li>
            <li>Rinse thoroughly and dry with multiple strokes.</li>
            <li>If no stain remains, mist with Spot Stop, and work in with a brush. *If stain remains, apply Stain Zone and leave to dry naturally. Stain will disappear in 1 to 8 hours.</li>
            <p>For large areas of browning or yellowing:</p>
            <li>Spray on Fab-Set mixed 4 to 8 oz. per gallon.</li>
            <li>Work in with carpet brush. Browning or yellowing will gradually fade over next 30 minutes.</li>            
            </ol> 
            </div>
        `;
    }
}