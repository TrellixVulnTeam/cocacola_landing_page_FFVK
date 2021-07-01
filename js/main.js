
/*/******************* Menu Toggle ******************* /*/

const menuToggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const navis = document.querySelectorAll('.navis')

const toggleMenu = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('mobile-menu')  
}

navis.forEach(navi => {
    navi.addEventListener('click', ()=> {
        menuToggle.classList.remove('active')
        navigation.classList.remove('mobile-menu')
    })
})


/*/******************* Vertical Slide ******************* /*/

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
let width = window.innerWidth;

slideLeft.style.top = `-${(slidesLength - 1) * 100  }vh`
// slideLeft.style.top = width < 599 ? `-${(slidesLength - 1) * 50 }vh` : `-${(slidesLength - 1) * 100 }vh`


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {

    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    console.log('slideHeight : ', sliderHeight)

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}