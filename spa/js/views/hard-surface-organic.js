import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Organic Based");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Organic Based</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2690-0631-viper-cst01gl-stoneperfect-alkaline-stone-tile-grout-cleaner-1-gallon203960.html" target="_blank">Viper Stoneperfect</a></li>
            <li><a href="https://interlinksupply.com/2692-0633-viper-vivid-neutral-stone-cleaner203962.html" target="_blank">Viper Stone</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Systems Stain Zone</a></li>
            <li><a href="https://interlinksupply.com/catalogsearch/result/index/?cat=16&q=spinergy" target="_blank">Spinergy Stone Polishing Pads(various grits)</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-hard-surface-cleaner-viper-grout-concrete-sealer-1-gallon.html" target="_blank">Viper Grout And Concrete Sealer </a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Stains can penetrate deeply into porous stone if it has not been sealed and properly maintained.</p>           
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Clean using Viper Stone or StonePerfect and SX-15, Gekko wand or similar tools. This will remove most stains from well-maintained stone.</li>
            <li>If stain remains, wet the affected area with StainZONE Ready. Allow a few minutes for it to penetrate.</li>
            <li>Apply industry distributed poultice.  Follow directions on the label.</li>
            <li>If stain persists, repeat steps 2 and 3.</li>
            <li>Depending upon the particular make-up of the stone, the surface may be etched. If so, it will be necessary to restore the original level of gloss. This will require one or more Spinergy Polishing Pads. See Spinergy Stone Maintenance & Cleaning Reference Guide for help in evaluating which grits to use and how to polish the floor.</li>
            <li>When stain has been removed, seal the stone with either SolidRock or Prestige Impregnating Sealers to aid in preventing future stains.</li>           
            </ol> 
            </div>
        `;
    }
}