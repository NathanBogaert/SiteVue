<template>
    <form class="questions">
        <div>
            <label for="question">Question</label>
            <input v-model="questionToAdd.question" type="text" name="question" id="question">
        </div>
        <div>
            <label for="choix">Choix 1</label>
            <input v-model="questionToAdd.choix1" type="text" name="choix1" id="choix1">
        </div>
        <div>
            <label for="choix">Choix 2</label>
            <input v-model="questionToAdd.choix2" type="text" name="choix2" id="choix2">
        </div>
        <div>
            <label for="choix">Choix 3</label>
            <input v-model="questionToAdd.choix3" type="text" name="choix3" id="choix3">
        </div>
        <div>
            <label for="choix">Choix 4</label>
            <input v-model="questionToAdd.choix4" type="text" name="choix4" id="choix4">
        </div>
        <fieldset>
            <legend>Réponse</legend>
            <label for="response">
                <input v-model="questionToAdd.response" type="radio" name="response" id="response1">
                Choix 1
                <input v-model="questionToAdd.response" type="radio" name="response" id="response2">
                Choix 2
                <br/>
                <input v-model="questionToAdd.response" type="radio" name="response" id="response3">
                Choix 3
                <input v-model="questionToAdd.response" type="radio" name="response" id="response4">
                Choix 4
            </label>
        </fieldset>
    </form>
</template>

<script>
export default {
  name: 'MyQuestion',
  data() {
    return {
        questions: [],
        questionToAdd: {
            question: "",
            choix1: "",
            choix2: "",
            choix3: "",
            choix4: "",
            response: ""
        }
    }
  },
  methods: {
    async postQuestion() {
        await fetch("/quizz", {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(this.questionToAdd),
        });
        await this.fetchQuestions();
    }
  }
}
</script>

<style scoped>
.questions {
    width: 60%;
    margin: auto;
}
.questions > div {
    width: 100%;
    height: auto;
    margin: 5px;
}
.questions > div > label {
    font-size: .95em;
    float: left;
}
.questions > div > input {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    box-sizing: border-box;
}
.questions > fieldset {
    width: 100%;
}
</style>