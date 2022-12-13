<template>
    <form>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <div>
            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo" id="pseudo">
        </div>
        <div>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password">
        </div>
        <div>
            <button type="submit">Confirmer les changements</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'LogIn',
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
button {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 5px;
}
</style>