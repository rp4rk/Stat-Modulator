/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import defaultState from './default-state';
import * as types from './mutation-types';
import CONSTANTS from '../assets/constants';
import Stat from '../models/Stat';

export const STORAGE_KEY = 'stat-modulator';

export const state = {
  character: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defaultState,
};

export const mutations = {
  // Sweet merciful fuck this is ugly but it works
  [types.GET_CHARACTER](state, response) {
    state.character.artifact = response.data.items.mainHand;
    state.character.class = response.data.class;
    state.character.image = `http://render-api-${state.character.region}.worldofwarcraft.com/static-render/${state.character.region}/${response.data.thumbnail}`;
    state.character.name = response.data.name;
    state.character.realm = response.data.realm;

    const statMatrix = new Map(CONSTANTS.STATS);
    state.character.stats = Object.keys(response.data.stats)
      .filter(statLabel => statMatrix.has(statLabel))
      .map(statLabel =>
        new Stat(response.data.stats[statLabel],
        statMatrix.get(statLabel),
        CONSTANTS.STATS.filter(stat => stat[0] === statLabel)[0][2])
      );

    const mainStat = state.character.stats
      .reduce((prev, current) => {
        if (prev.value < current.value) {
          return current;
        }
        return prev;
      });

    state.character.mainStat = mainStat.name;

    state.character.appLoaded = true;
  },

  [types.SET_APP_LOAD_STATE](state, isLoaded) {
    state.character.appLoaded = isLoaded;
  },

  [types.SET_REALMS](state, response) {
    state.character.realms = response.data.realms;
  },
};
