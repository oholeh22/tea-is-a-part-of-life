const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');


if (menuBtn && menuList && menuShadow && menuClose) {
  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
  });

  menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
  });
}

document.querySelectorAll('.assortment__img').forEach(img => {
    img.addEventListener('click', () => {
      console.log('Image clicked:', img.src);
    });
  });


function openModal(src) {
    console.log('Opening modal with image:', src); 
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
  
    if (modal && modalImg) {
      modal.classList.add('modal--open'); 
      modalImg.src = src; 
      console.log('Modal opened with image:', modalImg.src); 
    } else {
      console.error('Modal or modal image element not found'); 
    }
  }

function closeModal() {
  const modal = document.getElementById('modal');
  
  if (modal) {
    modal.classList.remove('modal--open');
  } else {
    console.log('Модальное окно или изображение не найдены.');
  }
}


const themeToggle = document.getElementById('themeToggle');


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('neutral-theme');
  themeToggle.checked = true; 
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('neutral-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('neutral-theme');
    localStorage.setItem('theme', 'light');
  }
});
