import AbstractView from "/spa/js/views//AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Adhesives");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Adhesive</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gum-break-adhesive-remover-1-quart.html" target="_blank">Bridgepoint Gum Break &trade;</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gel-break-adhesive-remover-1-pint.html" target="_blank">Bridgepoint Gel Break &trade;</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Remove as much as you can mechanically, rinse with water if evident that 
            other chemicals have been used.</li>
            <li>Apply Gum Break (Gel Break in states not regulated by low VOC laws) to 
            white towel.  Wipe affected areas from all directions.  For heavy residue apply 
            directly to fabric.</li>
            <li>Agitate gently with Gum Getter or other spotting spatula.</li>
            <li>Allow to dwell for 2 minutes.</li>
            <li>Rinse thoroughly.  Assist drying with blotting of dry towel. </li>
            </ol> 
            </div>
        `;
    }
}