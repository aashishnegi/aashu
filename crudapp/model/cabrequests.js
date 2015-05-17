var mongoose = require('mongoose');

var cabSchema = new mongoose.Schema({
	name: String,
	phone: String,
	pickup: String,
	drop: String
});

mongoose.model('CabRequest',cabSchema,'CabRequests');

/*
var mySchema = mongoose.Schema({
	name: String,
	designation: String	,
	contactdetails: {
		personal: Number,
		office: Number,
		other: Number
	}
});

var blobSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});

mongoose.model('Blob', blobSchema);
*/