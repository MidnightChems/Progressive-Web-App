import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surface - Etching");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Hard Surface - Etching</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2690-0631-viper-cst01gl-stoneperfect-alkaline-stone-tile-grout-cleaner-1-gallon203960.html" target="_blank">Viper Stone Perfect</a></li>
            <li><a href="https://interlinksupply.com/2692-0633-viper-vivid-neutral-stone-cleaner203962.html" target="_blank">Viper Neutral Stone Cleaner</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-cleaning-booster-boost-all-8-lbs.html" target="_blank">Bridgepoint Systems™ Boost-All</a></li>
            <li><a href="https://interlinksupply.com/catalogsearch/result/index/?cat=16&q=spinergy" target="_blank">Spinergy Stone Polishing Pads(various grits)</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-viper-prestige-impregnating-sealer-water-based-1-gallon.html" target="_blank">Viper Prestige Impregnating Sealers</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Acids can etch the surface of many stones including marble, travertine, limestone, Terrazzo, some serpentine and other stones that contain calcium. Remove any dry soil from the area to be cleaned. This can be done with an untreated dust mop or other appropriate method. Walls and counters can be rinsed with water.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Mix Viper Neutral Stone Cleaner or Viper Stone Perfect 1:8 with water. Spray onto to stained area. Allow several minutes dwell time. Rinse with extraction equipment. This will neutralize the acid and prevent continuing damage.</li>
            <li>If a stain is present, apply industry distributed poultice. Follow directions on the label.</li>
            <li> If there is discoloration after step 2, mix up a paste with water and Bridgepoint Systems™  Boost All and allow to dry to remove discoloration.  Depending upon the particular make-up of the stone and what caused the etch, the surface will be etched to a greater or lesser extent. It will be necessary to restore the original level of gloss. This will require one or more Spinergy Polishing Pads. See Spinergy Stone Maintenance & Cleaning Reference Guide for help in evaluating which grits to use and how to polish the floor.</li>
            <li>Apply SolidRock  or Prestige Impregnating Sealers to aid in limiting further issues.</li>           
            </ol> 
            </div>
        `;
    }
}