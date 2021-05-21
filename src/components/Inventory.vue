<template>
  <div>
    <div class="inventory body__block">
      <div class="inventory__inner">
        <div class="inventory__item">
          <p class="inventory__title">Инвентарь </p>
          <div class="inventory__inputs">
            <button class="open-modal icon-btn btn-bg" aria-labe="Добавить" title="Добавить" @click.prevent="openChannelsModal">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4.1665V15.8332" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.16675 10H15.8334" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="inventory__select">
              <select class="custom" name="inventory">
                <option value="val1">  Выбрать инвентарь</option>
                <option value="val2">  Выбрать инвентарь</option>
                <option value="val3">  Выбрать инвентарь</option>
                <option value="val4">  Выбрать инвентарь</option>
                <option value="val5">  Выбрать инвентарь</option>
                <option value="val6">  Выбрать инвентарь</option>
              </select>
            </div>
          </div>
        </div>
        <div class="inventory__item">
          <p class="inventory__title">Товары</p>
          <label class="inventory__checkbox checkbox">
            <input class="visually-hidden" type="checkbox"><span class="checkbox__input">Выделить все товары</span>
          </label>
        </div>
        <div class="inventory__btns">
          <button class="inventory__btn btn btn-bg btn--invers btn--min">Добавить</button>
          <button class="inventory__btn btn btn-bg btn--min">Удалить</button>
        </div>
      </div>
    </div>
    <Channels v-show="showModal"/>
  </div>


</template>

<script>
import Channels from "./Modals/Channels";
export default {
  name: 'Inventory',
  components: {Channels},
  data: () => ({

  }),
  methods: {
    openChannelsModal() {

    }
  }
}

</script>

<style>

</style>