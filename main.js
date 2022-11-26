const Container = document.querySelector('.main-container');
const about = document.querySelector('.about-us');
window.addEventListener('mouseover', function(e){
    const hover = e.target
    if(hover === e.target){
        Container.classList.add('show');
    }
    else{
        Container.classList.add('show');
    }
})
window.addEventListener('scroll', function(e){
    about.classList.toggle('active');
})

/*********************For Toggling***********************/
const list = document.querySelector('.link');
const bar = document.querySelector('.menu').addEventListener('click', function(e){
   list.classList.toggle('shown');
})
/*const bar = document.querySelector('menu').classList.toggle('shown');
console.log(bar);*/