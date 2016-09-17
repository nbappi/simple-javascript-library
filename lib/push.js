var data;
function push(){
 
}

push.prototype.set = function(name){
    data = name;
};

push.prototype.get = function(){
	return typeof data == "undefined" ? "" : data;
};

module.exports = new push();