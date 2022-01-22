document.querySelector("#form");

document.querySelector("button").addEventListener("click",store);

var signupdata=[];

function store(event){
event.preventDefault();
var cerddetails={
    mail: form.email.value,
    fname: form.fname.value,
    lname: form.lname.value,
    pass: form.pass.value
}

signupdata.push(cerddetails);

localStorage.setItem("usercred",JSON.stringify(signupdata));
}


document.querySelector("button").addEventListener("click",gotomain);

function gotomain(){
window.location.href="signin.html"
}