<template>
    <form>
        <div>
            <label for="name">Nom du quizz</label>
            <input v-model="quizzToAdd.name" type="text" name="name" id="name" maxlength="150">
        </div>
        <div>
            <label for="description">Description</label>
            <textarea v-model="quizzToAdd.description" name="description" id="description" cols="20" rows="10" maxlength="300"></textarea>
        </div>
        <MyQuestions/>
        <div>
            <router-link to="/addQuestion">Ajouter une question</router-link>
        </div>
    </form>
</template>

<script>
import MyQuestions from '@/components/ShowQuestion.vue'

export default {
    name: 'ShowQuestion',
    components: {
        MyQuestions
    },
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
input {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    box-sizing: border-box;
}
textarea {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    box-sizing: border-box;
    resize: none;
}
button {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 5px;
}
</style>