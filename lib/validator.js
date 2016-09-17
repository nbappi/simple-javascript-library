module.exports = {
	textValidate : function(data, cb){

                var status , msg ;
                if(typeof data == "string" && data != "undefined"){
                	status = true;
                	msg = "This is valid data.";
                }else{
                	status = false;
                	msg = "This is not string.";
                }
                
                cb({ status : status, msg : msg})
        }
};