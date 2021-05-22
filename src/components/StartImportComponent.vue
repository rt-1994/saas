<template>
  <div>
    <div class="inventory body__block">
      <div class="wrapper">
        <div class="import">
          <p class="import_title">Подготовьте файл импорта следуя инструкции </p>
          <div class="inventory__btns">
            <button class="btn btn-bg btn--invers">Начать импорт</button>
          </div>
        </div>


        <div class="import_block">

          <div class="load_file">
            <label><input type="radio" id="server" checked name="load" value="server" v-model="picked">  Загрузить файл с сервера</label>
            <label><input type="radio" id="computer" name="load" value="computer" v-model="picked">  Загрузить файл с компьютера</label>
            <button class="btn btn-bg add_button add_link">Добавить еще ссылку</button>
            <button class="btn btn-bg add_button add_file">Добавить еще файл</button>
          </div>

          <div class="supplier">
            <div class="add-link">
              <div class="add-link-item" v-if="picked === 'server'">
                <input type="text" placeholder="Введите ссылку">
                <button class="add-clear">Очистить</button>
                <button class="add-plus">
                  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4.167v11.666M4.167 10h11.666" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

              <div class="add-link-item add-import" v-if="picked === 'computer'">
               <label class="form-control btn btn-bg btn--invers add-import" for="file">Загрузить файл</label>
                <input class="form-item__input" id="file" type="file" ref="myFiles" @change="previewFiles" name="file"/>
                <label class="files-name" v-bind="files"><p>{{files}}</p></label>
              </div>

            </div>
            <div class="add-link">
              <input type="text" placeholder="Название поставщика *">
              <input type="text" placeholder="Ресурс поставщика *">
            </div>
          </div>

          <div class="notes">
            <div>
              <input type="text" placeholder="Личные заметки">
              <button class="notes-action">
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                    d="M10 4.167v11.666M4.167 10h11.666" stroke="#232323" stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div>
              <span>Настройки импорта</span>
              <button class="notes-action">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7778 0.75L5.88889 5.80747L1 0.75" stroke="#232323" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="questions">
            <div class="questions-title">Как импортировать?</div>
            <nav>
              <ul class="questions-list">
                <li><a href="#">Подробнее об импорте</a></li>
                <li><a href="#">Файлы ХLS, XLSX или CSV</a></li>
                <li><a href="#">Файл XML</a></li>
                <li><a href="#">Файл YML</a></li>
                <li><a href="#">Google файл</a></li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
      <Import-progress/>
      <Information-settings/>

    </div>
  </div>
</template>

<script>

import ImportProgress from './ImportProgress';
import InformationSettings from './InformationSettingsComponent';

  export default {

    components:{
      ImportProgress,
      InformationSettings
    },
    data(){
      return{
        files: '',
        picked: 'server'
      }
    },

    methods:{
      previewFiles() {
        this.files = this.$refs.myFiles.files[0].name
        return console.log(this.$refs.myFiles.files)
      },

      showElements(){

      }
    }
  }
</script>

<style scoped>

.wrapper {
  height: 236px;
}

.import {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.import_block {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
}

.load_file {
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
}

.load_file label:hover{
  cursor: pointer;
}

.load_file label:nth-child(2) {
  margin-top: 20px;
}

.add-link-item{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  border-radius: 6px;
  position: relative;
}

.add-link input{
  background: #f1f1f1;
  border-radius: 6px;
  height: 36px;
  padding: 0 10px;
}

.add_file {
  display: none;
}

.add-import input{
  background: #f1f1f1;
  border-radius: 6px;
  height: 36px;
  padding: 0 10px;
  width: 100%;
  margin-left: 26px;

}

.add-import button{
  width: 170px;
}

.add-import{
  position: relative;
  line-height: 2.7;

}

.add-import:hover{
  cursor: pointer;
}

.files-name{
  background: #f1f1f1;
  position: absolute;
  width: 390px;
  height: 36px;
  line-height: 2.5;
  text-align: left;
  border-radius: 6px;
  top: 0;
  right: 0px;
}

.files-name p{
  padding-left: 10px;
}

.add-clear,.add-plus{
  background: none;
  position: absolute;
  top: 0;
  height: 100%;

}

.add-clear{
  right: 60px;
  font-size: 12px;
  text-decoration: underline;
  color: #a7a7a7;
}

.add-plus{
  right: 0;
  background: #fff;
  padding: 0 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 #e3e3e3;
}

.supplier {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  flex-basis: 40%;
}

.supplier div:nth-child(1) {
  flex-basis: 100%;
}

.supplier div:nth-child(1)>input{
  flex-basis: 100%;
  padding-right: 120px;
}

.supplier div:nth-child(2) {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}

.supplier div:nth-child(2)>input{
  width: 48%;
}

.notes {
  flex-basis: 20%;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
}

.notes > div{
  position: relative;
  flex-basis: 100%;
  padding-top: 10px;
}

.notes-action{
  position: absolute;
  left: 50%;
  top: 0;
}

.notes div:nth-child(1) .notes-action{
  background: #fff;
  padding: 7px 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 #e3e3e3;
}


.notes div:nth-child(2) .notes-action{
  background:transparent;
  line-height: 30px;
}


.questions {
  flex-basis: 20%;
  border-left: 1px #E1E1E1 solid;
  padding-left: 20px;
}

.questions-title {
  margin-bottom: 15px;
}

.questions-list {
  list-style: none;
}

.questions-list li:nth-child(n+2){
  margin-top: 10px;
}

.questions-list a{
  color: #6f64f8;
}

.name_supplier {
  flex-basis: 50%;
  height: 36px;
}

.resource_supplier {
  flex-basis: 50%;
  height: 36px;
}

.add_button {
  margin-top: 20px;
}


.file{
  display: none;
}

.form-item__input{
  display: none;
}


</style>