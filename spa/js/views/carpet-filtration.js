import AbstractView from "/spa/js/views/AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Carpet - Unusual Soils – Filtration");
    }

    async getHtml() {
        return `
            <div class="topNav"> 
            <div class="topNavBack"><img src="images/back.png" onclick="javascript:history.back();"></div>         
            <div class="topNavText"><strong><h2>Carpet - Unusual Soils – Filtration</h2></strong></div>
            <div class="topNavHome"><img src="images/home.png" onclick="location.href='/';"></div> 
            </div>
                        
            <div class ="guide">
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-filter-free-filtration-soil-remover-1-quart.html" target="_blank">Bridgepoint Systems™ Filter Free</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-carpet-cleaning-prespray-traffic-slam-1-gallon.html" target="_blank">Bridgepoint Systems™ Traffic Slam (optional)</a></li>
            <li><a href="https://interlinksupply.com/bridgepoint-systems-stain-remover-stain-zone-oxidizer-1-quart.html" target="_blank">Bridgepoint Systems™ Stain Zone</a></li>          
            </ul>   
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">            
            <li>Vacuum thoroughly to remove built-up soil.</li>
            <li>Apply Filter Free. Option - Traffic Slam mixed at 8:1 is also effective on soiling. It will also be more economical for large areas.</li>
            <li>Agitate vigorously using brush. Allow 5 minutes dwell time.</li>
            <li>Rinse and extract with very hot water.</li>
            <li>If color remains, Apply Stain Zone, Work in. Staining will fade gradually. This may take several hours. Leave it damp. There's no need for a final rinse.</li>
            </ol> 
            </div>
        `;
    }
}