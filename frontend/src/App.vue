<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home"/>
          <span>Accueil</span>
        </router-link>
      </li>
      <li>
        <router-link to="/collection">
          <font-awesome-icon icon="rectangle-list" />
          <span>Mes quizz</span>
        </router-link>
      </li>
      <li>
        <router-link to="/create">
          <font-awesome-icon icon="plus" />
          <span>Créer quizz</span>
        </router-link>
      </li>
      <li>
        <router-link to="/account">
          <font-awesome-icon icon="user" />
          <span>Compte</span>
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
  margin-top: 80px;
}

nav {
  display: flex;
  position: fixed;
  background-color: hsl(0, 0%, 98%);
  top: 0;
  left: 0;
  height: 50px;
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
  width: 100px;
  height: 100%;
  text-decoration: none;
  color: #414141;
}

nav > ul > li > a > svg {
  position: relative;
  transition: .5s;
}

nav > ul > li > a > span {
  position: absolute;
  width: 100px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: .9em;
  letter-spacing: .02em;
  opacity: 0;
  transition: .5s;
}

nav > ul > li > a:hover > svg {
  transform: translateY(-60%);
}

nav > ul > li > a:hover > span {
  transform: translateY(60%);
  opacity: 1;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active::after {
  background: #42b983;
}
</style>
