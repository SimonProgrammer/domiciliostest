<template>
    <section class = "container-comments">
        <article v-for="(item,index) in comments" 
                :key="index">
                <b-card img-src="https://fearless.li/wp-content/uploads/sites/1/2019/12/User1.svg" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <span class = "card-title">{{item.user}}</span>  {{item.description}}
                    </b-card-text>
                    <h6 class = "card-subtitle text-muted mb-2">{{parsingDate(item.date)}}</h6>
                </b-card>
        </article>
        <b-form-input v-model="text" placeholder="Escribe un comentario" @keyup.enter="addComment()"></b-form-input>
    </section>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Comments',
  data:() => {
      return {
          title:'Domicilios test',
          name:'Juan',
          text:''
      };
  },
  props: {
    comments: Array,
    id: Number
  },
  methods:{
      parsingDate(date){
          return moment(date).locale("es").fromNow(); 
      },
      addComment(){
        if(this.text.trim() != ''){
            const comment = {
                id_publication:this.id,
                user:this.getRandomName(),
                description:this.text.trim(),
                date: new Date()
            };
            this.$store.commit('addComment',comment);
            this.text = '';
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
.container-comments
    padding: 1.5rem 1rem;
    .card
        background-color: transparent;
        border: none;
        margin-bottom: 0rem !important
        display: grid;
        grid-template-columns: 10% 90%;
        img
            width: 80%;
            margin: 1.5rem auto 0rem 0rem;
            max-width: 5rem;
        .card-body
            .card-title
                font-weight: bold;
                color: $green; 
            .card-subtitle
                font-size: 0.8rem
            .card-text
                margin-top: 1rem;
                margin-bottom: 0.2rem;
            .card-link
                color: $green;
    input
        padding: 1.5rem
        margin-top: 1.5rem
@media (max-width: $breakpoint-tablet)
    .container-comments
        .card
            grid-template-columns: 20% 80% !important; 
@media (max-width: $breakpoint-phone)
    .container-comments
        .card
            grid-template-columns: 30% 70% !important; 
</style>