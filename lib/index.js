var validator = require("./validator");
var push = require("./push");
var retrive = require("./retrive");

module.exports = {
	set : function(name, callback){
	   validator.textValidate(name, function(err){
          if( err.status ){
              console.log(err.msg);
          } else {
              push.set(name);
          }
	   });
	},
	get : function(){
      return retrive.get();
	}
};