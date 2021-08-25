const btnHamburger = document.querySelector('#btnHamburger');
const btnOverlay = document.querySelector('#btnOverlay');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const slideElems = document.querySelectorAll('.has-slide');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ // close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        
        slideElems.forEach(function(elements){
            elements.classList.remove('slide-in');
            elements.classList.add('slide-out');
            elements.classList.remove('hide-for-desktop');
        });
       
    }
    else {// open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        
        slideElems.forEach(function(elements){
            elements.classList.remove('slide-out');
            elements.classList.add('slide-in');
            elements.classList.add('hide-for-desktop');
        });
        
    }

});

btnOverlay.addEventListener('click', function(){
    console.log('click overlay');

    if(header.classList.contains('open')){ // close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        
        slideElems.forEach(function(elements){
            elements.classList.remove('slide-in');
            elements.classList.add('slide-out');
            elements.classList.remove('hide-for-desktop');
        });
       
    }
    else {// open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        
        slideElems.forEach(function(elements){
            elements.classList.remove('slide-out');
            elements.classList.add('slide-in');
            elements.classList.add('hide-for-desktop');
        });
        
    }

});

addEventListener('resize', function(){

    if(window.innerWidth > 639){
        
        body.classList.remove('noscroll');
        header.classList.remove('open');

        slideElems.forEach(function(elements){
            elements.classList.remove('slide-in');
            elements.classList.remove('slide-out');
        }); 

    }
  
});


