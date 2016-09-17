var message = require("./message");
module.exports = {
	textValidate : function(data, cb)
        {
                var status =  false , msg ;
                if(typeof data == "string" && data != "undefined"){
                	msg = "This is valid data.";
                }else{
                	status = true;
                	msg = message.stringErrmsg;
                }
                
                cb({ status : status, msg : msg});
        }
};