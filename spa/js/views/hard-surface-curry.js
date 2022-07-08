import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surface - Disperse Dye – Curry, Mustard");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Hard Surface - Curry, Mustard</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2690-0631-viper-cst01gl-stoneperfect-alkaline-stone-tile-grout-cleaner-1-gallon203960.html" target="_blank">Viper Stone Perfect</a></li>
            <li><a href="https://interlinksupply.com/2692-0633-viper-vivid-neutral-stone-cleaner203962.html" target="_blank">Viper Neutral Stone Cleaner</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint™ Systems Stain Zone</a></li>
            <li><a href="https://interlinksupply.com/catalogsearch/result/index/?cat=16&q=spinergy" target="_blank">Hydro-Force Stone Polishing Pads(various grits)</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-viper-prestige-impregnating-sealer-water-based-1-gallon.html" target="_blank">Viper Prestige Impregnating Sealers</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Yellow Curry, most mustard and other pickled product will contain turmeric. Turmeric is an herbal plant in the ginger family grown in tropical South Asia. Once processed it has a deep orange yellow color that is used to color and flavor mustard and other food product. The color in this powder is strong enough to be used as a dye in fabrics. It is a potent disperse dye that will not always be removable from surface.  Stains can penetrate deeply into porous grout and stone if it has not been sealed and properly maintained.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Clean using Viper Neutral Stone Cleaner or Stone Perfect and SX-15, Gekko wand or similar tools. This will remove most stains from well-maintained stone.</li>
            <li>Agitate lightly.</li>
            <li>If stain remains, wet the affected area with Stain Zone. Allow a few minutes for it to penetrate.</li>
            <li>If no color remains, Mist with Spot Stop, and brush in with a Whiz Groom.</li>
            <li>Apply industry distributed poultice.  Follow directions on the label.</li>
            <li>If stain persists, repeat steps 2 and 3.</li>
            <li>Depending upon the particular make-up of the stone, the surface may be etched. If so, it will be necessary to restore the original level of gloss. This will require one or more Spinergy Polishing Pads. See Spinergy Stone Maintenance & Cleaning Reference Guide for help in evaluating which grits to use and how to polish the floor.</li>
            <li>When stain has been removed, seal the stone with Prestige Impregnating Sealers to aid in preventing future stains.</li>
            </ol> 
            </div>
        `;
    }
}