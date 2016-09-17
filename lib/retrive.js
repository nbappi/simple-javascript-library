var push = require("./push");

function retrive(){

}

retrive.prototype.get = function(){
   return push.get();
}

module.exports = new retrive();