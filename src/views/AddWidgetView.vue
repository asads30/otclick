<template>
    <div class="addsite">
      <Navbar />
      <div class="main-content">
        <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-10 col-xl-8">
    
                <!-- Header -->
                <div class="header mt-md-5">
                  <div class="header-body">
                    <div class="row align-items-center">
                      <div class="col">
    
                        <!-- Pretitle -->
                        <h6 class="header-pretitle">
                          Новый виджет
                        </h6>
    
                        <!-- Title -->
                        <h1 class="header-title">
                          Добавить виджет
                        </h1>
    
                      </div>
                    </div> <!-- / .row -->
                  </div>
                </div>
    
                <!-- Form -->
                <form class="mb-4">
                  <div class="form-group">
                    <label class="form-label">
                      Тип виджета
                    </label>
                    <select class="form-select" v-model="type">
                        <option selected value="1">Базовый виджет</option>
                        <option value="2">Виджет для опроса</option>
                    </select>
                  </div>
                  <div class="type1" v-if="type == 1">
                    <div class="card">
                        <div class="card-header">
                          <h4 class="card-header-title">Заголовок</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="title-on" v-model="title.on">
                                <label class="form-check-label" for="title-on">Отображать заголовок</label>
                            </div>
                            <div class="form-floating form-group mb-0" v-if="title.on">
                                <input type="text" class="form-control" id="title" placeholder="Оцените эту страницу" v-model="title.text">
                                <label for="title">Заголовок виджета</label>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                          <h4 class="card-header-title">Описание</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="des-on" v-model="des.on">
                                <label class="form-check-label" for="des-on">Отображать описание</label>
                            </div>
                            <div class="form-floating form-group mb-0" v-if="des.on">
                                <input type="text" class="form-control" id="des" placeholder="Оцените эту страницу" v-model="des.text">
                                <label for="des">Заголовок виджета</label>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                          <h4 class="card-header-title">Оценка</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="rate-on" v-model="rate.on">
                                <label class="form-check-label" for="rate-on">Отображать оценку</label>
                            </div>
                            <div class="rate" v-if="rate.on">
                                <select class="form-select" id="rate-type" v-model="rate.type">
                                    <option value="1" selected>Звезды</option>
                                    <option value="2">Цифры</option>
                                    <option value="3">Смайлы</option>
                                </select>
                                <div class="form-floating form-group mb-0 mt-3" v-if="rate.type == 1">
                                    <input type="number" class="form-control" id="number" placeholder="1" v-model="rate.stars">
                                    <label for="number">Кол-во звезд</label>
                                </div>
                                <div class="form-floating form-group mb-0 mt-3" v-if="rate.type == 2">
                                    <input type="number" class="form-control" id="number" placeholder="1" v-model="rate.number">
                                    <label for="number">Кол-во цифр</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                          <h4 class="card-header-title">Обратная связь</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" type="checkbox" id="callback-on" v-model="callback.on">
                                <label class="form-check-label" for="callback-on">Отображать обратную связь</label>
                            </div>
                            <div class="callback" v-if="callback.on">
                                <select class="form-select" id="callback-type" v-model="callback.type">
                                    <option value="1" selected>Текстовое сообщение</option>
                                    <option value="2">Номер телефона</option>
                                    <option value="3">Ссылка</option>
                                </select>
                                <div class="callback-text mt-3" v-if="callback.type == 1">
                                    <div class="form-floating form-group mb-0">
                                        <input type="text" class="form-control" id="callback-text" placeholder="Расскажите, что вам особенно понравилось на странице" v-model="callback.text">
                                        <label for="callback-text">Описание обратной связи</label>
                                    </div>
                                </div>
                                <div class="callback-text mt-3" v-if="callback.type == 3">
                                    <div class="form-floating form-group mb-0">
                                        <input type="text" class="form-control" id="callback-link" placeholder="https://site.ru/" v-model="callback.link">
                                        <label for="callback-link">Ссылка для обратной связи</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <button @click="addSite" type="button" class="btn w-100 btn-primary">
                    Добавить
                  </button>
    
                </form>
    
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'AddWidgetView',
    data() {
      return {
        domain: null,
        type: 1,
        title: {
            on: false,
            text: ''
        },
        des: {
            on: false,
            text: ''
        },
        rate: {
            on: false,
            type: 1,
            stars: 1,
            number: 1
        },
        callback: {
            on: false,
            type: 1,
            text: '',
            link: ''
        }
      }
    },
    components: {
      Navbar
    },
  }
  </script>
  
  <style lang="scss" scoped>
      .addsite{
          min-height: 100dvh;
      }
  </style>