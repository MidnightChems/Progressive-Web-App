import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Hard Surface - Adhesives");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Hard Surface - Adhesive</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/2690-0631-viper-cst01gl-stoneperfect-alkaline-stone-tile-grout-cleaner-1-gallon203960.html" target="_blank">Viper Stoneperfect</a></li>
            <li><a href="https://interlinksupply.com/2692-0633-viper-vivid-neutral-stone-cleaner203962.html" target="_blank">Viper Stone</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gum-break-adhesive-remover-1-quart.html" target="_blank">Bridgepoint Systems Gum Break</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-gel-break-adhesive-remover-1-pint.html" target="_blank">Bridgepoint Systems Gel Break</a></li>
            <li><a href="https://interlinksupply.com/hydro-force-hard-surface-cleaner-viper-grout-concrete-sealer-1-gallon.html" target="_blank">Viper Grout And Concrete Sealer </a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Scrape loose any residues that can be removed using spatula edge. Do not scrape with any tool that could scratch the surface.</li>
            <li>Clean using Viper Stone or StonePerfect and SX-15, Gekko wand or similar tools. Agitation with scrub brush may be helpful. This will remove most stains from tile, grout and well-maintained stone.</li>
            <li>If any residues remain, apply enough Gum Break (Gel Break in states not regulated by low VOC laws) for the gel to cover the residues.  Allow 15 minutes dwell time and scrape off remaining residues using spatula edge.  Repeat as necessary.</li>
            <li>Thoroughly rinse with water.</li>
            <li>If stain persists, repeat steps 3 and 4.</li>
            <li>When residues have been removed, seal grout and stone with Solid Rock or Prestige Impregnating 
            Sealers to aid in preventing future issues.</li>
            </ol> 
            </div>
        `;
    }
}