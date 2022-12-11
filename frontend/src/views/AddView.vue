<template>
    <form>
        <div>
            <label for="name">Nom du quizz</label>
            <input type="text" name="name" id="name">
        </div>
        <MyQuestion/>
        <div id="buttonAdd">
            <button onclick="addQuestion()">Ajouter une autre question</button>
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
  }
}

function addQuestion() {
    let buttonAdd = document.getElementById("buttonAdd");
    let newQuestion = document.createElement("MyQuestion");
    document.body.insertBefore(newQuestion, buttonAdd);
}
</script>

<style scoped>
form {
    width: 400px;
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
    width: 100px;
    height: 20px;
}
</style>