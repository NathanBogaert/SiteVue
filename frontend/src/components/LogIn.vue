<template>
    <form v-for="account in accounts" :key="account.email">
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" value="{{account.email}}">
        </div>
        <div>
            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo" id="pseudo" value="{{account.pseudo}}">
        </div>
        <div>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" value="{{account.password}}">
        </div>
        <div>
            <button type="submit">Confirmer les changements</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            accounts: [],
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
</style>