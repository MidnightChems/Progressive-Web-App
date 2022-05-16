import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surface - Rust");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Hard Surface -  Rust</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2691-0632-viper-cst02gl-resuscitate-acid-cleaner-for-stone-tile-grout-1-gallon203961.html" target="_blank">Viper Resuscitate</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-hard-surface-cleaner-viper-renew-restorative-tile-grout-cleaner-1-gallon.html" target="_blank">Viper Renew</a></li>
            <li><a href="https://interlinksupply.com/2690-0631-viper-cst01gl-stoneperfect-alkaline-stone-tile-grout-cleaner-1-gallon203960.html" target="_blank">Viper Stoneperfect</a></li>
            <li><a href="https://interlinksupply.com/2692-0633-viper-vivid-neutral-stone-cleaner203962.html" target="_blank">Viper Stone</a></li>
            <li><a href="https://interlinksupply.com/catalogsearch/result/index/?cat=16&q=spinergy" target="_blank">Spinergy Stone Polishing Pads(various grits)</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-hard-surface-cleaner-viper-grout-concrete-sealer-1-gallon.html" target="_blank">Viper Grout And Concrete Sealer </a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>The rust removal process will etch surfaces containing calcium. Avoid severe etching by limiting the strength and time that Resuscitate or Viper Renew is applied. Be sure to rinse as directed. The etching that results can be corrected or masked.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Remove any dry soil from the area to be cleaned. This can be done with an untreated dust mop or other appropriate method.</li>
            <li>Mix Resuscitate or Viper Renew 1:16 to 1:4 with water according to severity of stain. Protect unaffected areas. Apply to stained area. Allow 2-3 minutes dwell time.</li>
            <li>Rinse with StonePerfect  or Viper Stone and water at 1:32</li>
            <li>To correct etching and restore the original gloss level you will need to use one or more Spinergy Polishing Pads. See Spinergy Stone Maintenance & Cleaning Reference Guide for help in evaluating which grits to use and how to polish floors or walls.</li>
            <li>Light etching can be masked (not removed) by applying a thin layer of an industry approved color enhancer.</li>
            <li>Seal the surface with SolidRock or Prestige Impregnating Sealers.</li> 
            </ol> 
            </div>
        `;
    }
}