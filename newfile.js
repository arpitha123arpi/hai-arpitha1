var fs = require("fs");
fs.readFile("ex.txt","utf-8",function(error,text)
{
if(error)
throw error;
console.log("The contained:",text);
});
