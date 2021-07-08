
/*/******************* Menu Toggle ******************* /*/

const menuToggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const navis = document.querySelectorAll('.navis')
const body = document.querySelector('body')

const toggleMenu = () => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('mobile-menu')  
    body.classList.toggle('hidden')
}

navis.forEach(navi => {
    navi.addEventListener('click', ()=> {
        menuToggle.classList.remove('active')
        navigation.classList.remove('mobile-menu')
        body.classList.remove('hidden')
    })
})


/*/******************* Vertical Slide ******************* /*/

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

const main = document.querySelector('.main')

let activeSlideIndex = 0
let width = window.innerWidth;


// slide picture position
// slideLeft.style.top = width < 599 ? `-${(slidesLength - 1) * 50 }vh` : `-${(slidesLength - 1) * 100 }vh`

const widths = [0, 600, 980];

const resizeFn = () => {
    if (window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
        slideLeft.style.top = `-${(slidesLength - 1) * 50 }vh` 
        slideLeft.style.transform = `translateY(0)` 
        slideRight.style.transform = `translateY(0)` 
        console.log('tablet')
    } else if (window.innerWidth>=widths[1] && window.innerWidth<widths[2]) {
        slideLeft.style.top = `-${(slidesLength - 1) * 100 }vh`
        slideLeft.style.transform = `translateY(0)` 
        slideRight.style.transform = `translateY(0)` 
        console.log('pc')
    } else {
        slideLeft.style.top = `-${(slidesLength - 1) * 100 }vh`
        slideLeft.style.transform = `translateY(0)` 
        slideRight.style.transform = `translateY(0)` 
        console.log('pc')
    }
}
window.onresize = resizeFn;
resizeFn();


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    
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
    
    const sliderHeight = sliderContainer.clientHeight
    let slidePosition = `${(activeSlideIndex * sliderHeight)}`
    let width = window.innerWidth;

    slideRight.style.transform = width < 600 ? `translateY(-${slidePosition/2}px)`: `translateY(-${slidePosition}px)`
    slideLeft.style.transform = width < 600 ? `translateY(${(slidePosition)/2}px)` : `translateY(${slidePosition}px)`

}