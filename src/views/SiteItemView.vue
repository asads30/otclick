<template>
    <div class="site">
        <Navbar />
        <div class="main-content">
            <div class="header">
              <div class="container-fluid">
                <div class="header-body">
                  <div class="row align-items-end">
                    <div class="col">
                      <h6 class="header-pretitle">
                        Отзывы
                      </h6>
                      <h1 class="header-title">
                        {{ site.Domains[0].Domain }}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                              <div class="row align-items-center">
                                <div class="col">
                                  <h4 class="card-header-title">Отзывы</h4>
                                </div>
                              </div>
                            </div>
                            <div class="table-responsive mb-0" data-list="{&quot;valueNames&quot;: [&quot;goal-project&quot;, &quot;goal-status&quot;, &quot;goal-progress&quot;, &quot;goal-date&quot;]}">
                              <table class="table table-sm table-nowrap card-table">
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <span class="text-body-secondary" data-sort="goal-project">ID</span>
                                    </th>
                                    <th scope="col">
                                      <span class="text-body-secondary" data-sort="goal-status">Оценка</span>
                                    </th>
                                    <th scope="col">
                                      <span class="text-body-secondary" data-sort="goal-progress">Путь</span>
                                    </th>
                                    <th scope="col">
                                      <span class="text-body-secondary" data-sort="goal-date">Дата</span>
                                    </th>
                                    <th scope="col">Текст</th>
                                  </tr>
                                </thead>
                                <tbody class="list">
                                  <tr v-for="item in reviews" :key="item.ID">
                                    <td class="list-item" width="5%">{{ item.ID }}</td>
                                    <td class="list-item" width="5%">{{ item.Rate }}</td>
                                    <td class="list-item" width="5%">{{ item.Path }}</td>
                                    <td class="list-item" width="10%">{{ formatDate(item.CreatedAt) }}</td>
                                    <td class="list-item" width="75%">{{ item.Text }}</td>
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
import {api} from '@/boot/api'

export default {
    name: 'SiteItemView',
    data() {
        return {
            reviews: null
        }
    },
    components: {
        Navbar
    },
    computed: {
        site() {
            const id = this.$route.params.id
            return this.$store.state.sites?.find(site => site.ID == id)
        }
    },
    mounted() {
        const data = {
            site_id: Number(this.$route.params.id)
        };
        api.post('/admin/reviews', data, {
            headers: {
                "Accept": "/",
                "Cache-Control": "no-cache",
                'Cookie': document.cookie
            },
            withCredentials: true
        }).then(result => {
            this.reviews = result.data
        }) 
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString();
      }
    },
}
</script>