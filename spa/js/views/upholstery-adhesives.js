import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Stain Guide - Upholstery - Adhesives");
    }

    async getHtml() {
        return `
        
            <strong><h1>Upholstery - Adhesive</h1></strong>
            <strong><u>Recommened Products:</u></strong>
            <ul class="chems">
            <li>Bridgepoint Gum Break &trade;</li>
            <li>Bridgepoint Gel Break &trade;</li>
            </ul>
            <strong><u>Procedures:</u></strong>
            <ol class="procedures" type="1">
            <li>Remove as much as you can mechanically, rinse with water if evident that 
            other chemicals have been used.</li>
            <li>Apply Gum Break (Gel Break in states not regulated by low VOC laws) to 
            white towel.  Wipe affected areas from all directions.  For heavy residue apply 
            directly to fabric.</li>
            <li>Agitate gently with Gum Getter or other spotting spatula.</li>
            <li>Allow to dwell for 2 minutes.</li>
            <li>Rinse thoroughly.  Assist drying with blotting of dry towel. </li>
            </ol> 
        
        `;
    }
}