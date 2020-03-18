<template>
  <div class="hello">
    <router-link to="/skeleton">
      {{msg}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is a Detail page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
