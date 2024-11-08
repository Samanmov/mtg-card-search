import { ImageActionTypes } from "../model/ImageActionTypes";
import { AppDispatch } from "../../../store";
import { Card } from "../../cardSearch/model/Card";

export const setRandomImage = (imageCard: Card) => ({
  type: ImageActionTypes.SET_RANDOM_IMAGE,
  payload: imageCard,
});

export const setRandomImageLoading = () => ({
  type: ImageActionTypes.SET_RANDOM_IMAGE_LOADING,
});

export const setRandomImageSuccess = () => ({
  type: ImageActionTypes.SET_RANDOM_IMAGE_SUCCESS,
});

export const setRandomImageError = (error: string) => ({
  type: ImageActionTypes.SET_RANDOM_IMAGE_ERROR,
  payload: error,
});

export const fetchRandomImage = () => async (dispatch: AppDispatch) => {
  dispatch(setRandomImageLoading());
  try {
    const response = await fetch("https://api.scryfall.com/cards/random");
    const data = await response.json();
    dispatch(setRandomImage(data));
    dispatch(setRandomImageSuccess());
  } catch (error) {
    console.error("Error fetching random image:", error);
    dispatch(setRandomImageError("Failed to fetch random image."));
  }
};
