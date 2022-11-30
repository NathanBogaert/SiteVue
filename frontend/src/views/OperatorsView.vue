<template>
    <div id="side">
        <button>Attackers</button>
        <button>Defenders</button>
    </div>
    <div>
        <router-link to="/"><img class="operators attackers" src="../assets/1.png"></router-link>
    </div>
</template>

<style scoped>
#side {
    margin-bottom: 25px;
}

button {
    text-transform: uppercase;
    background: #414141;
    border: 1px solid white;
}

.operators{
    width: 90px;
    height: 150px;
    border: 1px solid #2c2c2c;
    transition: width .5s, height .5s;
}
.operators:hover {
    width: 144px;
    height: 240px;
    transition: width .5s, height .5s;
}
</style>