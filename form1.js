let uname=document.getElementById("uname");
let passw=document.getElementById("passw");
let error=document.getElementById("error");
function validate(){
if(uname.value.trim() == "" || passw.value.trim() ==""){
    alert("Fields cannot be empty");
    return false;
}
else
{
    return true;
   // alert("validation is proper");
}
}