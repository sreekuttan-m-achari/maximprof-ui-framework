
function home_offices_controller(data){
	console.log ("Model Data: "+ data) ;
	//$(".app").find("#home_offices").html(data) ;

	var details =  JSON.parse(data);

	/*
	Model Data: [{"id":1,"title":"Adv 1","file":"top-slider-1.jpg"},{"id":2,"title":"Adv 2","file":"top-slider-2.jpg"},{"id":3,"title":"Adv 3","file":"top-slider-3.jpg"},{"id":4,"title":"Adv 4","file":"top-slider-4.jpg"},{"id":5,"title":"Adv 5","file":"top-slider-5.jpg"}]
	*/

	var view = "";


	for (var i = 0; i < details.length; i++) {

		var office = details[i];

		console.log(office.title);

		view += ' <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-nav = "contacts_list"  onclick="navigate(this ,'+office.id+' )" ><i class="ico-cat ico-cat6"></i>'+office.title+'</a></li> ' ;
	}

	$(".app").find("#home_offices").html(view) ;
}


function contactslist_controller(data){

	console.log ("Model Data: "+ data) ;
	//$(".app").find("#home_offices").html(data) ;

	var details =  JSON.parse(data);

	/*
	Model Data: [{"id":1,"title":"Adv 1","file":"top-slider-1.jpg"},{"id":2,"title":"Adv 2","file":"top-slider-2.jpg"},{"id":3,"title":"Adv 3","file":"top-slider-3.jpg"},{"id":4,"title":"Adv 4","file":"top-slider-4.jpg"},{"id":5,"title":"Adv 5","file":"top-slider-5.jpg"}]
	*/

	var view = "";

	view  += '<ul>' ;


	for (var i = 0; i < details.length; i++) {

		var contacts_list = details[i];

		console.log(contacts_list.title);

		view += ' <li role="presentation">'+contacts_list.title+'<a href="tel:'+contacts_list.phone+'"><i class="ico-cat ico-cat6"></i>'+contacts_list.phone+'</a></li> ' ;
	}

	view  += '</ul>' ;

	$(".app").find("#content_title").html("ContactList : "+contacts_list.officetitle) ;
	$(".app").find("#contacts_list").html(view) ;
}