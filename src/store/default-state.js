export default {
  name: '',
  realm: '',
  region: '',
  image: '',
  mainStat: '',
  appLoaded: false,
  realms: [],
  stats: {
    intellect: {
      value: 0,
      ratio: null,
      label: 'Intellect',
      modifier: 0,
    },
    agility: {
      value: 0,
      ratio: null,
      label: 'Agility',
      modifier: 0,
    },
    strength: {
      value: 0,
      ratio: null,
      label: 'Strength',
      modifier: 0,
    },
    crit: {
      value: 0,
      ratio: 350,
      label: 'Critical Strike',
      modifier: 0,
      isSecondary: true,
    },
    haste: {
      value: 0,
      ratio: 325,
      label: 'Haste',
      modifier: 0,
      isSecondary: true,
    },
    mastery: {
      value: 0,
      ratio: 350,
      label: 'Mastery',
      modifier: 0,
      isSecondary: true,
    },
    vers: {
      value: 0,
      ratio: 400,
      label: 'Versatility',
      modifier: 0,
      isSecondary: true,
    },
  },
};