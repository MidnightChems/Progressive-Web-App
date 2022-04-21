import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Disperse Dye – Furniture");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Furniture</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Avenge Pro™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Stain Zone™ </a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Spot Stop™</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint All Solv Xtreme</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Note: The stain may be from metal touching damp carpet (rust - see rust procedure) or from furniture stain or natural colors as found in some red woods. If the stain is noticed during normal carpet cleaning while moving the furniture and was caused by moisture from the cleaning, quick action addressing the stain will usually result in success. Otherwise success on old stains may be spotty.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>If fresh - apply Avenge Pro, agitate and extract.</li>
            <li>If no stain remains, mist with Spot Stop, and brush in with a Whiz Groom.</li>
            <p>If the stain remains or is older than a few minutes:</p>
            <li>Apply All Solv Xtreme to a clean white absorbent towel. Slowly wipe across the stained area from several directions. Continue if any staining material is being removed.</li>
            <li>Apply Stain Zone to the stained fibers</li>
            <li>Cover with plastic to allow longer dwell time - up to 16 hours</li>
            <li>If stain remains - repeat. If the stain doesn't respond you may try Stain Zone with a heat treatment, but loss of carpet color is a potential issue.</li>
            </ol> 
            </div>
        `;
    }
}