console.log("SPA JS loaded");
import dashboard from "./views/dashboard";
// importing upholstery pages
import upholstery from "./views/upholstery";
import upholsteryAdhesives from "./views/upholstery-adhesives";
import upholsteryBleach from "./views/upholstery-bleach";
import upholsteryCompound from "./views/upholstery-compound";
import upholsteryCurry from "./views/upholstery-curry";
import upholsteryPolish from "./views/upholstery-polish";
import upholsteryInks from "./views/upholstery-inks";
import upholsteryOils from "./views/upholstery-oils";
import upholsteryOrganic from "./views/upholstery-organic";
import upholsteryPaint from "./views/upholstery-paint";

const navigateTo = url =>  {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [ 
        { path: "/", view: dashboard},
        // importing upholstery pages        
        { path: "/upholstery", view: upholstery},
        { path: "/upholstery-adhesives", view: upholsteryAdhesives},
        { path: "/upholstery-bleach", view: upholsteryBleach},
        { path: "/upholstery-compound", view: upholsteryCompound},
        { path: "/upholstery-curry", view: upholsteryCurry},
        { path: "/upholstery-polish", view: upholsteryPolish},
        { path: "/upholstery-inks", view: upholsteryInks},
        { path: "/upholstery-oils", view: upholsteryOils},
        { path: "/upholstery-organic", view: upholsteryOrganic},
        { path: "/upholstery-paint", view: upholsteryPaint},
        
      
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
        }
    });
    
    router();
});