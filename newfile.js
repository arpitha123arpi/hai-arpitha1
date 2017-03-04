var fs = require("fs");
fs.readFile("ex.txt","utf-8",function(error,text)
{
if(error)
throw error;
console.log("The contained:",text);
});
fs.writeFile("ex1.txt",text,function(error)
{
if(err)
throw err;
else
console.log("file written");
});
