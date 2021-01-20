/*var jsonObject={
    "firstname":"Muhammad",
    "lastname":"Usman",
    "age":"20",
    "profession":"webdevoloper"

} 
//document.write(jsonObject); 
for (showalldata in jsonObject){
    document.write( jsonObject[showalldata] + "<br>");

}*/
var sendData={name:"Usman",age:20};
var changedata=JSON.stringify(sendData);
var jsonObject=JSON.parse(changedata);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
     
      // document.getElementById("demo").innerHTML = xhttp.responseText;
    console.log(xhttp.responseText);
    var response=JSON.parse(xhttp.responseText);
    //console.log(response.employee); 
    var employees=response.employee;

    var showdata="";
    for(var i=0;i<employees.length;i++){
        showdata +=  employees[i].name + "<br>"; 
    }
    document.write(showdata);
    }
};
xhttp.open("GET", "index.json", true);
xhttp.send();

console.log(jsonObject.name);