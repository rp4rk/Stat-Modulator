/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import defaultState from './default-state';
import * as types from './mutation-types';

export const STORAGE_KEY = 'stat-modulator';

export const state = {
  character: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defaultState,
};

export const mutations = {
  // Sweet merciful fuck this is ugly but it works
  [types.GET_CHARACTER](state, response) {
    state.character.image = `http://render-api-${state.character.region}.worldofwarcraft.com/static-render/${state.character.region}/${response.data.thumbnail}`;
    state.character.name = response.data.name;
    state.character.realm = response.data.realm;

    state.character.stats.intellect.value = response.data.stats.int;
    state.character.stats.agility.value = response.data.stats.agi;
    state.character.stats.strength.value = response.data.stats.str;

    state.character.mainStat = Object.keys(state.character.stats)
      .reduce((prev, current) => {
        const stats = state.character.stats;
        if (stats[prev].value < stats[current].value) {
          return current;
        }
        return prev;
      });

    state.character.stats.crit.value = response.data.stats.critRating;
    state.character.stats.haste.value = response.data.stats.hasteRating;
    state.character.stats.mastery.value = response.data.stats.masteryRating + 2800;
    state.character.stats.vers.value = response.data.stats.versatility;

    state.character.appLoaded = true;
  },

  [types.SET_APP_LOAD_STATE](state, isLoaded) {
    state.character.appLoaded = isLoaded;
  },

  [types.SET_REALMS](state, response) {
    state.character.realms = response.data.realms;
  },
};
