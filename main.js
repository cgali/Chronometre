/* Done with CLASS and METHOD but without linked with the HTML and CSS document */



class Chrono {
    constructor() {
        this.counterSec = 0;
        this.counterMin = 0;
        this.interID = 0;
    }

    start() {
       this.interID = setInterval(() => {        //we are saying that setInterval is a var with the name "chrono
            console.log(this.counterMin, this.counterSec);
            this.counterSec ++;     //the initialization of the chrono
            if (this.counterSec === 60) {    //conditions to pass seconds to minutes and reset seconds if pass 60sec
                this.counterMin ++;
                this.counterSec = 0;
            }      
        }, 1000);   //every second this function is executed
    }

    stop() {
        clearInterval(this.interID);  //function to stop the chrono (setInterval)
    };

    reset() {
        clearInterval(this.interID);
        this.counterSec = 0;
        this.counterMin = 0;
        time.start();
    }

    showTime() {
        alert(`Min: ${this.counterMin} and sec: ${this.counterSec}`);
    }
}

let time = new Chrono();
time.start();

/* Done with FUNCTIONS and linked with the HTML and CSS document */



// let chrono;

// function stop() {
//     clearInterval(chrono);  //function to stop the chrono (setInterval)
// }

// function start() {

//     let counterSec = 0;     //var for counter the seconds and the minutes
//     let counterMin = 0;
//     let counterHour = 0;
//     let sec = document.getElementById("sec");   //var for call the id from DOM for interact with it
//     let min = document.getElementById("min");
//     let hour = document.getElementById("hour")

//     chrono = setInterval(() => {        //we are saying that setInterval is a var with the name "chrono
//             if (counterSec === 60) {    //conditions to pass seconds to minutes and reset seconds if pass 60sec
//                     counterMin ++;
//                     counterSec = 0;
//                 if (counterMin === 60) {    //conditions to reset minutes if pass 60min and pass minutes to hours
//                     counterHour ++;
//                     counterMin = 0;
//                     if (counterHour === 24) {    //conditions to reset hours if it pass 24hours
//                         counterHour = 0;
//                     }
//                 }
//             }
//             sec.innerHTML = counterSec;     //system to link the var counters with the counter of DOM that before we call it in a var
//             min.innerHTML = counterMin;
//             hour.innerHTML = counterHour;
//             counterSec ++;     //the initialization of the chrono
//     }, 1000);   //every second this function is executed
// }