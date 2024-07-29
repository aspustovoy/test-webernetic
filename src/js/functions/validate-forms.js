import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    if (selector === '.modal-form' || selector === '.contacts-form') {
      const modalOverlay = document.querySelector('.modal-overlay');
      const modals = document.querySelectorAll('.modal');
      const btn = form.querySelector('.btn');
      const path = btn.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
      document.body.classList.add('stop-scroll');
    }
  })

};
