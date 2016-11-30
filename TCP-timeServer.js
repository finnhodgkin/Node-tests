var net = require('net');
date = new Date();
var server = net.createServer(function (socket) {
  let d = [date.getMonth(),date.getDate(),date.getHours(),date.getMinutes()]
  for(let i = 0; i < d.length; i++)
    d[i] = d[i] < 10 ? "0" + d[i] : d[i];
  socket.write([date.getFullYear(),"-",
                d[0]+1,"-",d[1]," ",d[2],":",d[3],"\n"
               ]
              .join(""))
  socket.end();
});
server.listen(process.argv[2]);
