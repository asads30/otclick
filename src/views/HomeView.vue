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
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h4 class="card-header-title">Сайты</h4>
                  </div>
                </div>
              </div>
              <div class="table-responsive mb-0">
                <table class="table table-sm table-nowrap card-table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span class="text-body-secondary">ID</span>
                      </th>
                      <th scope="col">
                        <span class="text-body-secondary">Домен</span>
                      </th>
                      <th scope="col">
                        <span class="text-body-secondary">Дата</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="list">
                    <tr v-for="item in sites" :key="item.ID">
                      <td class="list-item">{{ item.ID }}</td>
                      <td class="list-item">
                        <router-link :to="'/site/' + item.ID">{{ item.Domains[0].Domain }}</router-link>
                      </td>
                      <td class="list-item">{{ formatDate(item.CreatedAt) }}</td>
                    </tr>
                  </tbody>
                </table>
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
    sites(){
      let sites = this.$store.state.sites;
      return sites
    },
    getSites(){
      let sites = this.$store.state.sites;
      if(sites){
        return true
      } else{
        return false
      }
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    }
  },
}
</script>

<style lang="scss" scoped>
    .home{
        min-height: 100dvh;
    }
</style>