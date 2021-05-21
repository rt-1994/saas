<template>
  <aside class="aside">
    <div class="aside__inner">
      <div class="aside__head"> <a class="aside__logo" href="/"><img class="logo" src="" width="171" height="54" alt="logo"><img class="logo-min" src="" width="36" height="19" alt="logo"></a>
        <button class="menu__close" aria-label="Закрыть меню" title="Закрыть меню">
          <svg class="icon svg-cross-dims">
            <use xlink:href="svgSprite/sprite.svg#cross"></use>
          </svg>
        </button>
      </div>
      <div class="aside__body-wrapper scrollbar-outer">
        <nav class="aside__body aside-menu">
          <ul class="aside-menu__list">
            <li class="aside-menu__item">
              <div class="aside-menu__head"><a class="aside-menu__icon" href="/">
                <svg class="icon svg-basket-dims">
                  <use xlink:href="svgSprite/sprite.svg#basket"></use>
                </svg></a><a class="aside-menu__link" href="/">Товары</a>
                <button class="aside-menu__btn arrow-btn" aria-label="Показать все" title="Показать все">
                  <svg class="icon svg-dropdown-dims">
                    <use xlink:href="svgSprite/sprite.svg#dropdown"></use>
                  </svg>
                </button>
              </div>
              <ul class="aside-menu__submenu">
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Каталог</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Инвентари</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Избранное</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Проблемные товары</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Импорт</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Экспорт</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Ценовые правила</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Каналы сбыта</span></a></li>
              </ul>
            </li>
            <li class="aside-menu__item">
              <div class="aside-menu__head"><a class="aside-menu__icon" href="/">
                <svg class="icon svg-orders-dims">
                  <use xlink:href="svgSprite/sprite.svg#orders"></use>
                </svg></a><a class="aside-menu__link" href="/">Заказы</a>
                <button class="aside-menu__btn arrow-btn" aria-label="Показать все" title="Показать все">
                  <svg class="icon svg-dropdown-dims">
                    <use xlink:href="svgSprite/sprite.svg#dropdown"></use>
                  </svg>
                </button>
              </div>
              <ul class="aside-menu__submenu">
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Корзина</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Новые</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Активные заказы</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Выполненные</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Отмененные</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Финансы</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> ТТН</span></a></li>
              </ul>
            </li>
            <li class="aside-menu__item"> <a class="aside-menu__head" href="/">
              <div class="aside-menu__icon">
                <svg class="icon svg-posting-dims">
                  <use xlink:href="svgSprite/sprite.svg#posting"></use>
                </svg>
              </div>
              <div class="aside-menu__link">Отложенный постинг</div></a></li>
            <li class="aside-menu__item"> <a class="aside-menu__head" href="/">
              <div class="aside-menu__icon">
                <svg class="icon svg-synchronization-dims">
                  <use xlink:href="svgSprite/sprite.svg#synchronization"></use>
                </svg>
              </div>
              <div class="aside-menu__link">Синхронизации</div></a></li>
            <li class="aside-menu__item"> <a class="aside-menu__head" href="/">
              <div class="aside-menu__icon">
                <svg class="icon svg-message-dims">
                  <use xlink:href="svgSprite/sprite.svg#message"></use>
                </svg>
              </div>
              <div class="aside-menu__link">Сообщения</div></a></li>
            <li class="aside-menu__item"> <a class="aside-menu__head" href="/">
              <div class="aside-menu__icon">
                <svg class="icon svg-employee-dims">
                  <use xlink:href="svgSprite/sprite.svg#employee"></use>
                </svg>
              </div>
              <div class="aside-menu__link">Сотрудники</div></a></li>
            <li class="aside-menu__item">
              <div class="aside-menu__head"><a class="aside-menu__icon" href="/">
                <svg class="icon svg-settings-dims">
                  <use xlink:href="svgSprite/sprite.svg#settings"></use>
                </svg></a><a class="aside-menu__link" href="/">Настройки</a>
                <button class="aside-menu__btn arrow-btn" aria-label="Показать все" title="Показать все">
                  <svg class="icon svg-dropdown-dims">
                    <use xlink:href="svgSprite/sprite.svg#dropdown"></use>
                  </svg>
                </button>
              </div>
              <ul class="aside-menu__submenu">
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Профиль</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Социальные сети</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Пополнить баланс</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Мои счета</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Уведомления</span></a></li>
              </ul>
            </li>
            <li class="aside-menu__item"> <a class="aside-menu__head" href="/">
              <div class="aside-menu__icon">
                <svg class="icon svg-stoplist-dims">
                  <use xlink:href="svgSprite/sprite.svg#stoplist"></use>
                </svg>
              </div>
              <div class="aside-menu__link">Черный список</div></a></li>
            <li class="aside-menu__item"> <a class="aside-menu__head" href="/">
              <div class="aside-menu__icon">
                <svg class="icon svg-news-dims">
                  <use xlink:href="svgSprite/sprite.svg#news"></use>
                </svg>
              </div>
              <div class="aside-menu__link">Новости</div></a></li>
            <li class="aside-menu__item">
              <div class="aside-menu__head"><a class="aside-menu__icon" href="/"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66663 6.6665C6.66663 6.00346 6.97392 5.36758 7.5209 4.89874C8.06788 4.4299 8.80974 4.1665 9.58329 4.1665H10.4166C11.1902 4.1665 11.932 4.4299 12.479 4.89874C13.026 5.36758 13.3333 6.00346 13.3333 6.6665C13.364 7.20755 13.218 7.74392 12.9174 8.19482C12.6168 8.64572 12.1779 8.98673 11.6666 9.1665C11.1554 9.40619 10.7164 9.86088 10.4158 10.4621C10.1152 11.0633 9.96927 11.7784 9.99996 12.4998" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 15.8335V15.8418" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></a><a class="aside-menu__link" href="/">Помощь</a>
                <button class="aside-menu__btn arrow-btn" aria-label="Показать все" title="Показать все">
                  <svg class="icon svg-dropdown-dims">
                    <use xlink:href="svgSprite/sprite.svg#dropdown"></use>
                  </svg>
                </button>
              </div>
              <ul class="aside-menu__submenu">
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Частые вопросы</span></a></li>
                <li class="aside-menu__subitem"> <a class="aside-menu__sublink" href="/"><span> Техподдержка</span></a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'LeftNavBar'
}

</script>

<style>

</style>