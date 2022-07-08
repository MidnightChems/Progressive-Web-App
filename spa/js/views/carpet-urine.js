import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Urine");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Urine</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Stain Zone™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-pet-stain-odor-neutralizer-urine-stain-remover-1-gallon.html" target="_blank">Bridgepoint™ Urine Stain Remover with Hydrocide™</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Apply Urine Stain Remover or Stain Zone (for more difficult staining).</li>
            <li>Lightly agitate and provide enough dwell time to see results.</li>
            <li>Blot with towel to remove any residues</li>
            <li>Apply Urine Stain Remover as final step.(if necessary)</li>
            <li>Allow to dry naturally and stain will disappear in 1 to 8 hours.</li>
            <p>Note: If urine has saturated into the backing and pad, apply a heavy dose of Urine Stain Remover followed by flushing using a Spot Claw or Flash Extractor. It is likely more thorough treatments may be necessary.<p>
            </ol> 
            </div>
        `;
    }
}