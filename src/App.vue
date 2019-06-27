<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <ops-breadcrumb-nav></ops-breadcrumb-nav>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>


  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-breadcrumb__item{
  line-height: 40px;
}
</style>
