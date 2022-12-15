<template>
    <div id="linkButton">
        <router-link to="/create">
          <font-awesome-icon icon="plus"/>
          <span>Créer un quizz</span>
        </router-link>
        <router-link to="/collection">
          <font-awesome-icon icon="rectangle-list"/>
          <span>Voir vos quizz</span>
        </router-link>
    </div>
    <div class="home">
      <ul v-for="quizz in quizzs" :key="quizz.name">
          <li>
              <router-link to="/question/:quizz.name">
                {{ quizz.name }}
                {{ quizz.description }}
              </router-link>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
data() {
    return {
        quizzs: []
    }
},
async created() {
    const response = await fetch("/quizz");
    this.quizz = await response.json();
}
}
</script>

<style scoped>
#linkButton > a {
    background-color: hsl(0, 0%, 98%);
    color: #414141;
    text-decoration: none;
    padding: 1% 2%;
    margin: 2% 4%;
    border-radius: 40px;
    transition: .5s;
}
#linkButton > a:hover {
    transition: .5s;
    background-color: #42b983;
}
#linkButton > a > svg {
    margin-right: 1%;
}
ul {
    list-style-type: none;
    padding: 0;
}
ul > li {
    display: inline-block;
    margin: 5px;
    border: 2px solid #414141;
    border-radius: 10px;
    box-shadow: 1px 1px 1px #414141;
}
ul > li > a {
    display: flex;
    position: relative;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 110px;
    text-decoration: none;
    color: #414141;
}
</style>