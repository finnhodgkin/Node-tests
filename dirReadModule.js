var fs = require('fs');
module.exports = function (dir, ext, callback){
  fs.readdir(dir, function(e, list){
    if(e)return callback(e)
    callback(null, list.filter(a=>{return a.endsWith("." + ext)}));
  })
};
