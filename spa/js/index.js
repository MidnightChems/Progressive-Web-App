//JS file for the SPA
console.log("SPA JS loaded");
// importing main pages
import dashboard from "/spa/js/views/dashboard.js";
import upholstery from "/spa/js/views/upholstery.js";
import carpet from "/spa/js/views/carpet.js";
import hardSurface from "/spa/js/views/hard-surface.js";
// importing upholstery pages
import upholsteryAdhesives from "/spa/js/views/upholstery-adhesives.js";
import upholsteryBleach from "/spa/js/views/upholstery-bleach.js";
import upholsteryCompound from "/spa/js/views/upholstery-compound.js";
import upholsteryCurry from "/spa/js/views/upholstery-curry.js";
import upholsteryPolish from "/spa/js/views/upholstery-polish.js";
import upholsteryInks from "/spa/js/views/upholstery-inks.js";
import upholsteryOils from "/spa/js/views/upholstery-oils.js";
import upholsteryOrganic from "/spa/js/views/upholstery-organic.js";
import upholsteryPaint from "/spa/js/views/upholstery-paint.js";
import upholsteryPh from "/spa/js/views/upholstery-ph.js";
import upholsteryProtein from "/spa/js/views/upholstery-protein.js";
import upholsteryRust from "/spa/js/views/upholstery-rust.js";
import upholsterySynthetic from "/spa/js/views/upholstery-synthetic.js";
import upholsterySoils from "/spa/js/views/upholstery-soils.js";
import upholsteryUrine from "/spa/js/views/upholstery-urine.js";
// end importing upholstery pages
// importing carpet pages
import carpetAdhesives from "/spa/js/views/carpet-adhesives.js";
import carpetBleach from "/spa/js/views/carpet-bleach.js";
import carpetClay from "/spa/js/views/carpet-clay.js";
import carpetCompound from "/spa/js/views/carpet-compound.js";
import carpetCurry from "/spa/js/views/carpet-curry.js";
import carpetFiltration from "/spa/js/views/carpet-filtration.js";
import carpetFurniture from "/spa/js/views/carpet-furniture.js";
import carpetPolish from "/spa/js/views/carpet-polish.js";
import carpetInks from "/spa/js/views/carpet-inks.js";
import carpetOils from "/spa/js/views/carpet-oils.js";
import carpetOrganic from "/spa/js/views/carpet-organic.js";
import carpetPaint from "/spa/js/views/carpet-paint.js";
import carpetPh from "/spa/js/views/carpet-ph.js";
import carpetProtein from "/spa/js/views/carpet-protein.js";
import carpetRust from "/spa/js/views/carpet-rust.js";
import carpetSynthetic from "/spa/js/views/carpet-synthetic.js";
import carpetToner from "/spa/js/views/carpet-toner.js";
import carpetSalt from "/spa/js/views/carpet-salt.js";
import carpetUrine from "/spa/js/views/carpet-urine.js"; 

const navigateTo = url =>  {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        // importing main pages  
        { path: "/", view: dashboard},
        { path: "/upholstery", view: upholstery},
        { path: "/carpet", view: carpet},
        { path: "/hardsurface", view: hardSurface},
        // importing upholstery pages                
        { path: "/upholstery-adhesives", view: upholsteryAdhesives},
        { path: "/upholstery-bleach", view: upholsteryBleach},
        { path: "/upholstery-compound", view: upholsteryCompound},
        { path: "/upholstery-curry", view: upholsteryCurry},
        { path: "/upholstery-polish", view: upholsteryPolish},
        { path: "/upholstery-inks", view: upholsteryInks},
        { path: "/upholstery-oils", view: upholsteryOils},
        { path: "/upholstery-organic", view: upholsteryOrganic},
        { path: "/upholstery-paint", view: upholsteryPaint},
        { path: "/upholstery-ph", view: upholsteryPh},
        { path: "/upholstery-protein", view: upholsteryProtein},
        { path: "/upholstery-rust", view: upholsteryRust},
        { path: "/upholstery-synthetic", view: upholsterySynthetic},
        { path: "/upholstery-soils", view: upholsterySoils},
        { path: "/upholstery-urine", view: upholsteryUrine},
        // end importing upholstery pages
        // importing carpet pages
        { path: "/carpet-adhesives", view: carpetAdhesives},
        { path: "/carpet-bleach", view: carpetBleach},
        { path: "/carpet-compound", view: carpetCompound},
        { path: "/carpet-curry", view: carpetCurry},
        { path: "/carpet-clay", view: carpetClay},
        { path: "/carpet-filtration", view: carpetFiltration},
        { path: "/carpet-furniture", view: carpetFurniture},
        { path: "/carpet-polish", view: carpetPolish},
        { path: "/carpet-inks", view: carpetInks},
        { path: "/carpet-oils", view: carpetOils},
        { path: "/carpet-organic", view: carpetOrganic},
        { path: "/carpet-paint", view: carpetPaint},
        { path: "/carpet-ph", view: carpetPh},
        { path: "/carpet-protein", view: carpetProtein},
        { path: "/carpet-rust", view: carpetRust},
        { path: "/carpet-salt", view: carpetSalt},
        { path: "/carpet-synthetic", view: carpetSynthetic},        
        { path: "/carpet-urine", view: carpetUrine},
        { path: "/carpet-toner", view: carpetToner},


          // end importing carpet pages
      
    ];

    //test each route for match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();    
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
            //added below line to scroll window to top when loading new page
            window.scrollTo(0, 0);
        }
    });
    
    router();
});

