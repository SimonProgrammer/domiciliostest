<template>
    <section>
        <header-app></header-app>
        <body-app></body-app>
    </section>
</template>

<script>
import Header from './sections/Header.vue';
import Body from './sections/Body.vue';
export default {
  name: 'Dashboard',
  components: {
    'header-app':Header,
    'body-app': Body
  }
}
</script>

<style scoped lang="sass">

</style>