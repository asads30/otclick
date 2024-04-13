<template>
  <div class="login d-flex align-items-center bg-auth border-top border-top-2 border-primary">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <h1 class="display-4 text-center mb-3">Вход</h1>
          <form>
            <div class="form-group">
              <label class="form-label">Логин</label>
              <input type="text" class="form-control" placeholder="Введите логин" v-model="username">
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label class="form-label">Пароль</label>
                </div>
                <div class="col-auto">
                  <a href="#" class="form-text small text-body-secondary">Забыли пароль?</a>
                </div>
              </div>
              <div class="input-group input-group-merge">
                <input class="form-control" type="password" placeholder="Введите пароль" v-model="password">
              </div>
            </div>
            <button class="btn btn-lg w-100 btn-primary mb-3" @click="login" type="button">Войти</button>
            <div class="text-center">
              <small class="text-body-secondary text-center">
                Еще не зарегистрированы? <router-link to="/register">Зарегистрироваться</router-link>.
              </small>
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
    name: 'Login',
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login(){
            const data = {
                username: this.username,
                password: this.password
            }
            api.post('login', data, {
              withCredentials: true
            }).then(response => {
              try {
                const token = getCookie('access_token');
                this.$store.commit('setToken', token);
                localStorage.setItem('token', token);
              } catch (error) {
                console.log(error)
              }
              this.$router.push('/')
            }).catch(err => {
                console.log(err)
            })
        }
    },
  }
  </script>

<style lang="scss" scoped>
    .login{
        min-height: 100dvh;
    }
</style>