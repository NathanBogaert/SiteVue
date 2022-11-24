<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home"/>
        </router-link>
      </li>
      <li>
        <router-link to="/operators">
          <font-awesome-icon icon="users"/>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="ellipsis"/>
        </router-link>
      </li>
    </ul>
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
  margin-top: 10vh;
}

nav {
  display: flex;
  position: fixed;
  background-color: hsl(0, 0%, 98%);
  top: 0;
  left: 0;
  height: 6vh;
  width: 100%;
  box-shadow: inset 0px -1px 0px #c5c5c6;
  align-items: center;
}

nav > ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
}

nav > ul > li {
  display: inline-block;
  width: auto;
}

nav > ul > li > a {
  display: flex;
  position: relative;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 4vh;
  height: 4vh;
  text-decoration: none;
  color: #414141;
  margin: 0 20px;
}

nav > ul > li > a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 1px;
  transform-origin: left;
  transform: scaleX(0);
  background: #333;
  transition: transform 0.3s ease-out;
}

nav > ul > li > a:hover::after {
  transform: scaleX(1);
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active::after {
  background: #42b983;
}
</style>
