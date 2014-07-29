var args = arguments[0] || {};

// Get guest collection
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

// Add labels for each contact method
for(i=0; i<guestContactInfo.length; i++) {
	var newMethod = Alloy.createController("contactdisplay", {
		contactType : guestContactInfo[i].get("contactType"),
		contactVal : guestContactInfo[i].get("contactValue")
	}).getView();
	
	contactContainer.add(newMethod);
}

function removeSignature() {
	var confirm = Titanium.UI.createAlertDialog({
        title: 'Remove guest',
        message: 'Are you sure you want delete this guest signature?',
        buttonNames: ['Yes', 'No'],
        cancel: 1
	});
	
	confirm.addEventListener('click', function(e){
        if (e.cancel === e.index || e.cancel === true) {
        return false;
        }
        if (e.index === 0){
            // destroy the model from persistence, which will in turn remove
			// it from the collection, and model-view binding will automatically
			// reflect this in the tableview
			for(i=0; i<guestContactInfo.length; i++) {
				guestContactInfo[i].destroy();
			}
			guest.destroy();
			// Close this window
			$.window.close();
        }
	});
	
	confirm.show();
	
	
	
	
}
