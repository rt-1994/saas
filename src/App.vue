<template>
  <div id="app">
    <div class="body">
      <Left-nav-bar></Left-nav-bar>
      <div class="body__body">
        <Top-nav-bar></Top-nav-bar>
        <main class="main">
          <Product-catalog></Product-catalog>
          <Inventory></Inventory>
        </main>
        <div class="tooltip__templates">
          <p id="tooltip__content">  Всплывающее окно <br> Подсказка.<br>Может состоять из:<br>— 1<br>— двух<br>— даже трех пунктов!</p>
        </div>
        <div class="overlay"></div>
        <Channels></Channels>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavBar from './components/LeftNavBar'
import TopNavBar from './components/TopNavBar'
import ProductCatalog from './components/ProductCatalog'
import Inventory from './components/Inventory'
import Channels from './components/Modals/Channels'


export default {
  name: 'App',
  components: {
    LeftNavBar,
    TopNavBar,
    ProductCatalog,
    Inventory,
    Channels
  },

  mounted(){
    let libs = document.createElement('script')
    libs.setAttribute('src', './assets/js/libs.min')

    let main = document.createElement('script')
    main.setAttribute('src', './assets/js/main')

    let mainMin = document.createElement('script')
    main.setAttribute('src', './assets/js/main.min')

    document.body.appendChild(libs, main, mainMin)
  },
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
