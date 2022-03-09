import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Rust");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery -  Rust</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-t-rust-rust-remover-1-gallon.html" target="_blank">Bridgepoint T-Rust™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Rust can appear when metal buttons or staples are present under the fabric. Using a cotton swab, apply T-Rust only to the affected area. Allow several minutes dwell time.</li>
            <li>Rinse / Extract with hot water. Make dry passes.</li>
            <li>Mist on Stop Spot. Work in with fabric brush.</li>
            <li>Dry with air movement across the fabric.</li>        
            </ol> 
            </div>
        `;
    }
}