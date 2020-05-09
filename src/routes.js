import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import Details from "./components/Details";
import form from "./components/Form"; 


const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        title: "Anasayfa"
    },
    {
        path: "/tur/:yazilanTur",
        exact: false,
        component: FilteredDogs,
        title: "Filtrelenmis Dogs"
    },
    {
        path: "/form",
        exact: false,
        component: form,
        title: "Form"
    },
    {
        path: "/details/:id", 
        exact: false, 
        component: Details, 
        title: 'Details'
    }
];

export default routes;