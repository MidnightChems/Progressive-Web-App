import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Salt");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Salt</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-pet-stain-odor-neutralizer-urine-neutralizer-1-gallon.html" target="_blank">Bridgepoint Systems™ Urine Neutralizer</a></li>
            <li><a href="https://interlinksupply.com/catalogsearch/result/?q=Bridgepoint+Prespray" target="_blank">Bridgepoint Systems™ Prespray</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-extraction-rinse-end-zone-1-gallon.html" target="_blank">Bridgepoint Systems™ End Zone</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-extraction-rinse-flex-ice-6-lbs.html" target="_blank">Bridgepoint Systems™ Flex Ice</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-spot-stop-encapsulating-polymer-1-quart.html" target="_blank">Bridgepoint Systems™ Spot Stop</a></li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Use Brush Pro or pile lifter with passes in each direction to loosen and remove as much residue as possible.</li>
            <li>Spray on a solution of Urine Neutralizer. Work in with Grandi Brush.</li>
            <li>Clean carpet using HWE and appropriate prespray.</li>       
            <li>Include End Zone or Flex Ice in your rinse solution. Make extra vacuum only passes.</li>
            <li>Encapsulate affected area using Encapuclean Green DS to prevent wick back. As an alternative, you can spray on and brush in Spot Stop.</li>
            <p>NOTE: Suggest extensive use of entry way matting and limited application of ice melters to reduce future staining.</p>
            </ol> 
            </div>
        `;
    }
}