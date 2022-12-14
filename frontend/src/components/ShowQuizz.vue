<template>
    <ul v-for="quizz in quizzs" :key="quizz.name">
        <li>
            <router-link to="/question">
              {{ quizz.name }}
              {{ quizz.description }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'ShowQuizz',
  data() {
    return {
        quizzs: []
    }
  },
  async created() {
    const response = await fetch("/quizz");
    this.quizz = await response.json();
  },
  async getQuizz() {
    await fetch("/quizz", {
      headers: {
          "Content-type": "application/json",
      },
      method: "GET",
      body: JSON.stringify(this.quizzToAdd),
    });
    await this.fetchQuizz();
  }
}
</script>

<style scoped>
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