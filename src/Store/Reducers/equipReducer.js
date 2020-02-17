import * as actionType  from '../../Store/actions';

const intialState = {
  link:null,
  location : "Equipment",

};

const  equipReducer = (state = intialState, action) => {

  switch (action.type) {
    case actionType.KAMI_EQUIP:

      return {
        ...state,
        location: 'Kami',
        link:'https://wimbusstudios.herokuapp.com/equip?equipLoc=Kami'
      };

    case actionType.ORNERY_COAST_EQUIP:
      return {
        ...state,
        location: 'Ornery Coast',
        link: 'https://wimbusstudios.herokuapp.com/equip?equipLoc=Ornery Coast'
      };

    case actionType.MAGIK_EQUIP:
      return {
        location:'Magik',
        link: 'https://wimbusstudios.herokuapp.com/equip?equipLoc=Magik'
      }
  }
  return state;
};

export default equipReducer;
