import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useEffect } from "react";
import { fetchRandomImage } from "../actions/randomImageActions";
import { Card } from "../../cardSearch/model/Card";

type Out = {
  imageCard: Card | null;
  handleNewImage: () => void;
  isLoading: boolean;
  error: string | null;
};

export const useRandomImage = (): Out => {
  const dispatch = useDispatch<AppDispatch>();
  const { imageCard, loading, error } = useSelector(
    (state: RootState) => state.randomImage,
  );

  useEffect(() => {
    if (!imageCard) {
      dispatch(fetchRandomImage());
    }
  }, [dispatch, imageCard]);

  const handleNewImage = () => {
    dispatch(fetchRandomImage());
  };

  return {
    imageCard,
    handleNewImage,
    error,
    isLoading: loading,
  };
};
