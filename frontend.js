var httpGet = function(theUrl){
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        console.log(xmlHttp.responseText);
        document.getElementById("user").innerHTML=xmlHttp.responseText;
    }
    xmlHttp.open("GET", theUrl, false); // true for asynchronous
    xmlHttp.send();
};

var getUser = function(){
    var username = document.getElementById("username").value;
    var theURL = "/users/"+username.toString();
    httpGet(theURL);
};
