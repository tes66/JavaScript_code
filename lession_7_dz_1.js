const btn_1 = document.querySelector('.btn_1');
const modal = document.querySelector('.modal');
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
