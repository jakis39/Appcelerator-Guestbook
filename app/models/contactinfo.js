exports.definition = {
	config: {
		columns: {
		    "guestId": "INTEGER",
		    "contactType": "text",
		    "contactValue": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "contactinfo"
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