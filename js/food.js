const tabItems = document.querySelectorAll('.tabheader_item')
const tabContent = document.querySelectorAll('.tabcontent')
const tabParent = document.querySelector('.tabheader_items')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    // tabItems[i].classList.add('tabheader__item_active')
}
//
hideTabContent()
showContent(0)

// tabParent.addEventListener("click", (event) => {
//     const target = event.target
//     if(!target.classList.contains('tabheader__item_active')){
//         tabItems.forEach(item, idx => {
//             if(target == item){
//                hideTabContent()
//                showContent(idx)
//             }
//         })
//     }
// })

const modal = document.querySelector(".modal")
const openModal = document.querySelector('#open')
const closeModal = document.querySelector('.modal__close')

openModal.addEventListener('click', () => {
    modal.style.display = 'block'
})
closeModal.addEventListener("click", () => {
    modal.style.display = 'none'
})