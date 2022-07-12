import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Urine");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Upholstery - Urine</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-avenge-pro-1-gallon.html" target="_blank">Bridgepoint Systems™ Avenge Pro</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-upholstery-cleaning-oxybuff-cotton-shampoo-8-lbs.html" target="_blank">Bridgepoint Systems™ OxyBuff Cotton Shampoo</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Flush thoroughly with extraction tool and warm water.</li>
            <li>Apply Avenge Pro Spotter to the affected area. Agitate gently to produce foam.</li>
            <li>Extract foam with warm (not hot) water or wipe up with white towel.</li>
            <li>Repeat steps 2 - 4 as long as progress is being made.</li>
            <li>Apply Spot Stop. Work in with fabric brush.</li>
            <li>Mist with Spot Stop, and work in with fabric brush.</li>
            <li>If stain remains, clean with Oxybuff Cotton Shampoo. Test inconspicuous area first. Allow foam to dwell on stain for several minutes.</li>
            <p>NOTE: Urine may result in color loss which is not correctable by cleaning.  Stain removal is for surface stains and not for sub-surface contamination.<p>
            </ol>
            <div class="blog">             
            <strong><u>Pro's Corner:</u></strong>
            <p>View our Pro's Corner blog for more info on this stain!<br><a href="https://blog.aramsco.com/necessary-factors-for-effective-urine-removal" target="_blank">Necessary Factors For Effective Urine Removal</a></p>
            </div> 
            </div>
        `;
    }
}