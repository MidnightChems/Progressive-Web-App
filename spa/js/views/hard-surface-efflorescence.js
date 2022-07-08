import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surface - Efflorescence");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Hard Surface -  Efflorescence</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2691-0632-viper-cst02gl-resuscitate-acid-cleaner-for-stone-tile-grout-1-gallon203961.html" target="_blank">Viper Resuscitate</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-hard-surface-cleaner-viper-renew-restorative-tile-grout-cleaner-1-gallon.html" target="_blank">Viper Renew</a></li>
            <li><a href="https://interlinksupply.com/catalogsearch/result/index/?cat=16&q=spinergy" target="_blank">Hydro-Force Spinergy Stone Polishing Pads(various grits)</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-viper-prestige-impregnating-sealer-water-based-1-gallon.html" target="_blank">Viper Prestige Impregnating Sealers</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Efflorescence results from water traveling through floors. The water dissolves minerals and salts in concrete, grout or stone and then evaporates leaving these on the surface. When removing efflorescence, it is important not to allow moisture to penetrate into the grout or stone  or new efflorescence may be deposited as the floor dries.</p>
            <p>Efflorescence may appear either as a whitish powder or as a crystal. Powdery efflorescence will be easier to remove.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Brush efflorescence from grout lines and other affected areas. Sweep or vacuum and repeat as long as progress is being made. For large areas, a rotary floor machine and buffing pad can save time.</li>
            <li>If efflorescence persists, it will be necessary to wet clean and then to polish the affected area. Mix Viper Resuscitate or Viper Renew 1:1 with water. Dampen a small area using a sponge, mop or strip washer. It is important to get the efflorescence damp without allowing water to penetrate into the grout or stone. Protect areas not being treated including other stone or metal. Wear proper PPE.</li>
            <li>Allow only 2-3 minutes dwell time so solution does not penetrate into the floor. Rinse and extract, Use a minimum amount of moisture so as not to encourage the formation of more efflorescence. For small areas, this can be as simple as wiping with a damp towel.</li>
            <li>Quick dry with air movers when treating efflorescence.</li>
            <li>Use of acidic cleaning agents will etch the surface of most stone. It will be necessary to restore the original level of gloss using one or more Spinergy Polishing Pads. See Spinergy Stone Maintenance & Cleaning Reference Guide for help in evaluating which grits to use and how to polish floors or walls.</li>
            <li>Seal the floor with Prestige Solvent Based Impregnating Sealer.  Solvent Based Sealers will not reactivate the efflorescence.</li> 
            </ol> 
            </div>
        `;
    }
}