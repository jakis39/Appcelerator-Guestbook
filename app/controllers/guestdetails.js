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

// Add labels for each contact method
for(i=0; i<guestContactInfo.length; i++) {
	var contactTypeLabel = Ti.UI.createLabel({
		text: guestContactInfo[i].get("contactType")
	});
	var contactValueLabel = Ti.UI.createLabel({
		text: guestContactInfo[i].get("contactValue")
	});
	container.add(contactTypeLabel);
	container.add(contactValueLabel);
}