<template>
  <nav>
    <router-link to="/"><font-awesome-icon icon="home"/></router-link>
    <router-link to="/operators"><font-awesome-icon icon="user"/></router-link>
    <router-link to="/about"><font-awesome-icon icon="ellipsis"/></router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 7vh;
}

nav {
  position: fixed;
  top: 0px;
  left: 0px;
  min-width: 100%;
  min-height: 5vh;
  max-height: 5vh;
  box-shadow: 0px 1px 2px black;
  background-color: white;
}

nav a {
  display: inline-flex;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  min-width: 5vh;
  min-height: 5vh;
  margin-left: 2vh;
  margin-right: 2vh;
}

nav a:hover {
  background-color: #EFEFEF;
  border-radius: 25%;
  transition: background-color 0.6s;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
