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
                          Новый сайт
                        </h6>
    
                        <!-- Title -->
                        <h1 class="header-title">
                          Добавить сайт
                        </h1>
    
                      </div>
                    </div> <!-- / .row -->
                  </div>
                </div>
    
                <!-- Form -->
                <form class="mb-4">

                  <!-- Project name -->
                  <div class="form-group">
    
                    <!-- Label  -->
                    <label class="form-label">
                      Домен сайта
                    </label>
    
                    <!-- Input -->
                    <input type="text" class="form-control" v-model="domain">
    
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
  import {api} from '@/boot/api'

  export default {
    name: 'AddsiteView',
    data() {
      return {
        domain: null
      }
    },
    components: {
      Navbar
    },
    methods: {
      addSite(){
        const data = {
          domain: this.domain
        }
        api.post('/user-admin/site', data, {
          headers: {
            'Cookie': document.cookie
          },
          withCredentials: true
        }).then(response => {
          this.$router.push('/confirmsite')
        })
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
      .addsite{
          min-height: 100dvh;
      }
  </style>