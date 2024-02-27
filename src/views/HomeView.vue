<template>
  <div class="home">
    <Navbar />
    <div class="main-content">
      <div class="header">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-end">
              <div class="col">
                <h6 class="header-pretitle">
                  Админ панель
                </h6>
                <h1 class="header-title">
                  Отклик
                </h1>
              </div>
              <div class="col-auto">
                <router-link to="/addsite" class="btn btn-primary lift">Добавить сайт</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-inactive" v-if="!getSites">
              <div class="card-body text-center">
                <img src="@/assets/img/illustrations/scale.svg" alt="..." class="img-fluid" style="max-width: 182px;">
                <h1>Тут еще нет вашего сайта...</h1>
                <p class="text-body-secondary">Добавьте свой сайт чтобы начать пользоваться сервисом.</p>
                <router-link to="/addsite" class="btn btn-primary">
                  Добавить сайт
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'HomeView',
  data() {
    return {
      notsites: true
    }
  },
  components: {
    Navbar
  },
  computed: {
    getSites(){
      let sites = this.$store.state.sites;
      if(sites){
        return true
      } else{
        return false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
    .home{
        min-height: 100dvh;
    }
</style>