<template>
    <form v-for="question in questions" :key="question.question">
        <div>
            <label for="question">Question</label>
            <input v-model="question.question" type="text" name="question" id="question" class="myInput" maxlength="200">
        </div>
        <div>
            <label for="response1">Réponse 1</label>
            <input v-model="question.response1" type="text" name="response1" id="response1" class="myInput" maxlength="200"/>
        </div>
        <div>
            <label for="response2">Réponse 2</label>
            <input v-model="question.response2" type="text" name="response2" id="response2" class="myInput" maxlength="200"/>
        </div>
        <div>
            <label for="response3">Réponse 3</label>
            <input v-model="question.response3" type="text" name="response3" id="response3" class="myInput" maxlength="200"/>
        </div>
        <div>
            <label for="response4">Réponse 4</label>
            <input v-model="question.response4" type="text" name="response4" id="response4" class="myInput" maxlength="200"/>
        </div>
        <fieldset>
            <legend>Choix de la bonne réponse</legend>
            <div>
                <label for="trueResponse">{{ question.response1 }}</label>
                <input v-model="question.trueReponse" type="radio" name="trueResponse" id="trueResponse1" class="inputTrueResponse">
            </div>
            <div>
                <label for="trueResponse">{{ question.response2 }}</label>
                <input v-model="question.trueReponse" type="radio" name="trueResponse" id="trueResponse2" class="inputTrueResponse">
            </div>
            <div>
                <label for="trueResponse">{{ question.response3 }}</label>
                <input v-model="question.trueReponse" type="radio" name="trueResponse" id="trueResponse3" class="inputTrueResponse">
            </div>
            <div>
                <label for="trueResponse">{{ question.response4 }}</label>
                <input v-model="question.trueReponse" type="radio" name="trueResponse" id="trueResponse4" class="inputTrueResponse">
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'ShowQuestion',
    data() {
        return {
            questions: []
        }
    },
    async created() {
        const response = await fetch("/question");
        this.question = await response.json();
    },
    async getQuestion() {
        await fetch("/question", {
            headers: {
                "Content-type": "application/json",
            },
            method: "GET",
            body: JSON.stringify(this.questionToAdd),
        });
        await this.fetchQuestion();
    }
}
</script>

<style scoped>
form {
    width: 60%;
    margin: auto;
}
div {
    width: 100%;
    height: auto;
    margin: 5px;
}
label {
    font-size: .95em;
    float: left;
}
.myInput {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    box-sizing: border-box;
}
.inputTrueResponse {
    display: grid;
    margin-right: 5%;
    float: left;
    width: auto;
}
button {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 5px;
}
</style>