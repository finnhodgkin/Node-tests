var http = require('http');
var bl = require('bl');
var res = [];
var count = 0;

function printAll() {
  for (let i = 0; i < 3; i++)
    console.log(res[i])
}

function httpGet (i){
  http.get(process.argv[2+i],function(resp){
    resp.pipe(bl(function (err, data){
        if(err)
          console.error(err);

        res[i] = data.toString();
        count++;

        if(count === 3)
          printAll()
    }))
  })
}

for(let i = 0; i < 3; i++)
  httpGet(i)
