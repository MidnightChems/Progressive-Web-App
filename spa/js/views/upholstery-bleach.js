import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Bleach Neutralization");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Bleach Neutralization</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint All Solv Extreme™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-red-zone-ready-one-part-red-stain-remover-1-quart.html" target="_blank">Bridgepoint Red Zone Ready™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Rinse with water if evident other chemicals have been used.</li>
            <li>Apply All Solv Extreme to a clean white cotton towel. Wipe affected area gently from several directions.</li>
            <li>Mix RedZONE Ready with hot water. Mist on. Brush gently to assure penetration.</li>
            <li>This will remove and neutralize contamination to prevent further damage, but will not replace lost color. Color repair (spot dye) should be considered.</li>
            </ol> 
            </div>
        `;
    }
}