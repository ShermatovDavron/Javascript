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
export default form