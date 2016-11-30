if(process.argv[2])console.log(process.argv.splice(2).reduce((a,b)=>parseInt(a) + parseInt(b)));
