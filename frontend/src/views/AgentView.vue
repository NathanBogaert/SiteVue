<template>
    <div>
        <router-link to="/"><img class="operators" src="../assets/1.png"></router-link>
    </div>
</template>

<style scoped>
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