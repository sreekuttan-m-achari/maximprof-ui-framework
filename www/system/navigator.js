 function navigate(element , parameter ,  remotecontent = 0 ){

    var nav_pg = element.getAttribute("data-nav");
    var ext = ".html";
    var page = "";

    if(remotecontent = 1 ) {
    	page += "app/views/"+nav_pg+ext;
    }else{
    	page += base_url+nav_pg ;
    }

    console.log(page) ;

    if(element == 'splash'){
    	document.getElementById('navElement').style.display = "none"; 
    }else{
    	document.getElementById('navElement').style.display = "block"; 
    }

    document.getElementById('coreElement').setAttribute("w3-include-html", page ); 
    w3.includeHTML();

    renderData(nav_pg , parameter );
}

