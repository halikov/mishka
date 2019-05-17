var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  navMain.classList.toggle('main-nav--closed');
});

var orderBtns = document.querySelectorAll('.order-button');
var popup = document.querySelector('.popup');
var close = popup.querySelector('.close');

for (var i = 0; i < orderBtns.length; i++) {
  var currentBtn = orderBtns[i];

  currentBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.toggle('popup--closed');
  });
}

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup--closed');
});
