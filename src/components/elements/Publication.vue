<template>
    <div id = "container-publication">
        <b-card footer-tag="footer" img-src="https://fearless.li/wp-content/uploads/sites/1/2019/12/User1.svg" img-alt="Card image" img-left class="mb-3" :title="item.user" :sub-title="parsingDate(item.date)">
            <b-card-text>
                {{item.description}}
            </b-card-text>

            <b-link class="card-link hidden_link" @click = "addReaction(item.id)">Reaccionar</b-link>
            <b-link class="card-link hidden_link" @click = "showComments()">Comentar</b-link>
            <template v-slot:footer>
                <section class="row_footer">
                    <div :class="conditionReactions(item.reactions)">
                        <article class="circle">
                            <b-icon-circle-fill font-scale="1.5" variant="info"></b-icon-circle-fill>
                            <b-icon-circle-fill font-scale="1.5" variant="danger"></b-icon-circle-fill>
                            <b-icon-circle-fill font-scale="1.5" variant="warning"></b-icon-circle-fill>
                        </article>
                        <span>{{item.reactions}}</span>
                    </div>
                    <div>{{ item.comments.length + `${item.comments.length == 1 ? ' comentario' : ' comentarios'}` }}</div>
                </section>
            </template>
        </b-card>
        <div class="buttons_publication">
            <article>
                <a @click = "addReaction(item.id)">Reacciona</a>
            </article>
            <article>
                <a @click = "showComments()">Comentar</a>
            </article>
        </div>
        <comments 
            v-if = "item.comments.length > 0 || hasComment"
            :comments = "item.comments"
            :id = "item.id">
        </comments>
    </div>
</template>
<script>
import moment from 'moment';
import Comments from './Comments.vue';
export default {
  props: {
    item: Object
  },
  name: 'Publication',
  data: () => {
      return {
          status:'',
          hasComment:false
      }
  },
  created(){
    
  },
  components:{
      'comments':Comments
  },
  methods:{
      parsingDate(date){
          return moment(date).locale("es").fromNow(); 
      },
      conditionReactions(size){
        if(size < 5){
            return 'circle_first';
        }
        else if(size >= 5 && size < 10){
            return 'circle_second';
        }
        else{
            return 'circle_third';
        }
      },
      addReaction(id){
        this.$store.commit('react',id);
      },
      showComments(){
        this.hasComment = true;
      }
  }
}
</script>

<style scoped lang="sass">
@import '../../styles/variables.scss';

#container-publication
    margin-top: 2rem;
    -webkit-box-shadow: $shadow;
    -moz-box-shadow: $shadow;
    box-shadow: $shadow;
    .card
        margin-bottom: 0rem !important
        display: grid;
        grid-template-columns: 10% 90%;
        img
            width: 80%;
            margin: 1rem auto 0rem 1rem;
            max-width: 5rem;
        .card-body
            .card-title
                font-weight: bold;
                color: $green; 
                margin-bottom: 0.2rem;
            .card-subtitle
                font-size: 0.8rem
            .card-text
                margin-top: 1rem;
            .card-link
                color: $green;
        .card-footer
            background-color: $white;
            grid-column-start: 1;
            grid-column-end: 3;        
            .row_footer
                display: flex;
                justify-content: space-between;
                align-items: center;
                div:nth-child(1)
                    width: 5%;
                    display: flex;
                    justify-content: space-between;
                    .circle
                        .b-icon:nth-child(2)
                            position: absolute;
                            left: 2rem;
                            z-index: 1;
                            display: none;
                        .b-icon:nth-child(3)
                            position: absolute;
                            left: 3rem;
                            z-index: 2;
                            display: none;
                        .b-icon:nth-child(n+1)
                            border: 2px solid white;
                            border-radius: 50%;
                    &.circle_second
                        width: 7%;
                        .circle
                            .b-icon:nth-child(2)
                                display: inline-block !important;
                    &.circle_third
                        width: 10%;
                        .circle
                            .b-icon:nth-child(n+1)
                                display: inline-block !important;
                    span
                        color: $green;
    .buttons_publication
        width: 100%;
        grid-template-columns: auto auto;
        background-color: $white;   
        display: none;
        article
            border: 0.1px solid $gray-border;
            padding: 0.5rem 0rem;
            display: flex;
            justify-content: center;
            align-items: center; 
            color: $green;       
        article:nth-child(1)
            border-left: none; 
        article:nth-child(2)
            border-right: none;     
@media (max-width: $breakpoint-tablet)
    #container-publication
        .card
            grid-template-columns: 20% 80% !important;
            .hidden_link
                display: none;
        .buttons_publication
            display: grid !important;
        .row_footer
                div:nth-child(1)
                    width: 7%;
                    &.circle_second
                        width: 10%;
                    &.circle_third
                        width: 20% !important;
@media (max-width: $breakpoint-phone-large)
    #container-publication
        .card
            grid-template-columns: 30% 70% !important;
            .hidden_link
                display: none;
        .buttons_publication
            display: grid !important;
        .row_footer
                div:nth-child(1)
                    width: 7%;
                    &.circle_second
                        width: 17% !important;
                    &.circle_third
                        width: 25% !important;
@media (max-width: $breakpoint-phone)
    #container-publication
        .card
            grid-template-columns: 30% 70% !important;
        .row_footer
                div:nth-child(1)
                    width: 7%;
                    &.circle_second
                        width: 20% !important;
                    &.circle_third
                        width: 30% !important; 
</style>