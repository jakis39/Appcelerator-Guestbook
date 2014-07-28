// Get guests collection
var guests = Alloy.Collections.guests;
guests.fetch();

// Get contact info collection
console.log(Alloy.Collections.contactinfo);
if(Alloy.Collections.contactinfo == undefined) {
	Alloy.Collections.contactinfo = Alloy.createCollection('contactinfo');
}
var contactInfo = Alloy.Collections.contactinfo;
contactInfo.fetch();

function showGuest(event) {
	var selectedGuest = event.source;
	console.log("EVENT");
	console.log(event);
	console.log("SELECTED GUEST");
	console.log(selectedGuest);
	
	// Use rowData to get guest id, look in event printout
	var args = {
		guestId : selectedGuest.guestId
	};
	var guestView = Alloy.createController("guestdetails", args).getView();
	guestView.open();
}

function signGuestbook() {
	var signBook = Alloy.createController("signguestbook", {}).getView();
	signBook.open();
}

$.index.open();
