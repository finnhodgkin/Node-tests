var dirRead = require('./dirReadModule'),
    dir = process.argv[2],
    ext = process.argv[3];

dirRead(dir,ext,function(e, list){
  if(e)return console.log(e)
  for(i = 0; i < list.length; i++)console.log(list[i]);
});
