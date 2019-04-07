<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-inverse bg-inverse">
      <a class="navbar-brand" href="#">{{msg}}</a>
      <button class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav">
          <router-link :to="{path: '/'}" exact>Home</router-link>
          <router-link :to="{path: '/rocket'}" exact>Rocket</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.router-link-active {
  background: #D9D9D9;
}
</style>
