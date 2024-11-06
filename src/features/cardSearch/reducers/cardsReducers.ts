import { CardActionTypes } from "../model/CardActionTypes";
import { CardsState } from "../model/CardsState";

const initialState: CardsState = {
  query: {
    cardName: "",
    cardType: "",
    cardCost: "",
    description: "",
    power: "",
    toughness: "",
  },
  results: [],
  loading: false,
  error: null,
};

export const cardsReducers = (
  state = initialState,
  action: any,
): CardsState => {
  switch (action.type) {
    case CardActionTypes.SET_QUERY:
      return {
        ...state,
        query: { ...state.query, ...action.payload },
      };
    case CardActionTypes.FETCH_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CardActionTypes.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case CardActionTypes.FETCH_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
