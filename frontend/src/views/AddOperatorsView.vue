<template>
    <form>
        <div>
            <label for="name">Nom</label>
            <input type="text">
        </div>
        <div>
            <label for="side">Type</label>
            <input type="text">
        </div>
        <div>
            <label for="abilities">Capacité</label>
            <input type="text">
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
}</style>