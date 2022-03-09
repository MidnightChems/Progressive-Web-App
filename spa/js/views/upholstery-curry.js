import AbstractView from "/spa/js/views//AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Disperse Dye – Curry, Mustard");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Curry, Mustard</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Stain Zone™ </a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Yellow Curry, most mustard and other pickled product will contain turmeric. Turmeric is an herbal plant in the ginger family grown in tropical South Asia. Once processed it has a deep orange yellow color that is used to color and flavor mustard and other food product. The color in this powder is strong enough to be used as a dye in fabrics. It is a potent disperse dye that will not always be removable from fiber while maintaining the original color of that fiber. If previous treatment and cleaning to the stain has occurred, it lessens the chance the stain can be removed.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Vacuum, brush or scrape off as much of the dried material as possible.  Rinse with water if chemicals have been used.</li>
            <li>Wet affected area with Avenge Pro Spotter. Agitate into foam. Allow 2-3 minutes dwell time. Rinse with warm water.</li>
            <li>Repeat as long as staining material is being removed.</li>
            <li>Extract for maximum dryness.</li>
            <li>Mist on Spot Stop. Work in with fabric brush.</li>
            <li>For synthetic fibers only: If color remains, dampen affected area with StainZONE.</li>
            <li>Allow dwell time of several hours. Keep stain damp with StainZONE. Stain will slowly fade.</li>
            </ol> 
            </div>
        `;
    }
}