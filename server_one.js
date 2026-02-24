/* Node JS topics wih explanations wrt comments */
/* Topic one : HTTP Module */
/* Execute single program at a time wrt topic one in "server.js" */
/* Importing http module */
/* In this, we can use double quotes or single quotes  */
/* In order to display the result in the browser we use "http" request */
var http=require("http");

/* You have to create the server */
/* You are going the run the server in the port 8080 */
http.createServer((request,response) =>
{
    response.write(request.url);
    response.end();
    console.log("Server running ........");
}).listen(8080)

/* _______________________________________________________________________________________________ */
/* Importing http module */
var http=require("http");

/* You have to create the server */
/* You are going the run the server in the port 8080 */
http.createServer((request,response) =>
{
    response.write("Hello World!!!");
    response.end();
    console.log("Server running ........");
}).listen(8080)

/* ___________________________________________________________________________________________ */
/* Topic two: File System Module */
/* In order to read a file, update a file, delete a file */
/* After reading a file if we want to display the file in the browser we use "File system" module. */
/* In this, we are creating a file(test.txt) and we are importing information to the server.  */
/* We are importing http module. */
/* We pass the module wrt require argument */
var http=require("http");

/* We are importing File system module */
var fs=require("fs");

/* Creates HTTP server  */
http.createServer((request,response) => {

   /* File system reads the text file that is "test.txt */ 
   fs.readFile("test.txt",(error,data)=> {
    
    /* Sends the contents of test.txt from your system */
    response.write(data);
    
    /* It ends the response */
    response.end();
    
    console.log("Server running ......");
})
}).listen(8080)

/* _________________________________________________________________________________________________ */
/* In this, we are trying add information to the existing file using append()*/
/* In this, while running the below program we will get error(Ignore it) */
/* Imports http module */
var http=require("http");

/* Imports File system module */
var fs=require("fs");

/* creates an HTTP server */
http.createServer((request,response) =>
{
    /* In this , we are adding information to the existing text file */
    fs.appendFile("test.txt","Iam the best",(error,data) =>
    {
        /* We are sending the content of test.txt from your system  */
        response.write(data);

        /* We are ending the response */
        response.end();

        /* we are tring to check wheather server is running or not */
        console.log("Server is runnng......... ");
    })

}).listen(8080) 

/* ___________________________________________________________________________________ */
/* In this, Iam replacing the existing content with new content present in 
 text file using fwriteFile() */
 /* In this, after running the "server.js" through the terminal 
you can find the result in the test.txt file */
/* Ignore the error/warnings after running the file */
/* This is used to import http module */
var http=require("http");

/* This is used to import Filesystem module */
var fs=require("fs");

/* This creates an HTTP server */
http.createServer((request,response) =>
{
fs.writeFile("test.txt","You will have a great career ahead",(error,data)=>
{
    response.write(data);
    response.end();
    console.log("Server fwriteFile() is running........");
})
}).listen(8080)

/*________________________________________________________________________________ */
/* Model two (fwriteFile()) */
/* In this, we are trying to use fwriteFile() to the file which is not present  */
/* If the file is not present then fwriteFile()
 creates the file which is present in fwriteFile() */
/* It, throws an error/warning ignore it  */
/* fwriteFile() is used to replace existing content with new content */

/* In this, we are importing HTTP module  */
var http=require("http");

/* This is used to import Filesystem module */
var fs=require("fs");

/* This creates an HTTP server */
http.createServer((request,response) =>
{
/* In this we are replacing old content with new content present in the file (test.txt) */
fs.writeFile("test_one.txt","You will have a great career ahead",(error,data)=>
{
    /* We are sending test.txt from your system */
    response.write(data);
    /* We are ending the response */
    response.end();
    console.log("File test_one.txt is created");
})
}).listen(8080)

/* ________________________________________________________________________ */
/* In this, we are using unlink() to delete the file, where unlink() has only one parameter  */
/* In this we are importing HTTP module */
var http=require("http");
/* In this we are importing File system module */
var fs=require("fs");
/* In this we are creating the server with two parameters(request,response) */
http.createServer((request,response)=>{
    /* This is used to delete the file using unlink() */
    /* unlink() has only one parameter that is error */
    fs.unlink("test_one.txt",(error)=>{
        if(error) throw error;
        console.log("File deleted");
    })
}).listen(8080)

/* _____________________________________________________________________________________ */
/* Topic three: URL module */
/* In this, we are importing URL package */
var url=require("url");

/* In this we are setting the address */
/* http: is a protocol */
/* localhost:8080 is the host_name */
/* path name is : /vamsi_vamsi */
/* query parameters are the one that starts after "?" */
/* Here address holds "http://localhost:8080/vamsi_vamsi?year=2026&month=February" : 
which is a String this you should remember */
var address="http://localhost:8080/vamsi_vamsi?year=2026&month=February";

/* url.parse(): is used to break the URL into small understandable parts */
/* Query parameters are the one that come after "?" in the address */
/* url.parse(true): is used to convert query parameters to an object */
/* Without true the query remains as a plain text. */
/* With true it becomes a perfec Javascript objects */
var q=url.parse(address,true);

/* we are printing hostname, pathname, query parenthesis */
console.log("The host name is: ",q.host);
console.log("THe path name is: ",q.pathname);
console.log("The query parenthesis is: ",q.search);

/*_____________________________________________________________________________________ */
/* Topic four: Node JS NPM */
/* This program should run after installing upper-case package  */
/* using the command "npm i upper-case" in the command prompt*/
/* We are importing the http module */
var http=require("http");

/* we are importing the upper case module */
var uc=require("upper-case");

/* We rae creating the server with two parameters request and response */
http.createServer((request,response)=>
{
    /* We are sending content from our system */
   response.write("Hello World!!");
   
   /* We are ending the response */
   response.end();
   
   console.log("Program is running .....");
}).listen(8080)

/*Model two */
/* This program should run after installing upper-case package  */
/* using the command npm i upper-case */
/* We are importing the http module */
/* In order to display the result in the browser we use this. */
var http=require("http");

/* we are importing the upper case module */
var uc=require("upper-case");

/* We rae creating the server with two parameters request and response */
http.createServer((request,response)=>
{
    /* We are sending content(Hello World!) from our system to convert the content to upper case */
   response.write(uc.upperCase("Hello World!!"));
   
   /* We are ending the response */
   response.end();

   console.log("Program is running .....");
}).listen(8080)


