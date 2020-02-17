import * as actionType  from '../../Store/actions';

const intialState = {
  link:null,
  location : 'Items',

};

const  itemReducer = (state = intialState, action) => {

  switch (action.type) {
    case actionType.KAMI_ITEMS:

      return {
        ...state,
        location: 'Kami',
        link:'https://wimbusstudios.herokuapp.com/items?itemLoc=Kami',
      };

    case actionType.ORNERY_COAST_ITEMS:
      return {
        ...state,
        location: 'Ornery Coast',
        link: 'https://wimbusstudios.herokuapp.com/items?itemLoc=Ornery Coast'
      };

    case actionType.MAGIK_ITEMS:
      return {
        location:'Magik',
        link: 'https://wimbusstudios.herokuapp.com/items?itemLoc=Magik'
      }
  }
      return state;
};

export default itemReducer;
