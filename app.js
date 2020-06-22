//code for digital clock
function tellTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    
    setTimeout(tellTime, 1000);
}
tellTime();


//code for date
function todaysDate() {
    let today = new Date();
    let cDay = today.getDate();
    let cMonth = today.getMonth();
    let cYear = today.getFullYear();
    let calender = cDay + '/' + cMonth + '/' + cYear;
    document.getElementById("show").innerHTML = calender;
}
todaysDate();


//code for timer
let mySeconds;
let intervalHandle;

function resetPage(){
	document.getElementById("inputArea").style.display="none";	
}

function tick() {
    let timeDisplay = document.getElementById("time");
    let min = Math.floor(mySeconds/60);
    let sec = mySeconds-(min*60);

    if (sec < 10) {
        sec = "0" + sec;
    }

    let message = min.toString() + ":" + sec;
    timeDisplay.innerHTML=message;

    if (mySeconds === 0) {
        alert("Buzz Buzz");
        clearInterval(intervalHandle);
    }

    mySeconds--;
}

function startCounter() {
    let myInput = document.getElementById("minutes").value;
    if (isNaN(myInput)){
		alert("Type a valid number please");
        return;
    }
    mySeconds=myInput*60;
	
	intervalHandle=setInterval(tick, 1000);
	
    document.getElementById("inputArea").style.display="none";
    
}

window.onload=function(){	
	function myFunction(){
		startCounter();	
		
	}
	

}

