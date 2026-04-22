let time = 600;
let timer = setInterval(function () {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("timer").innerText = "Time: " + min + ":" + sec;
    time--;

    if (time < 0) {
        clearInterval(timer);
        alert("Time's up!");
        document.getElementById("quizForm").submit();
    }
}, 1000);

const form = document.getElementById("quizForm");
const progressBar = document.getElementById("progressBar");

form.addEventListener("change", function () {
    let answered = 0;
    let total = 10;

    for (let i = 1; i <= total; i++) {
        let options = document.getElementsByName("q" + i);
        for (let opt of options) {
            if (opt.checked) {
                answered++;
                break;
            }
        }
    }

    progressBar.style.width = (answered / total) * 100 + "%";
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let score = 0;
    let total = 10;

    for (let i = 1; i <= total; i++) {
        let options = document.getElementsByName("q" + i);
        for (let opt of options) {
            if (opt.checked && opt.value == "1") {
                score++;
            }
        }
    }

    let wrong = total - score;

    document.getElementById("result").innerHTML =
        "✅ Correct: " + score + "<br>❌ Wrong: " + wrong;
});
