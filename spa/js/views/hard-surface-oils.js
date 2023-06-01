import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surface - Oil Based");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Hard Surface - Oil Based</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2690-0631-viper-cst01gl-stoneperfect-alkaline-stone-tile-grout-cleaner-1-gallon203960.html" target="_blank">Viper Stone Perfect</a></li>
            <li><a href="https://interlinksupply.com/2692-0633-viper-vivid-neutral-stone-cleaner203962.html" target="_blank">Viper Neutral Stone Cleaner</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gum-break-adhesive-remover-1-quart.html" target="_blank">Bridgepoint Systems™ Gum Break</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gel-break-adhesive-remover-1-pint.html" target="_blank">Bridgepoint Systems™ Gel Break</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-viper-prestige-impregnating-sealer-water-based-1-gallon.html" target="_blank">Viper Prestige Impregnating Sealers</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Oil can penetrate deeply into porous stone and grout if it has not been sealed and properly maintained.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Clean using Viper Neural Stone Cleaner or Stone Perfect and SX-15, Gekko wand or similar tools. Agitation with scrub brush may be helpful. This will remove most oil stains from well-maintained stone.</li>
            <li>If residual oil remains, apply enough Gum Break (Gel Break in states not regulated by low VOC laws) for the gel to cover the spot.  Allow 15 minutes for dwell time and rinse off the area.</li>
            <li>If oil spot remains, then apply industry distributed poultice.  Follow directions on the label.</li>
            <li>When oil spot has been removed, seal the stone with Prestige Impregnating Sealers to aid in preventing future spots.</li>           
            </ol>
            <div class="blog">             
            <strong><u>Pro's Corner:</u></strong>
            <p>View our Pro's Corner blog for more info on this stain!<br><a href="https://blog.aramsco.com/stains-other-special-issues-with-stone-tile-grout" target="_blank">Stains & Other Special Issues With Stone, Tile, & Grout</a></p>
            </div> 
            </div>
        `;
    }
}