var args = arguments[0] || {};
var guests = Alloy.Collections.guests;
guests.fetch();

// Get guest by id
var guest = guests.where({guestId : args.guestId});
guest = guest[0];

// Fill in name, comment, date
$.name.text = guest.get("firstName") + " " + guest.get("lastName");
$.comment.text = "\"" + guest.get("comment") + "\"";
var dateDate = new Date(guest.get("signDate"));
var dateString = "Signed on " + dateDate.getDate() + "/" + dateDate.getMonth() + "/" + dateDate.getFullYear(); 
$.date.text = dateString;

var contactContainer = $.contactContainer;
console.log(contactContainer);

var contactinfo = Alloy.Collections.contactinfo;
var guestContactInfo = contactinfo.where({guestId : args.guestId});

console.log("contact info array length = " + guestContactInfo.length);
console.log(guestContactInfo);

// Add labels for each contact method
for(i=0; i<guestContactInfo.length; i++) {
	var newMethod = Alloy.createController("contactdisplay", {
		contactType : guestContactInfo[i].get("contactType"),
		contactVal : guestContactInfo[i].get("contactValue")
	}).getView();
	
	//newMethod.contactType.setText(guestContactInfo[i].get("contactType"));
	//newMethod.contactValue.setText(guestContactInfo[i].get("contactValue"));
	contactContainer.add(newMethod);
	
	/*
	var contactTypeLabel = Ti.UI.createLabel({
			text: guestContactInfo[i].get("contactType")
		});
		var contactValueLabel = Ti.UI.createLabel({
			text: guestContactInfo[i].get("contactValue")
		});
		contactContainer.add(contactTypeLabel);
		contactContainer.add(contactValueLabel);*/
	
}