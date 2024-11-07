import React, { useEffect } from "react";
import { ButtonToolbar } from "../../../common/ui/component/ButtonToolbar";
import { Button } from "../../../common/ui/component/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchRandomImage } from "../actions/randomImageActions";
import { ImageWithLoading } from "../../../common/ui/container/ImageWithPlaceholder";

export const RandomImageContainer = () => {
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

  return (
    <>
      {imageCard && (
        <ButtonToolbar>
          <ImageWithLoading
            src={imageCard?.image_uris?.normal}
            alt={imageCard.name}
            width="218px"
            height="303px"
            isLoading={loading}
            error={error}
          />

          <Button variant="primary" type="button" onClick={handleNewImage}>
            New Image
          </Button>
        </ButtonToolbar>
      )}
    </>
  );
};
