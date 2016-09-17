module.exports = {
	textValidate : function(data, cb)
        {
                var status =  false , msg ;
                if(typeof data == "string" && data != "undefined"){
                	msg = "This is valid data.";
                }else{
                	status = true;
                	msg = "This is not string.";
                }
                
                cb({ status : status, msg : msg})
        }
};