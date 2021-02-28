const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const opentrash = document.querySelector('.opentrash');

  btn.addEventListener('click', function (e) {
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
