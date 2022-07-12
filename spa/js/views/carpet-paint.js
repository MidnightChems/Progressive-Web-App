import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Paint");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Paint</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-p-i-g-paint-ink-grease-remover-1-quart.html" target="_blank">Bridgepoint Systems™ P.I.G. </a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-all-solv-extreme-gel-12-oz.html" target="_blank">Bridgepoint Systems™ All Solv Extreme </a>(Do not use on rayon or acetate fabrics.)</li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>
            <strong><u>Info:</u></strong>
            <p>Enamel paint is oil based. If cleaning up a fresh (un-dried) spill then use of a solvent spotter such as PIG should be employed. Once dry, it forms a pigmented resin and needs the following treatment. Paint is formulated to dry in very thin layers. It is also removed a thin layer at a time. When larger volumes of paint are involved, it is often more practical to do a bonded insert.</p>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Apply Avenge Pro to limit wicking to non-contaminated fibers and the backing by allowing it to spread into foam.</li>
            <li>Gently agitate and blot with a towel to absorb suspended pigments.</li>
            <li>Apply All Solv Extreme.</li>
            <li>Gently agitate and blot with a towel until majority of stain is gone.</li>
            <li>Apply Avenge Pro and agitate.</li>
            <li>Rinse thoroughly.</li>
            <li>Repeat if necessary.</li>
            <li>Mist with Spot Stop, and work in with carpet brush.</li>
            </ol>
            <div class="blog">             
             <strong><u>Pro's Corner:</u></strong>
             <p>View our Pro's Corner blog for more info on this stain!<br><a href="https://blog.aramsco.com/how-to-remove-paint-from-carpet" target="_blank">How To Remove Paint From Carpet</a></p>
             </div> 
            </div>
        `;
    }
}