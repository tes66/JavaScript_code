const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const opentrash = document.querySelector('.opentrash');

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    modal.classList.add('active');
    opentrash.display = 'block';


  })

  document.addEventListener('click', function () {
    modal.classList.add('active');
    opentrash.display = 'none';

  })
  
