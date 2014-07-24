// Get gests collection
var guests = Alloy.Collections.guests;
guests.fetch();

// Get contact info collection
console.log(Alloy.Collections.contactinfo);
if(Alloy.Collections.contactinfo == undefined) {
	Alloy.Collections.contactinfo = Alloy.createCollection('contactinfo');
}
var contactInfo = Alloy.Collections.contactinfo;
contactInfo.fetch();

/*
// Create new guest entry for testing
var newGuest = Alloy.createModel('guests', {
	firstName : "Charles",
	lastName : "Dickens",
	signDate : new Date(),
	comment : "Hello this is Charles Dickens"
});

// Add guest entry to collection
guests.add(newGuest);
newGuest.save();

// Create accompanying contact infos
var newContact1 = Alloy.createModel('contactinfo', {
	contactType : "Home phone",
	contactValue : "905 555-5555",
	guestId : newGuest.get('guestId')
});
var newContact2 = Alloy.createModel('contactinfo', {
	contactType : "email",
	contactValue : "suckmydick@gmail.com",
	guestId : newGuest.get('guestId')
});

contactInfo.add(newContact1);
newContact1.save();
contactInfo.add(newContact2);
newContact2.save();*/


function showGuest(event) {
		var selectedGuest = event.source;
		var args = {
			guestId : selectedGuest.guestId
		};
		var guestView = Alloy.createController("guestDetails", args).getView();
		guestView.open();
}

function signGuestbook() {
	
}

$.index.open();
