// Get guests collection
var guests = Alloy.Collections.guests;
guests.fetch();


// If contactinfo collection isn't defined, create it
if(Alloy.Collections.contactinfo == undefined) {
	Alloy.Collections.contactinfo = Alloy.createCollection('contactinfo');
}
// Get contact info collection
var contactInfo = Alloy.Collections.contactinfo;
contactInfo.fetch();

// Launches a new window to display the details of a guest signature.
// Called on click of a table row
function showGuest(event) {
	// get rowData
	var selectedGuest = event.rowData;
	
	// Build args object to send to controller of guestdetails page
	var args = {
		guestId : selectedGuest.guestId
	};
	
	// Create guestdetails instance, send arguments, open
	var guestView = Alloy.createController("guestdetails", args).getView();
	guestView.open();
}

// Launches a new window to allow the user ("guest") to input their info, aka sign the guestbook
// Called on click of "Sign guestbook" button in the action bar
function signGuestbook() {
	var signBook = Alloy.createController("signguestbook", {}).getView();
	signBook.open();
}

$.index.open();
