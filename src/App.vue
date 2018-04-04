<template>
  <div id="app">
    <header>
      <h1>Лучший цитатник рецптов</h1>
      <nav>
        <router-link :to="'/'">Главная</router-link>
        <router-link :to="'add'">Добавить новый рецепт</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    padding: 0px;
    margin: 0px;
    background-color: #353B3F;
    font-family: "Roboto", sans-serif;
  }
  header {
    text-align: justify;
    padding: 2em 5%;
    background: #bac5cf;
    color: #fff;
    position: relative;
    z-index: 100;
  }

  header::after {
    content: '';
    display: inline-block;
    width: 100%;
  }

  header h1,
  header nav {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }

  header h1 {
    width: 50%;
    padding-top: 0.5em;
  }

  header nav {
    padding-top: 1em;
  }


</style>
