<template>
    <form>
        <div>
            <label for="name">Nom du quizz</label>
            <input v-model="quizzToAdd.name" type="text" name="name" id="name">
        </div>
        <div>
            <label for="description">Description</label>
            <textarea v-model="quizzToAdd.description" name="description" id="description" cols="20" rows="10"></textarea>
        </div>
        <div>
            <button type="submit">Créer</button>
        </div>
    </form>
</template>

<script>
export default {
  name: 'MyQuizz',
  data() {
    return {
        quizz: [],
        quizzToAdd: {
            name: "",
            description: "",
        }
    }
  },
  methods: {
    async postQuizz() {
        await fetch("/create", {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(this.quizzToAdd),
        });
        await this.fetchQuizz();
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