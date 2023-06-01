import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Disperse Dye – Curry, Mustard");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Curry, Mustard</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Systems™ Stain Zone</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Yellow Curry, most mustard and other pickled product will contain turmeric. Turmeric is an herbal plant in the ginger family grown in tropical South Asia. Once processed it has a deep orange yellow color that is used to color and flavor mustard and other food product. The color in this powder is strong enough to be used as a dye in fabrics. It is a potent disperse dye that will not always be removable from fiber while maintaining the original color of that fiber. If previous treatment and cleaning to the stain has occurred, it lessens the chance the stain can be removed.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Apply Avenge Pro to stained fibers only.</li>
            <li>Agitate lightly.</li>
            <li>Rinse thoroughly. Leave as dry as possible, even blotting with a towel or using air movement.</li>
            <li>If no color remains, Mist with Spot Stop, and work in with carpet brush</li>
            <li>If color remains (if it has turmeric there will be color):</li>
            <li>Apply Stain Zone to the stained fibers only.</li>
            <li>Invert a UV flashlight, the type used for urine detection, over the stain to provide the greatest concentration of UV light to the stain. Check every 5 minutes. If there is any indication of color loss from the carpet, discontinue use.</li>
            <li>Rinse thoroughly.</li>
            <li>Mist with Spot Stop, and work in with a carpet brush.</li>
            <p>Note: Stain Zone may be accelerated with heat but this can result in dye loss from the fiber. Extra caution should be used to keep the Stain Zone only on the contaminated fiber with careful monitoring of progress if heat is applied.</p>
            </ol> 
            </div>
        `;
    }
}