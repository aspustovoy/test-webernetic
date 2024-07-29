import vars from '../_vars';
import { loadLoginForm } from "../functions/loadLoginForm";

vars.$openModal.onclick = () => {
  vars.$modalOverlay.classList.add('modal-overlay--visible');
  vars.$modal.classList.add('modal--visible');
  vars.$bodyEl.classList.add('stop-scroll');
  loadLoginForm();
}

vars.$closeBtn.onclick = () => {
  vars.$modalOverlay.classList.remove('modal-overlay--visible');
  vars.$modal.classList.remove('modal--visible');
  vars.$bodyEl.classList.add('stop-scroll');
  vars.$modalBody.innerHTML = "";
}

vars.$modalOverlay.onclick = (event) => {
  if (event.target == vars.$modalOverlay) {
    vars.$modalOverlay.classList.remove('modal-overlay--visible');
    vars.$modal.classList.remove('modal--visible');
    vars.$bodyEl.classList.add('stop-scroll');
    vars.$modalBody.innerHTML = "";
  }
}
