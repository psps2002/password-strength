document.addEventListener("DOMContentLoaded" , function(){
document.getElementById('password').addEventListener("input" , function(){
let a = document.getElementById("password").value;
let x = a.length;
if (x>8){
    document.getElementById('rating').innerHTML = "<p class='strong'>Password is strong </p>";}
else{
    document.getElementById('rating').innerHTML = "<p class='weak'>Password is weak </p>";
}

})
})