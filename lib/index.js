var validator = require("./validator");

module.exports = {
	set : function(name, callback){
	   validator.textValidate(name, function(err){
          console.log(err);
	   });
	},
	get : function(){
      return this.text;
	}
};