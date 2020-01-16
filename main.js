class Chrono {
    constructor() {
        this.counterSec = 0;
        this.counterMin = 0;
        this.counterHours = 0;
        this.interID = 0;
        
    }

    start() {
        let sec = document.getElementById("sec");   
        let min = document.getElementById("min");
        let hour = document.getElementById("hour");

        this.interID = setInterval(() => {        
            console.log(this.counterMin, this.counterSec);
            this.counterSec ++;     
            if (this.counterSec === 60) {    
                this.counterMin ++;
                this.counterSec = 0;
                if(this.counterMin === 60) {
                    this.counterHours ++;
                    this.counterMin = 0;
                    if(this.counterHours === 24) {
                        this.counterHours = 0;
                    }
                }
            }
            sec.innerHTML = this.counterSec;     
            min.innerHTML = this.counterMin;
            hour.innerHTML = this.counterHours;
        }, 1000);   
    }

    stop() {
        clearInterval(this.interID);  
    };

    reset() {
        clearInterval(this.interID);
        this.counterSec = 0;
        this.counterMin = 0;
        this.counterHours = 0;
        sec.innerHTML = this.counterSec;     
        min.innerHTML = this.counterMin;
        hour.innerHTML = this.counterHours;
    }

    showTime() {
        alert(`Hour: ${this.counterHours} Min: ${this.counterMin} and Sec: ${this.counterSec}`);
    }
}

let time = new Chrono();