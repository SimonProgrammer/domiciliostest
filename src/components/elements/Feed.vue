<template>
    <section class = "container-feed">
        <status></status>
        <div id="container-publications">
            <publication 
                v-for="(pub,index) in publications" 
                :key="index"
                :item = pub>
            </publication>
        </div>
    </section>
</template>
<script>
import Status from './Status.vue';
import Publication from './Publication.vue';

export default {
  name: 'Status',
  data: () => {
      return {
          
      }
  },
  components:{
    'status':Status,
    'publication':Publication
  },
  computed:{
    publications(){
        return this.$store.state.publications;
        
    }
  }
}
</script>

<style scoped lang="sass">
@import '../../styles/variables.scss';

section.container-feed
    background-color: $gray-wallpaper;
    width: 80%
    margin: 4rem auto auto
    #container-publications
        margin-top: 1rem
@media (max-width: $breakpoint-tablet)
    section.container-feed
        width: 85%

@media (max-width: $breakpoint-phone)
    section.container-feed
        width: 90%
</style>