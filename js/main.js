const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);
document.addEventListener('keypress', closeByEsc);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
}

function logBackdropClick(e) {
  if (e.currentTarget === e.target) refs.backdrop.classList.toggle('is-hidden');
}

function closeByEsc(e) {
  console.log(e.code);
  if (e.code === 'Escape') refs.backdrop.classList.toggle('is-hidden');
}

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('menu__button--open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();
