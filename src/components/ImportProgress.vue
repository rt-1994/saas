<template>
  <div>
    <div>
      <div class="wrapper">
        <div class="import-progress">
          <div class="import-header">Импорт данных</div>
          <div class="progress">
            <div class="progress-bar" style="width: 100%;"></div>
            <div class="progress-bar-product">
              <span>Загрузка товаров: <label>90%</label></span>
              <span>Ссылка: <label>http://www.</label></span>
            </div>
            <div class="progress-bar-foto"><span>Загрузка фото: <label>90%</label></span></div>
          </div>
          <div class="import-info"><p><span>Называние поставщика: </span>Длинное называние поставщика из Киева</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImportProgress'

}
</script>

<style scoped>

.wrapper {
  border-top: 1px #E1E1E1 solid;
  height: 150px;
}

.import-progress {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.import-progress {
  flex-basis: 15%;
}

.progress {
  flex-basis: 55%;
  position: relative;
}

.progress:after {
  content: '60%';
  position: absolute;
  top: 0;
  right: -50px;
}

.progress-bar-product {
  margin: 40px 0 20px 0 ;
}

.progress-bar-product span:nth-child(1){
  margin-right: 170px;
}

.import-info {
  flex-basis: 30%;
}

.import-info p {
  margin-left: 50px;
}


/* ========================================================
  Mixins
======================================================== */
/* ========================================================
  Progress Bar
======================================================== */
@-webkit-keyframes progress-bar-animate {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-animate {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

.progress {
  height: 15px;
  width: 100%;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #ccc 0%, #ddd 100%);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-bar {
  width: 70%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  background-color: #6f64f8;
  background-size: 40px 40px;
  border-radius: 10px;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 30%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 34%, transparent 34%, transparent 46%, rgba(0, 0, 0, 0.1) 46%, rgba(0, 0, 0, 0.1) 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 80%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.1) 84%, transparent 84%, transparent 96%, rgba(0, 0, 0, 0.1) 96%, rgba(0, 0, 0, 0.1));
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  transition: width 200ms ease;
  animation: progress-bar-animate 1s linear infinite;
}


</style>