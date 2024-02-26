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
                                    <th>
                                      <a href="#" class="text-body-secondary list-sort" data-sort="goal-project">ID</a>
                                    </th>
                                    <th>
                                      <a href="#" class="text-body-secondary list-sort" data-sort="goal-status">Текст</a>
                                    </th>
                                    <th>
                                      <a href="#" class="text-body-secondary list-sort" data-sort="goal-progress">Рейтинг</a>
                                    </th>
                                    <th>
                                      <a href="#" class="text-body-secondary list-sort" data-sort="goal-date">Путь</a>
                                    </th>
                                    <th>Дата</th>
                                  </tr>
                                </thead>
                                <tbody class="list">
                                  <tr v-for="item in reviews" :key="item.ID">
                                    <td class="list-item">{{ item.ID }}</td>
                                    <td class="list-item">{{ item.Text }}</td>
                                    <td class="list-item">{{ item.Rate }}</td>
                                    <td class="list-item">
                                        {{ item.Path }}
                                    </td>
                                    <td class="list-item">
                                      {{ item.CreatedAt }}
                                    </td>
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
}
</script>