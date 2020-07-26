<template>
    <div id = "container-status">
        <b-card footer-tag="footer">
            <b-form-input v-model="status" @keyup.enter="addPublication()" placeholder="Escribe aqui tu estado"></b-form-input>
            <template v-slot:footer>
                <b-button variant="success" @click="addPublication()">Publicar</b-button>
            </template>
        </b-card>
    </div>
</template>
<script>

export default {
  name: 'Status',
  data: () => {
      return {
        status:''
      }
  },
  methods:{
      addPublication(){
        if(this.status.trim() != ''){
            const pub = {
                id:new Date().valueOf(),
                user:this.getRandomName(),
                date: new Date(),
                description:this.status.trim(),
                reactions:0,
                comments:[]
            };
            this.$store.commit('publish',pub);
            this.status = '';
        }
      },
      getRandomName(){
        const names = this.$store.getters.getNames;
        return names[Math.floor(Math.random() * names.length)];
      } 
  }
}
</script>

<style scoped lang="sass">
@import '../../styles/variables.scss';

#container-status
    ::placeholder
        color: $green;
        opacity: 1;
    

    :-ms-input-placeholder
        color: $green;
    

    ::-ms-input-placeholder
        color: $green;
    
    ::v-deep .card
        .card-body
            padding: 0rem
            input
                padding: 2rem 1rem;
                border-radius: 0rem;
                border: none;
        .card-footer
            padding: 0.45rem 0.45rem;
            background-color: $white
            button
                border-radius: 0.25rem;
                float: right;
                width: 8rem;
@media (max-width: $breakpoint-tablet)
    #container-status
        .buttons_publication
            display: grid !important;
        .card-footer
            display: none
</style>