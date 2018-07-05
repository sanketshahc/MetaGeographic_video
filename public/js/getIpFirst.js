// This file collects the ip address written by the server, 
// in order to socket in automatically to the right address

var ipaddy;
var script = document.createElement("script");
    script.setAttribute("src","js/main.js");

var gotIP = fetch('file.txt')
    .then(response => response.text())
    .then((value)=>{
        console.log(`got ipaddy --- https://${value}:443`)
        ipaddy = `https://${value}:443`
    })
    .then(()=>{
        if (ipaddy){document.querySelector("body").appendChild(script)}
    })
    .catch(console.log);


