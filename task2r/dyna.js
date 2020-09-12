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

getJSON("dyna.json").then(d=>{
   student_details(d.students);
})

document.getElementById("a").innerHTML=`
<div class = "container">
<div class='container-fluid'>
<div class = "jumbotron">
<h1 style="text-align:center; color:blue;"> Students Resume</h1>
</div>
<div>
</div>`

var main = document.querySelector(".container");
function student_details(n){
for (var i in n)
{
    var x = document.createElement("div");
    x.className = "col-sm-6";
    x.id = "parent-div"+i;
    x.innerHTML = `<div class = "container">
        <div class ="row">
            <div class="col-sm-6">
                <div class = "thumbnail"> <img src = "`+n[i].photo+`" width="20%" height="20%" class = "card-img">
                <div class="card-body">
                    <h1 class= "card-title">`+n[i].name+`</h1>
                    <h4 class = "card-text">`+n[i].mail+`</h4>
                    <a href="`+n[i].link+`" class="btn btn-primary" role="button">View Resume</a>
                </div>
                </div>
                </div>

        </div>
        </div>`
    
        container.append(x);
}
}   