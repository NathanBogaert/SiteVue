<template>
    <div class="questions">
            <div>
                <label for="question">Question</label>
                <input type="text" name="question" id="question">
            </div>
            <div>
                <label for="choix">Choix</label>
                <input type="text" name="choix" id="choix">
            </div>
            <div>
                <label for="choix">Choix</label>
                <input type="text" name="choix" id="choix">
            </div>
            <div>
                <label for="response">Réponse</label>
                <input type="text" name="response" id="response">
            </div>
        </div>
</template>

<script>
export default {
  name: 'MyQuestion',
}
</script>

<style scoped>
.questions {
    width: auto;
    height: auto;
}
.questions > div {
    width: 300px;
    height: 30px;
    margin-bottom: 5px;
}
.questions > div > label {
    float: left;
}
.questions > div > input {
    float: right;
    width: 150px;
}
</style>