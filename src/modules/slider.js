function slider() {
    // Slider
    const slides = document.querySelectorAll('.offer__slide'),
        next = document.querySelector('.offer__slider-next'),
        prev = document.querySelector('.offer__slider-prev'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        slideWrapper = document.querySelector('.offer__slider-wrapper'),
        slideField = document.querySelector('.offer__slide-inner'),
        width = +window.getComputedStyle(slideWrapper).width.slice(0, 4),
        slider = document.querySelector('.offer__slider')


    slideField.style.width = 100 * slides.length + '%'
    slides.forEach((item) => {
        item.style.width = width
    })
    current.textContent = '01'
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
    } else {
        total.textContent = `${slides.length}`
    }
    slideField.style.display = 'flex'
    slideWrapper.style.overflow = 'hidden'
    let offset = 0


    const indicators = document.createElement('ol')
    indicators.classList.add('carousel-indicators')
    slider.append(indicators)
    const dots = []
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', `${i}`)
        dot.classList.add('dot-carousel')
        indicators.append(dot)
        dots.push(dot)
        dots.forEach(dot=>dot.style.opacity = '0.5')
        dots[offset].style.opacity='1'
    }
    dots.forEach(dot=>{
        dot.addEventListener('click',(e)=>{
            offset= e.target.getAttribute('data-slide-to')
            slideField.style.transform = `translateX(-${width * offset}px)`
            slideField.style.transition = '1s'
            dots.forEach(dot=>dot.style.opacity = '0.5')
            dots[offset].style.opacity='1'

            if (offset < 10) {
                current.textContent = `0${+offset + 1}`
            } else {
                current.textContent = +offset + 1
            }
        })
    })
    next.addEventListener('click', () => {
        if (offset < slides.length - 1) {
            offset++
        } else {
            offset = 0
        }
        if (offset < 10) {
            current.textContent = `0${offset + 1}`
        } else {
            current.textContent = offset + 1
        }
        slideField.style.transform = `translateX(-${width * offset}px)`
        slideField.style.transition = '1s'
        dots.forEach(dot=>dot.style.opacity = '0.5')
        dots[offset].style.opacity='1'
        let i=0
    })

    prev.addEventListener('click', () => {
        if (offset > 0) {
            offset--
        } else {
            offset = slides.length - 1
        }
        if (offset < 10) {
            current.textContent = `0${offset + 1}`
        } else {
            current.textContent = offset + 1
        }
        slideField.style.transform = `translateX(-${width * offset}px)`
        slideField.style.transition = '1s'

        dots.forEach(dot=>dot.style.opacity = '0.5')
        dots[offset].style.opacity='1'
    })
}
export default slider