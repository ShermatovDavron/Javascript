/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function form() {

//     FORM
    const form = document.querySelector('.form')
    const msg = {
        success: 'Malumotlar yuborildi',
        failure: 'Malumotlar yuborilmadi',
        loading: '<img src="./img/Bean.svg" alt="Loading..">'
    }
    const req = async function postData(url, data) {
        const res = await fetch(url, {
            method: 'POST', headers: {
                "Content-Type": "application/json"
            }, body: data
        })
        const modal = document.querySelector('.modal')
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }

    function showStatus(msg) {
        const modalContent = document.querySelector('.modal__dialog')
        modalHide(modalContent)
        const div = document.createElement('div')
        div.classList.add('modal__content')
        div.innerHTML = `<h1>${msg}</h1>`
        div.style.cssText = 'width:500px'
        modal.append(div)
        setTimeout(() => {
            modalShow(modalContent)
            modalHide(modal)
            div.remove()
        }, 3000)

    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.reset()
        const formData = new FormData(form)
        const json = JSON.stringify(Object.fromEntries(formData.entries()))
        req('http://localhost:3000/request1', json).then((data) => {
            console.log(data)
            showStatus(msg.success)
        }).catch(() => {
            showStatus(msg.failure)
        })
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader(){
   const loader = document.querySelector('.loader')

    // Loader
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        })
    }, 2000)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function modal() {
    // Modal
    const modal = document.querySelector('.modal'),

        contacts = document.querySelectorAll('.contact')
    contacts.forEach((item) => {
        item.addEventListener('click', () => {
            modalShow(modal)
        })
    })
    modal.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('modal')) {
            modalHide(modal)
        }
        if (event.target && event.target.classList.contains('modal__close')) {
            modalHide(modal)
        }
    })

    // const timerId = setTimeout(() => modalShow(modal), 5000)

    function modalShow(modal) {
        modal.classList.remove('hide')
        modal.classList.add('show')
        document.body.style.overflow = 'hidden'
        // clearInterval(timerId)
    }

    function modalHide(modal) {
        modal.classList.remove('show')
        modal.classList.add('hide')
        document.body.style.overflow = 'auto'
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            modalHide(modal)
        }
    })

    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 10) {
            modalShow(modal)
            window.removeEventListener('scroll', showModalScroll)
        }
    }
    window.addEventListener('scroll', showModalScroll)
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/modules/offer.js":
/*!******************************!*\
  !*** ./src/modules/offer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function offer() {
    //Offer

    class About {
        menu = document.querySelector('.menu-content')
        div = document.createElement('DIV')

        constructor(img, title, content, price, ...classes) {
            this.img = img
            this.title = title
            this.content = content
            this.price = price
            this.classes = classes
        }

        render() {
            if (this.classes) {
                this.classes = 'menu__item'
            } else {
                this.classes = classes
            }
            this.div.classList.add(`${this.classes}`)
            this.menu.append(this.div)
            this.div.innerHTML += `<img src="${this.img}"  alt="vegy" />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
             ${this.content}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>$ ${this.price}</span> month</div>
            </div>`
        }
    }

    axios.get('http://localhost:3000/menu').then((data) => {
        data.data.forEach((item) => {
            new About(item.img, item.title, item.content, item.price).render()
        })

    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (offer);

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tab(){
    const tabParent = document.querySelector('.tabheader__items'),
        tabsItem = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent')


    // Tab
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show')
        })
        tabsItem.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(idx = 0) {
        tabsContent[idx].classList.add('show')
        tabsContent[idx].classList.remove('hide')
        tabsItem[idx].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()
    tabParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabsItem.forEach((item, idx) => {
                if (target === item) {
                    hideTabContent()
                    showTabContent(idx)
                }
            })
        }
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tab);

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
    //     Timer

    const deadline = '2024-09-11'

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_offer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/offer */ "./src/modules/offer.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/form */ "./src/modules/form.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/loader */ "./src/modules/loader.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js");
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/tab */ "./src/modules/tab.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/timer */ "./src/modules/timer.js");








window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_offer__WEBPACK_IMPORTED_MODULE_0__["default"])()
    ;(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_modules_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_modules_tab__WEBPACK_IMPORTED_MODULE_5__["default"])()
    ;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])()
})





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map