

function aboutus_controller(data){
	console.log ("Model Data: "+ data) ;
	//$(".app").find("#about_us").html( data ) ;

	var about_us =  JSON.parse(data);

	//Model Data: {"version":"1.0","build":"alpha"}

	var view = "";

	view += about_us[0].details  ;

	$(".app").find("#about_us").html(view) ;
}

function contactus_controller(data){
	console.log ("Model Data: "+ data) ;
	//$(".app").find("#contact_us").html(data) ;

	var contact_us =  JSON.parse(data);

	//Model Data: {"address":"Address Line 1 , Address Line 2 ","phone":"+919847980829"}

	var view = "";

	view += contact_us[0].details  ;

	$(".app").find("#contact_us").html(view) ;
}
