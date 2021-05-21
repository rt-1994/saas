<template>
  <div class="catalog">
    <form class="catalog__head body__block slide-toggle">
      <div class="catalog__head-top">
        <div class="catalog__head-left">
          <h1 class="catalog__title">Каталог товаров </h1>
          <p class="catalog__breadcrumbs"><a class="catalog__breadcrumbs-item">Категория 1  </a><a class="catalog__breadcrumbs-item">Раздел 1 </a><a class="catalog__breadcrumbs-item">Подраздел 1 </a><a class="catalog__breadcrumbs-item">Товары </a></p>
        </div>
        <div class="catalog__head-right">
          <div class="catalog__search search">
            <label class="search__label">
              <input type="text" inputmode="search" id="search" name="search" placeholder="Найти товар">
            </label>
            <button class="search__reset" type="button">Очистить</button>
            <button class="search__btn icon-btn btn-bg" type="submit" aria-label="Найти" title="Найти"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 17.5L12.5 12.5" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
          </div>
          <button class="catalog__filter-btn slide-toggle__btn" type="button"><span>Фильтр</span>
            <svg class="icon svg-dropdown-dims">
              <use xlink:href="svgSprite/sprite.svg#dropdown"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="catalog__head-body slide-toggle__body">
        <div class="catalog__head-inner">
          <div class="catalog__checkboxes">
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox" name="random"><span class="checkbox__input">В избранном</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Пополнения товаров</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">В наличии</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Распродажа</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Скрыть товары в инвентарях</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Новинки</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Мои товары<span class="tooltip" data-tooltip-content="#tooltip__content">
                              <svg class="icon svg-info-dims">
                                <use xlink:href="svgSprite/sprite.svg#info"></use>
                              </svg></span></span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Проблемные товары</span>
            </label>
            <label class="catalog__checkbox checkbox">
              <input class="visually-hidden" type="checkbox"><span class="checkbox__input">С наложенным платежом</span>
            </label>
          </div>
          <div class="catalog__inputs">
            <div class="catalog__input-item">
              <select class="custom" name="chanel">
                <option value="val1">Канал сбыта</option>
                <option value="val1">Value 2 </option>
                <option value="val1">Value 3 </option>
                <option value="val1">Value 4 </option>
                <option value="val1">Value 5 </option>
              </select>
            </div>
            <div class="catalog__input-item">
              <select class="custom" name="chanel">
                <option value="val1">Инвентарь</option>
                <option value="val1">Value 2 </option>
                <option value="val1">Value 3 </option>
                <option value="val1">Value 4 </option>
                <option value="val1">Value 5 </option>
              </select>
            </div>
            <div class="catalog__input-item">
              <select class="custom" name="chanel">
                <option value="val1">Бренд</option>
                <option value="val1">Value 2 </option>
                <option value="val1">Value 3 </option>
                <option value="val1">Value 4 </option>
                <option value="val1">Value 5 </option>
              </select>
            </div>
            <div class="catalog__price">
              <p class="catalog__price-title">Цена от | до </p>
              <div class="catalog__price-inputs">
                <label class="catalog__price-label">
                  <input type="text" name="for" value="50">
                </label>
                <label class="catalog__price-label">
                  <input type="text" name="to" value="500">
                </label>
              </div>
            </div>
          </div>
          <div class="catalog__buttons">
            <button class="catalog__btn btn btn--invers btn-bg" type="submit">Применить фильтр</button>
            <button class="catalog__btn btn btn-bg" type="reset">Очистить фильтр              </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductCatalog'
}

</script>

<style>

</style>