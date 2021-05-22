<template>
  <div>
    <div>
      <div class="wrapper">
        <div class="information-settings-block">
          <div class="information">
            <div class="information-header">Информация, которую нужно обновить</div>
            <div class="information-block">
              <div>
                <label for="name"><input type="checkbox" id="name">  Название</label>
                <label for="code"><input type="checkbox" id="code">  Код товара/Артикул</label>
                <label for="price"><input type="checkbox" id="price">  Цена</label>
                <label for="foto"><input type="checkbox" id="foto">  Фото</label>
                <label for="availability"><input type="checkbox" id="availability">  Наличие</label>
                <label for="count"><input type="checkbox" id="count">  Количество</label>
                <label for="description"><input type="checkbox" id="description">  Описание</label>
              </div>
              <div>
                <label for="group"><input type="checkbox" id="group">  Группа</label>
                <label for="search"><input type="checkbox" id="search">  Пойсковые запросы</label>
                <label for="character"><input type="checkbox" id="character">  Характеристики</label>
                <label for="discount"><input type="checkbox" id="discount">  Скидки</label>
                <label for="notes"><input type="checkbox" id="notes">  Личные заметки</label>
                <label for="mark"><input type="checkbox" id="mark">  Код маркировки (GTIN)</label>
                <label for="number"><input type="checkbox" id="number">  Номер устройства (MPN)</label>
              </div>
            </div>
          </div>
          <div class="settings">

            <div class="settings-header">Обшие настройки</div>

            <label for="update"><input type="checkbox" id="update">  Обновить принудлительно</label>
            <label for="load_position"><input type="checkbox" id="load_position">  Загрузить позиции "В наличи" и "Под заказ"</label>

            <span class="status-header">Статус товаров, которых нет в файле</span>

            <label for="not_changed"><input type="radio" id="not_changed" name="status">  Оставить без изменений</label>
            <label for="not_availability"><input type="radio" id="not_availability" name="status">  Нет в наличии</label>
            <label for="hidden"><input type="radio" id="hidden" name="status">  Скрытые</label>
            <label for="deleted"><input type="radio" id="deleted" name="status">  Удальенные</label>
          </div>
          <div class="update-links">

            <div class="update-header">Автоматическое обновление ссылки</div>

            <label for="never"><input type="radio" id="never" name="update">  Никогда</label>
            <label for="hour"><input type="radio" id="hour" name="update">  Раз 4 часа</label>
            <label for="day"><input type="radio" id="day" name="update">  Раз в день</label>
            <label for="week"><input type="radio" id="week" name="update">  Раз в неделю</label>
            <label for="month"><input type="radio" id="month" name="update">  Раз в месяц</label>
          </div>
        </div>

        <div class="settings-buttons">
          <button class="btn btn-bg add_button add_link">Сбросить все</button>
          <button class="btn btn-bg btn--invers">Сохранить настройки</button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationSettings'

}
</script>

<style scoped>

.wrapper {
  border-top: 1px #E1E1E1 solid;
  padding-top: 30px;
  height: 350px;
}

.information-settings-block input[type="checkbox"]:checked{
  background: #6f64f8;
}

.information-settings-block{
  display: flex;
  justify-content: space-between;
}

.information{
  flex-basis: 37%;
}

.information label{

}

.information-header,
.update-header,
.settings-header{
  padding-bottom: 20px;
  font-weight: 600;
}

.status-header{
  padding: 40px 0 20px 0;
  font-weight: 600;
}

.information-block{
  display: flex;
  justify-content: space-between;

}

.information-block label{
  margin-bottom: 10px;
}

.information-block div{
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
}

.settings{
  display: flex;
  flex-direction: column;
  flex-basis: 37%
}

.settings label{
  margin-bottom: 10px;
}

.update-links{
  display: flex;
  flex-direction: column;
  flex-basis: 26%
}

.update-links label{
  margin-bottom: 10px;
}

.settings-buttons{
  display: flex;
  justify-content: flex-end;
}

.settings-buttons button{
  margin: 0 20px 20px 20px;
}


</style>