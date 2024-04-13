<template>
    <div class="confirmsite">
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
                          Подключение
                        </h6>
    
                        <!-- Title -->
                        <h1 class="header-title">
                          Как подключить виджет к сайту?
                        </h1>
    
                      </div>
                    </div> <!-- / .row -->
                  </div>
                </div>
    
                <div class="confirmsite-content">
                    <h3><strong>Что нужно сделать, чтобы скрипт работал на вашем сайте</strong></h3>
                    <p>1) Нажать на кнопку <strong>«Добавить сайт»</strong></p>
                    <p>2) Вставить ссылку на ваш сайт в поле и нажать на кнопку <strong>«Добавить»</strong></p>
                    <p>3) Скопировать адрес скрипта в поле ниже и вставить его в код вашего сайта (внутри тега BODY)</p>
                    <div class="card">
                        <div class="card-body bg-dark">
                            <pre class="highlight html bg-dark mb-0 hljs language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://otclick.io/js/scripts.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></pre>
                        </div>
                    </div>
                </div>
    
              </div>
            </div> <!-- / .row -->
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'ConfirmsiteView',
    components: {
      Navbar
    },
    methods: {
    },
  }
  </script>
  
  <style lang="scss" scoped>
      .confirmsite{
          min-height: 100dvh;
      }
  </style>