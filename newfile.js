var fs = require("fs");
fs.readFile("ex.txt","utf-8",function(error,text)
{
if(error)
throw error;
console.log("The contained:",text);
});
var sma='github';
var upp=toUpperCase(sma);
fs.writeFile("ex1.txt",upp,function(error)
{
if(err)
throw err;
else
console.log("file written");
});
