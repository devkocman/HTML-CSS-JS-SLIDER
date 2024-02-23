let list=document=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots li');
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let active=0;
let lengthItems=items.length-1;

next.onclick=function(){
    if(active+1>lengthItems){
      active=0;

    }else{
       active=active+1;
    }
    reloadSlider();
    updateSliderContent(active);
}
prev.onclick=function(){
    if(active-1<0){
        active=lengthItems;
    }
    else{
        active=active-1;
    }
    reloadSlider();
    updateSliderContent(active);
}

function reloadSlider(){
    let checkLeft=items[active].offsetLeft;
    list.style.left=-checkLeft+'px';

    let lastActiveDot=document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li,key) => { 
    li.addEventListener('click',function(){
active=key;
reloadSlider();
    })
})
const pageContents = [
    { title: "Sayfa 1", message: "Hoşgeldiniz!", showButton: false },
    { title: "Sayfa 2", message: "Ben Alican!", showButton: false },
    { title: "Sayfa 3", message: "Full Stack Web Dev.", showButton: false },
    { title: "Sayfa 4", message: "UnityVerse Akademi Öğrencisi.", showButton: false },
    { title: "Sayfa 5", message: "Hakkımda daha fazlası için lütfen butona tıklayınız.", showButton: true, button: "welcome to my world!!! " },
];

// Slider metinlerini güncelleyen fonksiyon
function updateSliderContent(pageIndex) {
    const titleElement = document.getElementById('slider-title');
    const messageElement = document.getElementById('slider-message');
    const buttonElement = document.getElementById('slider-button');

    // Verilen sayfa indeksine göre başlık ve mesajı güncelle
    titleElement.textContent = pageContents[pageIndex].title;
    messageElement.textContent = pageContents[pageIndex].message;

    // Eğer showButton true ise, butonu göster ve metinini ayarla
    if (pageContents[pageIndex].showButton) {
        buttonElement.style.display = 'block';
        buttonElement.textContent = pageContents[pageIndex].button;
    } else {
        buttonElement.style.display = 'none';
    }
}

document.getElementById('slider-button').addEventListener('click', function() {
    window.location.href = 'https://www.linkedin.com/in/alican-ko%C3%A7man-3a57a41b7/';
});
dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
        updateSliderContent(active);
    });
});
updateSliderContent(active);