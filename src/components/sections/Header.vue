<template>
    <header>
       <h6 id = "title">{{title}}</h6>
       <span id = "name_user">Hola! {{name}}</span>
       <b-icon-list font-scale="1.5"></b-icon-list>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data:() => {
      return {
          title:'Domicilios test',
          name:'Juan'
      };
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="sass">
@import '../../styles/variables.scss';

header
    z-index: 10;
    border-bottom: 1px solid $gray-border-header;
    display: flex;
    height: 4rem;
    align-items: center;
    background-color: $white;
    width: 100%;
    padding: 1.5rem;
    position: fixed;
    justify-content: flex-end;
    #title
        color: $black;
        margin: auto;
        width: fit-content;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;
    #name_user
        color: $gray-name;
    ::v-deep .b-icon
        display: none;

@media (max-width: $breakpoint-tablet)
    header
        #name_user
            display: none
        ::v-deep .b-icon
            display: block;


</style>