import vars from '../_vars';

export const loadLoginForm = () => {
  vars.$modalBody.innerHTML = `
    <h2 class="modal__title">Войти в систему</h2>
    <form id="loginForm" class="modal__form">
    <input class="modal__input" type="text" id="username" name="username" placeholder="Email/Телефон" required>
    <input class="modal__input" type="password" id="password" name="password" placeholder="Пароль" required>
    <div class="modal__checkbox">
    <input type="checkbox" id="remember" name="remember">
    <label for="remember">Запомнить пароль</label>
    </div>
    <a href="#" class="modal__link">Восстановить</a>
    <button class="modal__btn btn-reset btn btn--fill" type="submit" class="login-button">Войти</button>
    <button class="modal__btn btn-reset btn" type="button" class="register-button">Зарегистрироваться</button>
    </form>
  `
}
