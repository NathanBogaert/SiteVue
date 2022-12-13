<template>
    <form>
        <div>
            <label for="name">Nom du quizz</label>
            <input type="text" name="name" id="name">
        </div>
        <MyQuestion id="question1"/>
        <div id="buttonAdd">
            <button type="button">Ajouter une autre question</button>
        </div>
        <div>
            <button type="submit">Confirmer</button>
        </div>
    </form>
</template>

<script>
import MyQuestion from '@/components/Question.vue'

export default {
  name: 'QuestionView',
  components: {
    MyQuestion
  },
}
</script>

<style scoped>
form {
    width: max-content;
    margin: auto;
}
div {
    width: 300px;
    height: 30px;
    margin-bottom: 5px;
}
label {
    float: left;
}
input {
    float: right;
    width: 150px;
}
button {
    padding: 5px;
    margin-top: 5px;
}
</style>