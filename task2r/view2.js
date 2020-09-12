function getJSON(file) {
    return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
        if (response.ok) {
            resolve(response.json());
        }else{
            reject(new Error('error'));
        }
    })
    })
}

getJSON("view2.json").then(d=>{
    // console.log(d);  

pic_get(d.pic);
education_details(d.edu);
skills_details(d.skill);
act(d.act);
})

document.getElementById("a").innerHTML=`
<div class = "container">
<div class='container-fluid'>
<div class = "jumbotron">
<h1 style="text-align:center; color:blue;"> Resume</h1>
</div>
<div>
</div>`
var h=document.createElement("h2");
h.textContent="Niharika Profile"
container.appendChild(h);
function pic_get(n){
var d = document.createElement("div")
d.class="thumbnail";
var p = document.createElement("img")
p.src=n;
p.width=250;
p.height=250;
container.appendChild(p)
}
var main = document.querySelector(".container");

function education_details(x){
    var h = document.createElement("h2");
    h.textContent="Education"
    container.appendChild(h);
    container.appendChild(document.createElement("hr"))
    var table = document.createElement("table");
    var row="";
    for(var j in x){
    row +="<tr><td>"+x[j].grade+"</td><td>"+x[j].spcial+"</td><td>"+x[j].insti.join(" ")+"</td><td>"+x[j].gpa+"</td><td>"+x[j].pyear+"</td></tr>";	
    }
    table.innerHTML=row;
    container.appendChild(table);
}
function skills_details(x){
    var h = document.createElement("h2");
    h.textContent="Skills"
    container.appendChild(h);
    container.appendChild(document.createElement("hr"))
    var table = document.createElement("table");
    var row="";
    for(var j in x){
    row +="<tr><td>"+x[j].name+"</td><td>"+x[j].courses+"</td><td>"+x[j].course+"</td></tr>";
    }
    table.innerHTML=row;
    container.appendChild(table);
}
function act(n){
    var h= document.createElement("h2");
    h.textContent="Activities";
    container.appendChild(h);
    container.appendChild(document.createElement("hr"));
   
    for (var i in n){
        var a =document.createElement("ul");
        var l=document.createElement("li");
        l.textContent=n[i].join(" ");
        container.appendChild(l);
    }
    
    // l.textContent=n.l1.join(" ");
    // container.appendChild(l);
}