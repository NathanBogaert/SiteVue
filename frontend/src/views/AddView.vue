<template>
    <form>
        <div>
            <label for="name">Nom du quizz</label>
            <input type="text" name="name" id="name">
        </div>
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
        <div>
            <button type="button">Ajouter une autre question</button>
        </div>
        <div>
            <button type="submit">Confirmer</button>
        </div>
    </form>
</template>

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