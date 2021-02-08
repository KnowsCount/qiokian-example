<!--
 * @Date: 08/02/2021 11.14.43 +0800
 * @Author: KnowsCount
 * @LastEditTime: 08/02/2021 11.55.17 +0800
 * @FilePath: /qiokian/src/App.vue
-->
<template>
  <div id="app">
    <img class="Rotation" src="./assets/logo.png" width="250" height="250">
    <h1><a href="https://github.com/KnowsCount/qiokian">qiokian</a> {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'is an ACGN 3D guidance Vuejs component. '
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

@-webkit-keyframes rotation{
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(360deg);}
}

@keyframes rotation{
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}

.Rotation{
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  animation: rotation 10s linear infinite;
  -moz-animation: rotation 10s linear infinite;
  -webkit-animation: rotation 10s linear infinite;
  -o-animation: rotation 10s linear infinite;
}

a {
  color: darkgreen;
}
</style>
