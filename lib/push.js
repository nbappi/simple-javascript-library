var data;
function push(){
 
}

push.prototype.set = function(name){
    data = name;
};

push.prototype.get = function(){
	return data;
};

module.exports = new push();