<template>
    <div>
        <router-link to="/"><img class="operators" src="../assets/1.png"></router-link>
    </div>
</template>

<style scoped>
.operators{
    max-height: 23vh;
    border: 1px solid #2c2c2c;
}

.operators:hover {
    max-height: 33vh;
    transition: max-height 1s;
}
</style>