var fs = require("fs");
fs.readFile("ex1","utf-8",function(error,text)
{
if(error)
throw error;
console.log("The contained:",text);
});
var sma ='github';
var upp = sma.toUpperCase(sma);
fs.writeFile("ex.txt",upp,function(err)
{
if(err)
throw err;
else
console.log("file written");
});
