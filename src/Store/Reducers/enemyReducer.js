import * as actionType  from '../../Store/actions';

const intialState = {
  link:null,
  location : "Enemy",

};

const  enemyReducer = (state = intialState, action) => {

  switch (action.type) {
    case actionType.ORNERY_COAST_ENEMY:

      return {
        ...state,
        location: 'Ornery Coast',
        link:'https://wimbusstudios.herokuapp.com/beastiary?enemyLoc=Ornery Coast',
      };

    case actionType.BEAKS_PEAKS_ENEMY:
      return {
        ...state,
        location: 'Beaks Peaks',
        link: 'https://wimbusstudios.herokuapp.com/beastiary?enemyLoc=Beaks Peaks'
      };

    case actionType.HAVEN_ENEMY:
      return {
        location:'Haven',
        link: 'https://wimbusstudios.herokuapp.com/beastiary?enemyLoc=Haven',
      }
  }
  return state;
};

export default enemyReducer;
