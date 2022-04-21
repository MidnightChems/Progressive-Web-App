import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Unusual Soils – Clay");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Unusual Soils – Clay</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-t-rust-rust-remover-1-gallon.html" target="_blank">Bridgepoint T-Rust™</a></li>         
            </ul>   
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Vacuum thoroughly. Break up soil with Gum getter. Vacuum again. Repeat.</li>
            <li>Apply Avenge Pro. Agitate to generate foam.</li>
            <li>Rinse and extract. Continue steps 2 - 3 as long as progress is being made.</li>
            <li>If red color remains, apply T-Rust. Work into stain with carpet brush. Allow dwell time. Rinse and extract.</li>
            </ol> 
            </div>
        `;
    }
}