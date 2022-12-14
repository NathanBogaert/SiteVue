<template>
    <form>
        <div>
            <label for="question">Question</label>
            <input v-model="questionToAdd.question" type="text" name="question" id="question" class="myInput" maxlength="200">
        </div>
        <div>
            <label for="response1">Réponse 1</label>
            <input v-model="questionToAdd.response1" type="text" name="response1" id="response1" class="myInput" maxlength="200"/>
        </div>
        <div>
            <label for="response2">Réponse 2</label>
            <input v-model="questionToAdd.response2" type="text" name="response2" id="response2" class="myInput" maxlength="200"/>
        </div>
        <div>
            <label for="response3">Réponse 3</label>
            <input v-model="questionToAdd.response3" type="text" name="response3" id="response3" class="myInput" maxlength="200"/>
        </div>
        <div>
            <label for="response4">Réponse 4</label>
            <input v-model="questionToAdd.response4" type="text" name="response4" id="response4" class="myInput" maxlength="200"/>
        </div>
        <fieldset>
            <legend>Choix de la bonne réponse</legend>
            <div>
                <label for="trueResponse">{{ questionToAdd.response1 }}</label>
                <input v-model="questionToAdd.trueReponse" type="radio" name="trueResponse" id="trueResponse1" class="inputTrueResponse">
            </div>
            <div>
                <label for="trueResponse">{{ questionToAdd.response2 }}</label>
                <input v-model="questionToAdd.trueReponse" type="radio" name="trueResponse" id="trueResponse2" class="inputTrueResponse">
            </div>
            <div>
                <label for="trueResponse">{{ questionToAdd.response3 }}</label>
                <input v-model="questionToAdd.trueReponse" type="radio" name="trueResponse" id="trueResponse3" class="inputTrueResponse">
            </div>
            <div>
                <label for="trueResponse">{{ questionToAdd.response4 }}</label>
                <input v-model="questionToAdd.trueReponse" type="radio" name="trueResponse" id="trueResponse4" class="inputTrueResponse">
            </div>
        </fieldset>
        <div>
            <button type="submit">Ajouter la question</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            questions: [],
            questionToAdd: {
                question: "",
                response1: "",
                response2: "",
                response3: "",
                response4: "",
                trueReponse: "",
            }
        }
    },
    methods: {
        async postQuestion() {
            await fetch("/question", {
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