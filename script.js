const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n =>n.addEventListener('click', linkAction));

//social media icon hover

//skills

const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills);
});

//qualification

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active');
    })
})

//services

const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalview)=>{
            modalview.classList.remove('active_modal');
        })
    })
})


//Swiper
let swiper = new Swiper(".mySwiper", {
cssMode: true,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
},
mousewheel: true,
keyboard: true,
});



//Active page/button
const navLinks  = document.querySelectorAll('.nav_link');

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        for(var i=0;i<navLinks.length;i++){
            navLinks[i].classList.remove('active_link');
        }
        link.classList.add('active_link');
    })
});

//active page scroll
const sections = document.querySelectorAll('section[id]'); 

function activeTab(){
    const scrollY = window.pageYOffset;

    sections.forEach(active =>{
        const sectionHeight = active.offsetHeight;
        const sectionTop = active.offsetTop - 50;
        sectionID = active.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionID +']').classList.add('active_tab');
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionID +']').classList.remove('active_tab');
        }
    });
}
window.addEventListener('scroll', activeTab);

//menu background
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80){
        nav.classList.add('scroll_header');
    }
    else{
        nav.classList.remove('scroll_header');
    }
}
window.addEventListener('scroll', scrollHeader);

//up button
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560){
        scrollUp.classList.add('show_scroll');
    }
    else{
        scrollUp.classList.remove('show_scroll');
    }
}
window.addEventListener('scroll', scrollUp);

//text animation
var typed = new Typed('.text_animation',{
    strings: ['Frontend Developer','UI/UX Designer', 'Logo Designer'],
    typeSpeed: 40,
    backSpeed: 35,
    loop: true
});


//contact validation
function validate(){
    debugger;
    var name = document.getElementById('contact_name').value;
    var email = document.getElementById('contact_email').value;
    var message = document.getElementById('contact_msg').value;
    var error_msg = document.getElementById('error_msg');
    
    error_msg.style.padding = '.2rem 0';

    if(name.length < 2){
        error_msg.innerHTML="Please enter a valid name";
        name.focus();
        return false;
    }else if(email.length < 6){
        error_msg.innerHTML="Please enter a valid email ID";
        email.focus();
        return false;
    }else if(message.length < 2){
        error_msg.innerHTML="Please write a nice message";
        message.focus();
        return false;
    }
    alert('You message submitted successfully');
}