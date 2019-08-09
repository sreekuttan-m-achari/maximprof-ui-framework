
function renderData(page , parameter ){
    switch(page) {

        case "home":
            console.log("Home \n ");
            //getHome();
            break; 

        case "contact_us":
            console.log("Contact Us \n ");

            getContactUs();

            break;

        case "about_us":
            console.log("About Us \n ");

            getAboutUs();

            break;
         
        default:
             console.log("Default Render \n ");
    } 
}

