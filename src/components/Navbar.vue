<template>
    <div data-bs-theme="">
        <nav class="navbar navbar-vertical fixed-start navbar-expand-md" id="sidebar">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/" class="navbar-brand">
                    <img src="@/assets/img/logo.svg" class="navbar-brand-img mx-auto" alt="...">
                </router-link>
                <div class="navbar-user d-md-none">
                    <div class="dropdown">
                        <a href="#" id="sidebarIcon" class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="avatar avatar-sm avatar-online">
                                <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="...">
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarIcon">
                            <router-link to="/profile" class="dropdown-item">Настройки профиля</router-link>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">Выйти</a>
                        </div>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="sidebarCollapse">
                    <form class="mt-4 mb-3 d-md-none">
                        <div class="input-group input-group-rounded input-group-merge input-group-reverse">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                            <div class="input-group-text">
                                <span class="fe fe-search"></span>
                            </div>
                        </div>
                    </form>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">
                                <i class="fe fe-home"></i> Панель управления
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#sidebarPages" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
                                <i class="fe fe-file"></i> Сайты
                            </a>
                            <div class="collapse " id="sidebarPages">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item" v-for="item in getSites" :key="item.ID">
                                        <router-link :to="'/site/' + item.ID" class="nav-link ">
                                            {{ item.Domains[0].Domain }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link to="/confirmsite" class="nav-link">
                                <i class="fe fe-help-circle"></i> Как подключить?
                            </router-link>
                        </li>
                    </ul>
                    <div class="mt-auto"></div>
                    <div class="addsite pb-3">
                        <router-link to="/addsite" class="btn btn-primary w-100">Добавить сайт</router-link>
                    </div>
                    <div class="navbar-user d-none d-md-flex" id="sidebarUser">
                        <div class="dropup">
                            <a href="#" id="sidebarIconCopy" class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="avatar avatar-sm avatar-online">
                                    <img src="@/assets/img/user.png" class="avatar-img rounded-circle" alt="...">
                                </div>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
                                <router-link to="/profile" class="dropdown-item">Настройки профиля</router-link>
                                <hr class="dropdown-divider">
                                <button type="button" @click="logout" class="dropdown-item">Выйти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {api} from '@/boot/api'

export default {
    name: 'Navbar',
    mounted() {
        api.get('/user-admin/sites', {
            headers: {
                'Cookie': document.cookie
            },
            withCredentials: true
        }).then((result) => {
            this.$store.commit('setSites', result.data);
        }).catch((err) => {
            if(err.response.status == 403){
                localStorage.clear();
                sessionStorage.clear();
                this.$router.push('/login');
            }
            if(err.response.status == 401){
                localStorage.clear();
                sessionStorage.clear();
                this.$router.push('/login');
            }
        });
    },
    computed: {
        ...mapGetters([
            'getSites'
        ])
    },
    methods: {
        logout(){
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push('/login');
        }
    },
}
</script>