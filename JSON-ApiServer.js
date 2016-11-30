var http = require('http'),
    bl = require('bl'),
    map = require('through2-map'),
    url = require('url'),
    port = process.argv[2];

var server = http.createServer(function (req, res) {
  if(!req)
    return console.error("ERROR")

  let rUrl = url.parse(req.url,true);
  let uTime = JSON.stringify({
    unixtime:new Date(rUrl.query.iso).getTime()
  });
  let time = JSON.stringify({
    hour:parseInt(rUrl.query.iso.slice(11,13)),
    minute:parseInt(rUrl.query.iso.slice(14,16)),
    second:parseInt(rUrl.query.iso.slice(17,19))
  })

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(rUrl.pathname === "/api/parsetime"){
    res.end(time)
  }else
  if(rUrl.pathname === "/api/unixtime"){
    res.end(uTime)
  }
});

server.listen(process.argv[2]);
