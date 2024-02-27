<template>
  <router-view/>
</template>

<script>
import {api} from '@/boot/api'

export default {
  name: 'App',
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
}
</script>