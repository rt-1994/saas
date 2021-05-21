<template>
  <div class="catalog">
    <form class="catalog__head body__block slide-toggle">
      <div class="catalog__head-top">
        <div class="catalog__head-left">
          <h1 class="catalog__title">Импорт товаров </h1>
<!--          <p class="catalog__breadcrumbs"><a class="catalog__breadcrumbs-item">Категория 1  </a><a class="catalog__breadcrumbs-item">Раздел 1 </a><a class="catalog__breadcrumbs-item">Подраздел 1 </a><a class="catalog__breadcrumbs-item">Товары </a></p>-->
        </div>
        <div class="catalog__head-right">
          <button class="inventory__btn btn btn-bg btn--invers btn--min">Добавить</button>
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
  .catalog__head-right{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>