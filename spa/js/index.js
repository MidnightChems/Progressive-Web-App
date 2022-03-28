console.log("SPA JS loaded");
import dashboard from "/spa/js/views/dashboard.js";
// importing upholstery pages
import upholstery from "/spa/js/views/upholstery.js";
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

const navigateTo = url =>  {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [ 
        { path: "/", view: dashboard},
        { path: "/upholstery", view: upholstery},
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

