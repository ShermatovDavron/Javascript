
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
export default modal
