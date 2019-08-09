function getHome(){

	var data_url = base_api_url+"home" ;

	if (sessionStorage.home &&  cache ) {
   		home_controller(  sessionStorage.home );
   		console.log("cached");
	} else {
	    
		$.get(data_url, function(data, status){
	        //console.log ("Data: "+  JSON.stringify(data) )  ;
	        //console.log("\nStatus: " + status);

	        if( status  == "success") {

	        	sessionStorage.home = JSON.stringify(data) ;
	    		home_controller(  sessionStorage.home );
	    		console.log("api call");

		    }else{
		    	return 0 ;
		    }
	    });

	}
}


function getContactUs(){

	var data_url = base_api_url+"contactus" ;

	if (sessionStorage.contactus &&  cache ) {
   		contactus_controller(  sessionStorage.contactus );
   		console.log("cached");
	} else {
	    
		$.get(data_url, function(data, status){
	        //console.log ("Data: "+  JSON.stringify(data) )  ;
	        //console.log("\nStatus: " + status);

	        if( status  == "success") {

	        	sessionStorage.contactus = JSON.stringify(data) ;
	    		contactus_controller(  sessionStorage.contactus );
	    		console.log("api call");

		    }else{
		    	return 0 ;
		    }
	    });

	}
}

function getAboutUs(){

	if (sessionStorage.aboutus &&  cache ) {
   		aboutus_controller(sessionStorage.aboutus);
   		console.log("cached");
	} else {
	    
	var data_url = base_api_url+"aboutus";

	$.get(data_url, function(data, status){
        console.log ("Data: "+ JSON.stringify(data)) ;
        console.log("\nStatus: " + status);

        if(status == "success"){
        	sessionStorage.aboutus = JSON.stringify(data) ;
    		aboutus_controller(sessionStorage.aboutus);
    		console.log("api call");
	    }else{
	    	return 0 ;
	    }

    });
}

    
}