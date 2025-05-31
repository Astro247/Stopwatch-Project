let time_start = 0, time_passed = 0
let interval = null, running = false

function startTimer() {
    if(!running) {
        time_start = Date.now() - time_passed
        interval = setInterval(updateTimer, 1)
        running = true
    }
}


function stopTimer() {
    if(running) {
        clearInterval(interval)
        time_passed = Date.now() - time_start
        running = false
    }
}


function resetTimer() {
    clearInterval(interval)
    time_passed = 0
    time_start = 0
    running = false
    document.getElementById("timer").textContent = "00:00:00:00"
}


function updateTimer() {
    const currentTime = Date.now()
    time_passed = currentTime - time_start

    let hr = Math.floor(time_passed / (1000 * 60 * 60))
    let min = Math.floor(time_passed / (1000 * 60) % 60)
    let s = Math.floor(time_passed / 1000 % 60)
    let ms = Math.floor(time_passed % 1000 / 10)

    hr = String(hr).padStart(2, "0")
    min = String(min).padStart(2, "0")
    s = String(s).padStart(2, "0")
    ms = String(ms).padStart(2, "0")

    document.getElementById("timer").textContent = `${hr}:${min}:${s}:${ms}`
}


function main() {
    document.getElementById("start").onclick = startTimer
    document.getElementById("stop").onclick = stopTimer
    document.getElementById("reset").onclick = resetTimer
}

main()