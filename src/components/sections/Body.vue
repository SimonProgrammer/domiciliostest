<template>
    <section id = "body">
        <feed-app></feed-app>
    </section>
</template>
<script>
import Feed from '../elements/Feed.vue';
export default {
  name: 'Body',
  components: {
    'feed-app':Feed,
  }
}
</script>

<style scoped lang="sass">
@import '../../styles/variables.scss';

section#body
  padding: 2rem 0rem;
  background-color: $gray-wallpaper;
  min-height: $height_body;
</style>