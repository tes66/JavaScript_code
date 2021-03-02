const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');
const modal = document.querySelector('.modal');
const modal_2 = document.querySelector('.modal_2');
const opentrash = document.querySelector('.opentrash');

  btn_1.addEventListener('click', function (e) {
    e.stopPropagation();
    modal.classList.add('active');
    opentrash.style.display = 'block';


  })

  opentrash.addEventListener('click', function () {
    modal.classList.remove('active');
    opentrash.style.display = 'none';

  })

  document.addEventListener('keydown', function(e){
    if(e.key == 'Escape') {
      modal.classList.remove('active');
      opentrash.style.display = 'none';
    }
  })


  btn_2.addEventListener('click', function (e) {
    e.stopPropagation();
    modal_2.classList.add('active');
    opentrash.style.display = 'block';


  })

  opentrash.addEventListener('click', function () {
    modal_2.classList.remove('active');
    opentrash.style.display = 'none';

  })
