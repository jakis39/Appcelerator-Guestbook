var args = arguments[0] || {};
var guests = Alloy.Collections.guests;
guests.fetch();

var guest = guests.where({guestId : args.guestId});
guest = guest[0];

$.firstNameLabel.text = guest.get("firstName");
$.lastNameLabel.text = " " + guest.get("lastName");
$.commentLabel.text = guest.get("comment");
$.dateLabel.text = guest.get("signDate");

var container = $.labelsView;
console.log(container);

var contactinfo = Alloy.Collections.contactinfo;
var guestContactInfo = contactinfo.where({guestId : args.guestId});

console.log("contact info array length = " + guestContactInfo.length);
console.log(guestContactInfo);

for(i=0; i<guestContactInfo.length; i++) {
	var newLabel1 = Ti.UI.createLabel({
		text: guestContactInfo[i].get("contactType")
	});
	var newLabel2 = Ti.UI.createLabel({
		text: guestContactInfo[i].get("contactValue")
	});
	container.add(newLabel1);
	container.add(newLabel2);
}