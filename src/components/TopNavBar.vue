<template>
  <header class="header body__block">
    <div class="header__left">
      <nav class="header__menu menu">
        <div class="menu__burger-wrapper">
          <button class="menu__burger" aria-label="Открыть меню" title="Открыть меню"> <span> </span><span> </span><span> </span></button>
        </div>
        <ul class="menu__list">
          <li class="menu__item"> <a class="menu__link" href="/"><span class="menu__link-name">Распродажа</span><span class="menu__link-icon">27</span></a></li>
          <li class="menu__item"> <a class="menu__link" href="/"><span class="menu__link-name">Новинки</span><span class="menu__link-icon">5</span></a></li>
          <li class="menu__item menu__item--separetor"><a class="menu__link" href="/"><span class="menu__link-name">Пополнения товаров</span><span class="menu__link-icon">1</span></a></li>
          <li class="menu__item"> <a class="menu__link" href="/"><span class="menu__link-name">ТТН</span><span class="menu__link-icon menu__icon--warning">2</span></a></li>
          <li class="menu__item menu__item--separetor"><a class="menu__link" href="/"><span class="menu__link-name">Заказы</span><span class="menu__link-icon menu__icon--danger">1</span></a></li>
          <li class="menu__item"> <a class="menu__link" href="/"><span class="menu__link-name">Каналы сбыта</span></a></li>
        </ul>
      </nav>
    </div>
    <div class="header__right">
      <div class="header__right-btns">
        <div class="header__btn-item">
          <button class="header__btn btn-bg"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00001 17.4998C5.92049 17.4998 6.66668 16.7536 6.66668 15.8332C6.66668 14.9127 5.92049 14.1665 5.00001 14.1665C4.07954 14.1665 3.33334 14.9127 3.33334 15.8332C3.33334 16.7536 4.07954 17.4998 5.00001 17.4998Z" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.1667 17.4998C15.0871 17.4998 15.8333 16.7536 15.8333 15.8332C15.8333 14.9127 15.0871 14.1665 14.1667 14.1665C13.2462 14.1665 12.5 14.9127 12.5 15.8332C12.5 16.7536 13.2462 17.4998 14.1667 17.4998Z" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.1667 14.1667H5.00001V2.5H3.33334" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 4.1665L16.6667 4.99984L15.8333 10.8332H5" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        <div class="header__btn-item">
          <button class="header__btn btn-bg"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 16.6668L3.58333 13.4168C2.64704 12.032 2.30833 10.3922 2.63018 8.80207C2.95204 7.21197 3.91255 5.77987 5.33314 4.77204C6.75373 3.76421 8.53772 3.24923 10.3534 3.32285C12.1691 3.39647 13.8929 4.05368 15.2044 5.17228C16.5159 6.29089 17.3257 7.79477 17.4834 9.4043C17.6411 11.0138 17.1358 12.6195 16.0616 13.9228C14.9873 15.226 13.4172 16.1382 11.6432 16.4896C9.86911 16.8411 8.01184 16.6079 6.41667 15.8335L2.5 16.6668" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 10V10.0083" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66675 10V10.0083" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 10V10.0083" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        <div class="header__btn-item">
          <button class="header__btn btn-bg"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33325 4.16667C8.33325 3.72464 8.50885 3.30072 8.82141 2.98816C9.13397 2.67559 9.55789 2.5 9.99992 2.5C10.4419 2.5 10.8659 2.67559 11.1784 2.98816C11.491 3.30072 11.6666 3.72464 11.6666 4.16667C12.6236 4.61919 13.4394 5.32361 14.0266 6.20442C14.6138 7.08523 14.9503 8.10923 14.9999 9.16667V11.6667C15.0626 12.1848 15.2461 12.6809 15.5356 13.1151C15.8251 13.5493 16.2125 13.9095 16.6666 14.1667H3.33325C3.78737 13.9095 4.17476 13.5493 4.46424 13.1151C4.75372 12.6809 4.93721 12.1848 4.99992 11.6667V9.16667C5.04955 8.10923 5.386 7.08523 5.97321 6.20442C6.56042 5.32361 7.37624 4.61919 8.33325 4.16667" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 14.1665V14.9998C7.5 15.6629 7.76339 16.2988 8.23223 16.7676C8.70107 17.2364 9.33696 17.4998 10 17.4998C10.663 17.4998 11.2989 17.2364 11.7678 16.7676C12.2366 16.2988 12.5 15.6629 12.5 14.9998V14.1665" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        <div class="header__btn-item">
          <button class="header__btn btn-bg header__btn--help"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66663 6.6665C6.66663 6.00346 6.97392 5.36758 7.5209 4.89874C8.06788 4.4299 8.80974 4.1665 9.58329 4.1665H10.4166C11.1902 4.1665 11.932 4.4299 12.479 4.89874C13.026 5.36758 13.3333 6.00346 13.3333 6.6665C13.364 7.20755 13.218 7.74392 12.9174 8.19482C12.6168 8.64572 12.1779 8.98673 11.6666 9.1665C11.1554 9.40619 10.7164 9.86088 10.4158 10.4621C10.1152 11.0633 9.96927 11.7784 9.99996 12.4998" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 15.8335V15.8418" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        <div class="header__btn-item slide-toggle">
          <button class="header__btn slide-toggle__btn btn-bg"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 7.5H17" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12.5H17" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.58322 2.5C8.17934 4.74968 7.43506 7.34822 7.43506 10C7.43506 12.6518 8.17934 15.2503 9.58322 17.5" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.4165 2.5C11.8204 4.74968 12.5647 7.34822 12.5647 10C12.5647 12.6518 11.8204 15.2503 10.4165 17.5" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
          <div class="header__btn-body slide-toggle__body body__block">
            <input class="visually-hidden" type="radio" id="ru" name="language" value="ru" checked>
            <label class="header__option" for="ru"> <span>RU</span></label>
            <input class="visually-hidden" type="radio" id="ua" name="language" value="ua">
            <label class="header__option" for="ua"> <span>UA</span></label>
          </div>
        </div>
      </div>
      <div class="header__avatar avatar slide-toggle">
        <button class="avatar__btn slide-toggle__btn js-overlay"><img src="@/assets/images/avatar.png" alt="Evhenii Bilyk" width="40" height="40"></button>
        <div class="avatar__body slide-toggle__body body__block">
          <div class="avatar__personal">
            <p class="avatar__name">Иван Иванов</p>
            <p class="avatar__id">id2932382</p>
          </div>
          <div class="avatar__money">
            <p>Сумма к выплате: 37492</p>
            <p>Баланс: 3749 ₽</p><a class="avatar__money-link link" href=""> Пополнить</a>
          </div>
          <ul class="avatar__menu">
            <li class="avatar__item"> <a class="avatar__link" href="/"><span class="avatar__icon">
                            <svg class="icon svg-orders-dims">
                              <use xlink:href="svgSprite/sprite.svg#orders"></use>
                            </svg></span><span class="avatar__link-title">Заказы</span></a></li>
            <li class="avatar__item"> <a class="avatar__link" href="/"><span class="avatar__icon">
                            <svg class="icon svg-basket-dims">
                              <use xlink:href="svgSprite/sprite.svg#basket"></use>
                            </svg></span><span class="avatar__link-title">Корзина</span></a></li>
            <li class="avatar__item"> <a class="avatar__link" href="/"><span class="avatar__icon">
                            <svg class="icon svg-TTN-dims">
                              <use xlink:href="svgSprite/sprite.svg#TTN"></use>
                            </svg></span><span class="avatar__link-title">ТТН</span></a></li>
            <li class="avatar__item"> <a class="avatar__link" href="/"><span class="avatar__icon">
                            <svg class="icon svg-finance-dims">
                              <use xlink:href="svgSprite/sprite.svg#finance"></use>
                            </svg></span><span class="avatar__link-title">Финансы</span></a></li>
            <li class="avatar__item"> <a class="avatar__link" href="/"><span class="avatar__icon">
                            <svg class="icon svg-bill-dims">
                              <use xlink:href="svgSprite/sprite.svg#bill"></use>
                            </svg></span><span class="avatar__link-title">Счета</span></a></li>
            <li class="avatar__item"> <a class="avatar__link" href="/"><span class="avatar__icon">
                            <svg class="icon svg-notification-dims">
                              <use xlink:href="svgSprite/sprite.svg#notification"></use>
                            </svg></span><span class="avatar__link-title">Уведомления</span></a></li>
          </ul>
          <button class="avatar__log-out"> <span>Выйти из аккаунта</span>
            <svg class="icon svg-logOut-dims">
              <use xlink:href="svgSprite/sprite.svg#logOut"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopNavBar'
}

</script>

<style>

</style>