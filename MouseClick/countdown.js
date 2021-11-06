

var timeleft = 15;

var downloadTimer = setInterval(
    
 function(){
        timeleft--;
document.getElementById("countdowntimer").textContent = timeleft;

if(timeleft <= 0){
  
    window.location.href = "style.html"
    clearInterval(downloadTimer);
}

},1000

);



