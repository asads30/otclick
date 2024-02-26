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
                        <a href="#" class="text-body-secondary list-sort" data-sort="goal-project">Goal</a>
                      </th>
                      <th>
                        <a href="#" class="text-body-secondary list-sort" data-sort="goal-status">Status</a>
                      </th>
                      <th>
                        <a href="#" class="text-body-secondary list-sort" data-sort="goal-progress">Progress</a>
                      </th>
                      <th>
                        <a href="#" class="text-body-secondary list-sort" data-sort="goal-date">Due date</a>
                      </th>
                      <th class="text-end">Team</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody class="list">
                    <tr>
                      <td class="goal-project">
                        Update the API
                      </td>
                      <td class="goal-status">
                        <span class="text-warning">●</span> In progress
                      </td>
                      <td class="goal-progress">
                        55%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">07/24/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group">
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Daniela Dewitt">
                            <img src="@/assets/img/avatars/profiles/avatar-4.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Release v1.2-Beta
                      </td>
                      <td class="goal-status">
                        <span class="text-warning">●</span> In progress
                      </td>
                      <td class="goal-progress">
                        25%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">08/26/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        GDPR Compliance
                      </td>
                      <td class="goal-status">
                        <span class="text-success">●</span> Completed
                      </td>
                      <td class="goal-progress">
                        100%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">06/19/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        v1.2 Documentation
                      </td>
                      <td class="goal-status">
                        <span class="text-danger">●</span> Cancelled
                      </td>
                      <td class="goal-progress">
                        0%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">06/25/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="fe fe-more-vertical"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Plan design offsite
                      </td>
                      <td class="goal-status">
                        <span class="text-success">●</span> Completed
                      </td>
                      <td class="goal-progress">
                        100%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">06/30/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Daniela Dewitt">
                            <img src="@/assets/img/avatars/profiles/avatar-4.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Update the API
                      </td>
                      <td class="goal-status">
                        <span class="text-warning">●</span> In progress
                      </td>
                      <td class="goal-progress">
                        55%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">07/24/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group">
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Daniela Dewitt">
                            <img src="@/assets/img/avatars/profiles/avatar-4.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Release v1.2-Beta
                      </td>
                      <td class="goal-status">
                        <span class="text-warning">●</span> In progress
                      </td>
                      <td class="goal-progress">
                        25%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">08/26/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        GDPR Compliance
                      </td>
                      <td class="goal-status">
                        <span class="text-success">●</span> Completed
                      </td>
                      <td class="goal-progress">
                        100%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">06/19/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        v1.2 Documentation
                      </td>
                      <td class="goal-status">
                        <span class="text-danger">●</span> Cancelled
                      </td>
                      <td class="goal-progress">
                        0%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">06/25/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="fe fe-more-vertical"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Plan design offsite
                      </td>
                      <td class="goal-status">
                        <span class="text-success">●</span> Completed
                      </td>
                      <td class="goal-progress">
                        100%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">06/30/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Daniela Dewitt">
                            <img src="@/assets/img/avatars/profiles/avatar-4.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Update the API
                      </td>
                      <td class="goal-status">
                        <span class="text-warning">●</span> In progress
                      </td>
                      <td class="goal-progress">
                        55%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">07/24/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group">
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="profile-posts.html" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Daniela Dewitt">
                            <img src="@/assets/img/avatars/profiles/avatar-4.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="goal-project">
                        Release v1.2-Beta
                      </td>
                      <td class="goal-status">
                        <span class="text-warning">●</span> In progress
                      </td>
                      <td class="goal-progress">
                        25%
                      </td>
                      <td class="goal-date">
                        <time datetime="2018-10-24">08/26/18</time>
                      </td>
                      <td class="text-end">
                        <div class="avatar-group justify-content-end">
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Dianna Smiley">
                            <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Ab Hadley">
                            <img src="@/assets/img/avatars/profiles/avatar-2.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                          <a href="#!" class="avatar avatar-xs" data-bs-toggle="tooltip" title="Adolfo Hess">
                            <img src="@/assets/img/avatars/profiles/avatar-3.jpg" class="avatar-img rounded-circle" alt="...">
                          </a>
                        </div>
                      </td>
                      <td class="text-end">
                        <div class="dropdown">
                          <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a href="#!" class="dropdown-item">
                              Action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" class="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
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
  name: 'HomeView',
  components: {
    Navbar
  },
  mounted() {
    api.get('/admin/sites', {
      headers: {
        'Cookie': document.cookie
      },
      withCredentials: true
    }).then((result) => {
      this.$store.commit('setSites', result.data);
    }).catch((err) => {
      if(err.response.status == 403){
        api.post('/refresh', {
          headers: {
            'Cookie': document.cookie
          },
          withCredentials: true
        })
      }
      if(err.response.status == 401){
        localStorage.clear();
        sessionStorage.clear();
        this.$router.push('/login');
      }
    });
  },
}
</script>

<style lang="scss" scoped>
    .home{
        min-height: 100dvh;
    }
</style>