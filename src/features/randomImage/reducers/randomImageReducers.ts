import { ImageActionTypes } from "../model/ImageActionTypes";
import { RandomImageState } from "../model/RandomImageState";

const initialState: RandomImageState = {
  imageCard: null,
  loading: false,
  success: false,
  error: null,
};

export const randomImageReducers = (
  state = initialState,
  action: any,
): RandomImageState => {
  switch (action.type) {
    case ImageActionTypes.SET_RANDOM_IMAGE_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case ImageActionTypes.SET_RANDOM_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case ImageActionTypes.SET_RANDOM_IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case ImageActionTypes.SET_RANDOM_IMAGE:
      return {
        ...state,
        imageCard: action.payload,
        loading: false,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};
