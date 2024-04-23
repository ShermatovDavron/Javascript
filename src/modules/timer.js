function timer() {
    //     Timer

    const deadline = '2024-03-08'

    function getTime(endTime) {
        let days, hours, seconds, minutes
        const timer = Date.parse(endTime) - Date.parse(new Date())
        if (timer > 0) {
            days = Math.floor(timer / (1000 * 60 * 60 * 24))
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
            minutes = Math.floor((timer / (1000 * 60)) % 60)
            seconds = Math.floor((timer / (1000)) % 60)
        } else {
            days = 0
            hours = 0
            seconds = 0
            minutes = 0
        }

        return {timer, days, hours, minutes, seconds}
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector), days = document.querySelector('#days'),
            hours = document.querySelector('#hours'), minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'), timeInterval = setInterval(updateClock, 1000)
        updateClock()

        function updateClock() {
            const t = getTime(endtime)

            function getZero(num) {
                if (num >= 0 && num < 10) {
                    return `0${num}`
                } else {
                    return num
                }
            }

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)
        }

        if (timer <= 0) {
            clearInterval(timeInterval)
        }
    }

    setClock('.timer', deadline)
}

export default timer