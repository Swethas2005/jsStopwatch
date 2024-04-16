
let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let Hours = document.querySelector("#hours");
let Minutes = document.querySelector("#minutes");
let Seconds = document.querySelector("#seconds");
let Miliseconds = document.querySelector("#miliseconds");

let Startbtn = document.querySelector("#start");
let Pausebtn = document.querySelector("#pause");
let Resetbtn = document.querySelector("#reset");

let Interval;

let startTimer = () => {
    ms++;
    if (ms <= 9) {
        Miliseconds.textContent = "0" + ms;
    }

    if (ms > 9) {
        Miliseconds.textContent = ms;
    }

    if (ms > 99) {
        s++;
        Seconds.textContent = s <= 9 ? "0" + s : s;
        ms = 0;
        Miliseconds.textContent = "00";
    }

    if (s > 59) {
        m++;
        Minutes.textContent = m <= 9 ? "0" + m : m;
        s = 0;
        Seconds.textContent = "00";
    }

    if (m > 59) {
        h++;
        Hours.textContent = h <= 9 ? "0" + h : h;
        m = 0;
        Minutes.textContent = "00";
    }
   };

    Startbtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    };

    Pausebtn.onclick = () => {
    clearInterval(Interval);
    };

    Resetbtn.onclick = () => {
    clearInterval(Interval);
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    Miliseconds.textContent = "00";
    Seconds.textContent = "00";
    Minutes.textContent = "00";
    Hours.textContent = "00";
    };
