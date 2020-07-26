import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('vue_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (publications) => {
  try {
    const serializedState = JSON.stringify(publications);
    localStorage.setItem('vue_state', serializedState);
  } catch (err) {
    return err
  }
}

const store = new Vuex.Store({
  state: {
    count: 0,
    publications: loadState() || [],
    names:['Simon','Ana','Jose','Jimena','Roxana','Anthony','Juan Carlos','Laura','Daniela','Julian']
  },
  mutations: {
    publish(state,item){
      state.publications.push(item);
      saveState(state.publications);
    },
    react(state,id){
      const pubIndex = state.publications.findIndex((obj => obj.id == id));
      state.publications[pubIndex].reactions++;
      saveState(state.publications);
    },
    addComment(state,comm){
      const pubIndex = state.publications.findIndex((obj => obj.id == comm.id_publication));
      state.publications[pubIndex].comments.push(comm);
      saveState(state.publications);
    }
  },
  getters: {
    getNames: state => {
      return state.names;
    }
  }
});

export default store;