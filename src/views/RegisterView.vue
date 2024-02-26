<template>
    <div class="register d-flex align-items-center bg-auth border-top border-top-2 border-primary">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-xl-4 my-5">
                    <h1 class="display-4 text-center mb-3">Регистрация</h1>
                    <form>
                        <div class="form-group">
                            <label class="form-label">Логин</label>
                            <input type="text" class="form-control" placeholder="Введите логин" v-model="username">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Пароль</label>
                            <div class="input-group input-group-merge">
                                <input class="form-control" type="password" placeholder="Введите пароль" v-model="password">
                            </div>
                        </div>
                        <button class="btn btn-lg w-100 btn-primary mb-3" @click="register" type="button">Регистрация</button>
                        <div class="text-center">
                            <small class="text-body-secondary text-center">У вас есть аккаунт? <router-link to="/login">Войти</router-link>.</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import {api} from '@/boot/api'
import {getCookie} from '@/boot/utils'

export default {
    name: 'Register',
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        register(){
            const data = {
                username: this.username,
                password: this.password
            }
            api.post('register', data).then(res => {
                if(res.status == 201){
                    api.post('login', data, {withCredentials: true}).then(response => {
                        try {
                            const token = getCookie('access_token');
                            this.$store.commit('setToken', token);
                            localStorage.setItem('token', token);
                            this.$router.push('/')
                        } catch (error) {
                            console.log(error)
                        }
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        }
    },
  }
  </script>
  
  <style lang="scss" scoped>
      .register{
          min-height: 100dvh;
      }
  </style>