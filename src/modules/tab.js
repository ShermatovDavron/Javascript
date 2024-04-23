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
export default tab