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
	var selectedGuest = event.rowData;
	
	var args = {
		guestId : selectedGuest.guestId
	};
	var guestView = Alloy.createController("guestDetails", args).getView();
	guestView.open();
}

function signGuestbook() {
	var signBook = Alloy.createController("signguestbook", {}).getView();
	signBook.open();
}

$.index.open();
