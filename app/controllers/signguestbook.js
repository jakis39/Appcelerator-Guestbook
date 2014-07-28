var contactContainer = $.contactMethods;
addContactMethod();

function signBook() {
	var firstName = $.firstName.value;
	var lastName = $.lastName.value;
	var comment = $.comment.value;
	
	if(firstName == "" || lastName == "" || comment == "") {
		alert("Please fill out all fields");
	}
	else {
		// Get collections
		var guests = Alloy.Collections.guests;
		guests.fetch();
		var contactInfo = Alloy.Collections.contactinfo;
		contactInfo.fetch();
		
		// Create new guest entry for testing
		var newGuest = Alloy.createModel('guests', {
			firstName : firstName,
			lastName : lastName,
			signDate : new Date(),
			comment : comment
		});
		
		// Add guest entry to collection
		guests.add(newGuest);
		newGuest.save();
		
		var contactMethods = contactContainer.children;
		
		for(i=0; i< contactMethods.length; i++) {
			var children = contactMethods[i].children;
			console.log("Type = " + children[0].getSelectedRow(0).title);
			console.log("Value = " + children[1].value);
			
			var type = children[0].getSelectedRow(0).title;
			var value = children[1].value;
			
			if(type != "" && value != "" && type != undefined && value != undefined) {
				var newContact = Alloy.createModel('contactinfo', {
					contactType : type,
					contactValue : value,
					guestId : newGuest.get('guestId')
				});
				contactInfo.add(newContact);
				newContact.save();
			}
		}
		$.signguestbook.close();
	}
}

function addContactMethod() {
	var newMethod = Alloy.createController("contactinputs", {}).getView();
	contactContainer.add(newMethod);
}
