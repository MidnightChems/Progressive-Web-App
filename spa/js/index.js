console.log("JS loaded")
import dashboard from "./views/dashboard";
import settings from "./views/settings";
import posts from "./views/posts";
//import test from "../test";
const navigateTo = url =>  {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [ 
        { path: "/", view: dashboard},
        { path: "/posts", view: posts},
        { path: "/settings", view: settings},
    //    { path: "/test", view: test}
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
        }
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