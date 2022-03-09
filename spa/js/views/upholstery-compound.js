import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Compound Emulsification");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Compound Emulsification</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Remove any of the deposit that can be removed by scraping, brushing or dry vacuuming.  Rinse with water if evident other chemicals have been used.</li>
            <li>Apply Avenge Pro Spotter. Agitate lightly to produce foam.</li>
            <li>Wipe foam into towel or rinse and extract with hot water.</li>
            <li>Repeat as long as progress is being made.</li>
            <li>Mist on Spot Stop. Work in with fabric brush.</li>
            </ol> 
            </div>
        `;
    }
}