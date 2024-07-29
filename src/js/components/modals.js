// const btns = document.querySelectorAll('.btn-modal');
// const modalOverlay = document.querySelector('.modal-overlay');
// const modals = document.querySelectorAll('.modal');
// const exitBtns = document.querySelectorAll('.modal__exit');

// if (modalOverlay) {
//   btns.forEach((el) => {
//     el.addEventListener('click', (e) => {
//       let path = e.currentTarget.getAttribute('data-path');
//       modals.forEach((el) => {
//         el.classList.remove('modal--visible');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
//       modalOverlay.classList.add('modal-overlay--visible');
//       document.body.classList.add('stop-scroll');
//     });
//   });
//   modalOverlay.addEventListener('click', (e) => {
//     if (e.target == modalOverlay) {
//       modalOverlay.classList.remove('modal-overlay--visible');
//       modals.forEach((el) => {
//         el.classList.remove('modal--visible');
//         document.body.classList.remove('stop-scroll');
//       });
//     }
//   });
//   exitBtns.forEach((el) => {
//     el.addEventListener('click', () => {
//       modalOverlay.classList.remove('modal-overlay--visible');
//       modals.forEach((el) => {
//         el.classList.remove('modal--visible');
//         document.body.classList.remove('stop-scroll')
//       });
//     });
//   });
// }
