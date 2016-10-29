import axios from 'axios';
import * as types from './mutation-types';

export default {
  // Returns armory JSON for character
  loadCharacter({ commit, state }) {
    const name = state.character.name;
    const realm = state.character.realm;
    const region = state.character.region;
    const resource = `https://${region}.api.battle.net/wow/character/${realm}/${name}?fields=stats,talents,items&locale=en_US&apikey=${process.env.API_KEY}`;
    axios.get(resource)
      .then(data => commit(types.GET_CHARACTER, data));
  },

  // Sets app loaded to false
  setAppLoaded({ commit }) {
    commit(types.SET_APP_LOAD_STATE, false);
  },

  // Load Realms
  loadRealms({ commit, state }) {
    const region = state.character.region;
    const resource = `https://${region}.api.battle.net/wow/realm/status?locale=en_US&apikey=${process.env.API_KEY}`;
    axios.get(resource)
      .then(data => commit(types.SET_REALMS, data));
  },
};
