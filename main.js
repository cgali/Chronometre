let chrono;

function stop() {
    clearInterval(chrono);  //function to stop the chrono (setInterval)
}

function start() {

    let counterSec = 0;     //var for counter the seconds and the minutes
    let counterMin = 0;
    let counterHour = 0;
    let sec = document.getElementById("sec");   //var for call the id from DOM for interact with it
    let min = document.getElementById("min");
    let hour = document.getElementById("hour")

    chrono = setInterval(() => {        //we are saying that setInterval is a var with the name "chrono
            if (counterSec === 60) {    //conditions to pass seconds to minutes and reset seconds if pass 60sec
                    counterMin ++;
                    counterSec = 0;
                if (counterMin === 60) {    //conditions to reset minutes if pass 60min and pass minutes to hours
                    counterHour ++;
                    counterMin = 0;
                    if (counterHour === 24) {    //conditions to reset hours if it pass 24hours
                        counterHour = 0;
                    }
                }
        }
        sec.innerHTML = counterSec;     //system to link the var counters with the counter of DOM that before we call it in a var
        min.innerHTML = counterMin;
        counterSec ++;     //the initialization of the chrono
    }, 1000);   //every second this function is executed
}
