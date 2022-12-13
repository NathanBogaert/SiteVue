<template>
  <div class="home">
    <Showquizz/>
  </div>
</template>

<script>
// @ is an alias to /src
import Showquizz from '@/components/ShowQuizz.vue'

export default {
  name: 'ShowQuizz',
  components: {
    Showquizz
  }
}
</script>
