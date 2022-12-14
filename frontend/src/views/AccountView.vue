<template>
    <template v-if="counter === 0">
        <form id="inscription">
            <div>
                <label for="email">Email</label>
                <input v-model="accountToAdd.email" type="email" name="email" id="email">
            </div>
            <div>
                <label for="pseudo">Pseudo</label>
                <input v-model="accountToAdd.pseudo" type="text" name="pseudo" id="pseudo">
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input v-model="accountToAdd.password" type="password" name="password" id="password">
            </div>
            <div>
                <button v-on:click="counter=1" type="submit">S'inscrire</button>
            </div>
        </form>
        <form id="connexion">
            <div>
                <label for="pseudo">Pseudo</label>
                <input v-model="accountToAdd.pseudo" type="text" name="pseudo" id="pseudo">
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input v-model="accountToAdd.password" type="password" name="password" id="password">
            </div>
            <div>
                <button v-on:click="counter=1" type="submit">Se connecter</button>
            </div>
        </form>
    </template>
    <template v-else>
        <form id="connected">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="accountToAdd.email">
            </div>
            <div>
                <label for="pseudo">Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" v-model="accountToAdd.pseudo">
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input type="password" name="password" id="password" v-model="accountToAdd.password">
            </div>
            <div>
                <button type="submit">Confirmer les changements</button>
            </div>
        </form>
    </template>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            account: [],
            accountToAdd: {
                email: "",
                pseudo: "",
                password: "",   
            }
        }
    },
    async createdAccount() {
        const response = await fetch("/account");
        this.account = await response.json();
    },
    methods: {
        async postAccount() {
            await fetch("/account", {
                headers: {
                    "Content-type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(this.accountToAdd),
            });
            await this.fetchAccounts();
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
button {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 5px;
}
#connexion {
    margin-top: 3%;
}
</style>