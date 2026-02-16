import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(resolvedDelay => {
      iziToast.success({
        position: 'topRight',
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
      });
    });

  form.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);  
      } else {
        reject(delay);   
      }
    }, delay);
  });
}

