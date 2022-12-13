<template>
    <ul v-for="quizz in quizzs" :key="quizz.name">
        <li>
            {{ quizz.name }}
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
  }
}
</script>

<style scoped>
</style>