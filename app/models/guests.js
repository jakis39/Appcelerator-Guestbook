exports.definition = {
	config: {
		columns: {
		    "guestId": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "firstName": "text",
		    "lastName": "text",
		    "comment": "text",
		    "signDate": "datetime"
		},
		adapter: {
			type: "sql",
			collection_name: "guests",
			idAttribute: "guestId"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};